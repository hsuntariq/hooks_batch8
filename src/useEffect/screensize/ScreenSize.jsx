import React, { useEffect, useState } from 'react'

const ScreenSize = () => {
    const [size, setSize] = useState(window.innerWidth)

    const setScreenSize = () => {
        setSize(window.innerWidth)
    }

    useEffect(() => {
        console.log('useeffect ran')
        window.addEventListener('resize', setScreenSize)


        // when component unmounts

        return () => {
            console.log('cleanup ran ')
            window.removeEventListener('resize', setScreenSize)
        }


    })



    return (
        <>
            <div className="container text-center">
                <h1 className="display-1">
                    Screen Size: {size} px
                </h1>

            </div>
        </>
    )
}

export default ScreenSize