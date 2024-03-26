import React, { useState } from 'react'

const Todo = () => {
    const [todo, setTodo] = useState({
        task: '', date: '', time: '04:18'
    })

    const { task, date, time } = todo

    const handleChange = (e) => {
        // console.log(e.target.name)
        // console.log(e.target.value)
        setTodo((prevValue) => ({
            ...prevValue,
            [e.target.name]: e.target.value
        }))
    }


    return (
        <>
            <div className="container col-lg-5 mx-auto shadow p-4">
                <h1 className="text-center">
                    Todo
                </h1>
                <form>
                    <label htmlFor="">todo</label>
                    <input name='task' value={task} onChange={handleChange} className='form-control' type="text" />
                    <label htmlFor="">Date</label>
                    <input name='date' value={date} onChange={handleChange} className='form-control' type="date" />
                    <label htmlFor="">Time</label>
                    <input name='time' value={time} onChange={handleChange} className='form-control' type="time" />

                    <button className="btn btn-secondary w-100 my-2">
                        Add Data
                    </button>

                </form>
            </div>

        </>
    )
}

export default Todo