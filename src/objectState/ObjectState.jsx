import React, { useState } from 'react'

const ObjectState = () => {
    const [user, setUser] = useState({
        name: 'Ali', email: 'ali@mail.com', age: 21
    })

    // destructure
    const { name, email, age } = user


    const handleChange = () => {
        setUser({ ...user, name: 'Ahmed', age: 12 })
    }




    return (
        <>
            <div className="container text-center">
                <h1>{name}</h1>
                <h1>{email}</h1>
                <h1>{age}</h1>
                <button onClick={handleChange} className="btn btn-dark my-2">
                    Change
                </button>
            </div>
        </>
    )
}

export default ObjectState