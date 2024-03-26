import React, { useState } from 'react'
import SingleQuestion from './SingleQuestion'
import { faqs } from './questions'

const Accordian = () => {
    const [data, setData] = useState(faqs)
    return (
        <>
            <div className="container col-lg-7 mt-5 bg-white shadow rounded-3 mx-auto">
                <div className="d-flex gap-4 p-5">
                    <h2>Questions And Answers About Login</h2>
                    <div className="faqs w-75">
                        {data.map((item) => {
                            return <SingleQuestion key={item.id} {...item} />
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Accordian