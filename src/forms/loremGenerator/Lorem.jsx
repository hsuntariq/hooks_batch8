import React, { useEffect, useState } from 'react'
import { data } from './data'

const Lorem = () => {
    const [lorems, setLorems] = useState([])
    const [number, setNumber] = useState(0)
    const [error, setError] = useState(false)

    useEffect(() => {
        if (number > data.length) {
            setError(true)
            // setLorems([])
        } else {
            const newData = data.slice(0, number)
            setLorems(newData)
            setError(false)
        }
    }, [number])

    const handleLorems = (e) => {
        e.preventDefault()

    }


    return (
        <>
            <div className="container col-lg-5 mx-auto shadow p-4">
                <h1 className="display-6 text-center">
                    Lorem Gernerator
                </h1>
                <form>
                    <input value={number} onChange={(e) => setNumber(e.target.value)} type="text" placeholder='e.g. 4' className="form-control" />
                    {error && <p className='text-danger fw-bolder'>
                        Please enter length  less than {data.length}
                    </p>}
                    <button onClick={handleLorems} className="btn btn-dark w-100 my-2">
                        Generate
                    </button>
                </form>
            </div>
            <div className="container">
                {lorems.map((item, index) => {
                    return <p key={index} className='text-secondary text-center'>
                        {item}
                    </p>
                })}
            </div>
        </>
    )
}



export default Lorem