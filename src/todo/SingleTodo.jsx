import React from 'react'
import { IoMdTrash } from "react-icons/io";

const SingleTodo = ({ id, todo, remove }) => {
    return (
        <>
            <div className="col-md-4 my-3">
                <div className="d-flex justify-content-between align-items-center border p-3">
                    <h5>{todo}</h5>
                    <IoMdTrash onClick={() => remove(id)} color='red' size={30} cursor="pointer" />
                </div>
            </div>
        </>
    )
}

export default SingleTodo