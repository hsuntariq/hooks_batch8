import React, { useEffect, useState } from 'react'
import SingleUser from './SingleUser'
import { RotatingLines } from 'react-loader-spinner'
import Skeleton from 'react-loading-skeleton'

const Users = () => {
    const api = "https://api.github.com/users"
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)
    // function to get the data from the api
    const getUsers = async () => {
        setLoading(true)
        const response = await fetch(api)
        const data = await response.json()
        setUsers(data)
        setLoading(false)
    }


    useEffect(() => {
        getUsers()
    }, [])

    if (loading) {
        return <>
            <div className="row container mx-auto">
                {Array.from({ length: 10 }).map(() => {
                    return (
                        <>
                            <div className="col-md-3">
                                <div className="d-flex flex-column gap-2">
                                    <Skeleton width="100%" height={300} />
                                    <Skeleton width={200} height={50} />
                                    <Skeleton width={20} height={30} />
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>

        </>
    }

    return (
        <>
            <div className="container">
                <div className="row">


                    {users?.map((item) => {
                        return (
                            <>
                                <SingleUser key={item.id} {...item} />
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Users