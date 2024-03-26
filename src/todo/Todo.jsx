import React, { useState } from 'react'
import SingleTodo from './SingleTodo'

const Todo = () => {
    const [todo, setTodo] = useState('')
    const [store, setStore] = useState([])
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)
    const [message, setMessage] = useState('')
    const handleClick = (e) => {
        e.preventDefault()
        if (!todo) {
            setSuccess(false)
            setError(true)
            setMessage('Please enter a todo')
        } else {
            setSuccess(true)
            setError(false)
            setStore([...store, { id: Date.now(), todo }])
            setMessage('Task added successfully!!!')
        }
        setTodo('')

        setTimeout(() => {
            setError(false)
            setSuccess(false)
            setMessage('')
        }, 3000)


    }


    const removeTodo = (id) => {
        const newTodos = store.filter((item) => {
            return item.id !== id
        })
        setStore(newTodos)
    }

    return (
        <>
            <div className="container col-lg-5 mx-auto shadow p-4">
                <h1 className="display-6 text-center">
                    Add Todo
                </h1>
                <form>
                    <label htmlFor="">Todo</label>
                    <input value={todo} onChange={(e) => setTodo(e.target.value)} type="text" placeholder='add todo...' className="form-control" />

                    {error &&
                        <p className="text-danger fw-bold">
                            {message}
                        </p>
                    }

                    {
                        success &&
                        <p className="text-success fw-bolder">
                            {message}
                        </p>
                    }


                    <button onClick={handleClick} className="btn btn-dark w-100 my-2">
                        Add Todo
                    </button>
                </form>
            </div>

            <div className="container">
                <div className="row">
                    {store.map((item, index) => {
                        return <SingleTodo key={index} {...item} remove={removeTodo} />
                    })}
                </div>
            </div>

        </>
    )
}

export default Todo