import React, { useState } from 'react'
import SingleBirthday from './SingleBirthday'
import { bdays } from './data'

const Birthday = () => {
    const [myData, setMyData] = useState(bdays)


    const removePerson = (id) => {
        const updatedData = myData.filter((person) => {
            return person.id !== id
        })

        setMyData(updatedData)

    }


    const handleClick = () => {
        if (myData.length > 0) {
            setMyData([])
        } else {
            setMyData(bdays)
        }
    }

    return (
        <>
            <div className="container col-lg-6 mx-auto shadow p-5">
                <h1 className="display-4 text-center">
                    {myData.length} birthdays today
                </h1>
                {myData.map((item) => {
                    return <SingleBirthday key={item.id}  {...item} remove={removePerson} />
                })}
                <button onClick={handleClick} className={`btn d-block mx-auto ${myData.length == 0 ? 'btn-success' : 'btn-danger'}`}>
                    {myData.length == 0 ? 'Refresh All' : 'Remove All'}
                </button>
            </div>
        </>
    )
}

export default Birthday