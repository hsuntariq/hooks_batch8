import React, { useEffect, useState } from 'react'

const UseEffectBasics = () => {
    const [count, setCount] = useState(0)


    useEffect(() => {
        console.log('component rerendered')
        if (count == 0) {
            document.title = 'Vite + React'
        } else {
            document.title = `${count} new messages`
        }
    }, [count])

    return (
        <>
            <div className="container text-center col-lg-5 ms-auto shadow p-4">
                <h1 className="text-center display-1">
                    {count}
                </h1>
                <button onClick={() => setCount(count + 1)} className="btn btn-success">
                    Increase
                </button>
            </div>
        </>
    )
}

export default UseEffectBasics