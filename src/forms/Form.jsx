import React, { useState } from 'react'

const Form = () => {
    const [name, setName] = useState('')
    const [error, setError] = useState(false)
    const [message, setMessage] = useState('');
    const handleClick = (e) => {
        e.preventDefault()
        if (!name) {
            setError(true)
            setMessage('Please enter the name')
        } else if (name.length < 3) {
            setError(true)
            setMessage('Minimum characters should be 3')
        }
        else {
            setError(false)
            console.log(name)
        }
        setName('')
    }


    return (
        <>
            <div className="container col-lg-5 mx-auto shadow p-3">
                <form>
                    <label>Name</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='Please enter your name...' className="form-control" />
                    {error && <p className='text-danger fw-bolder'>
                        {message}
                    </p>}
                    <button onClick={handleClick} className='btn btn-success w-100 my-2'>
                        Add Data
                    </button>
                </form>
            </div>
        </>
    )
}

export default Form