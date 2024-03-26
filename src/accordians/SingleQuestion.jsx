import React, { useState } from 'react'
import { GoPlus } from "react-icons/go";
import { FaMinus } from "react-icons/fa6";

const SingleQuestion = ({ id, question, answer }) => {

    const [show, setShow] = useState(false)

    const handleClick = () => {
        setShow(!show)
    }

    return (
        <>
            <div className="d-flex shadow my-3 p-2 justify-content-between gap-4 align-items-center my-2">
                <div className="q-a">
                    <h5>{question}</h5>
                    {show && <p className="text-secondary w-100">
                        {answer}
                    </p>}
                </div>
                <div className={`icon ${show ? 'bg-danger' : 'bg-info'} align-self-start p-2 rounded-circle`}>
                    {show ? (
                        <FaMinus onClick={handleClick} size={30} cursor="pointer" />
                    ) : (
                        <GoPlus onClick={handleClick} size={30} cursor="pointer" />
                    )}
                </div>
            </div>
        </>
    )
}

export default SingleQuestion