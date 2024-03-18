import React from 'react'

const SingleBirthday = ({ id, name, image, age, remove }) => {
    return (
        <>
            <div className="d-flex my-2 align-items-center justify-content-between">
                <div className="d-flex gap-3">
                    <img style={{
                        borderRadius: '50%'
                    }} width={70} height={70} src={image} alt="" />
                    <div className="info">
                        <h4>{name}</h4>
                        <p className="text-secondary">
                            {age} years
                        </p>
                    </div>
                </div>
                <button onClick={() => remove(id)} className="btn btn-danger">
                    Remove
                </button>
            </div>
        </>
    )
}

export default SingleBirthday