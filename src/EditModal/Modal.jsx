import React from 'react'

const Modal = ({ showModal }) => {
    console.log(showModal, "m")
    const handleChange = () => {

    }
    const handleSubmit = () => {

    }
    return (
        <>
            {
                !showModal &&
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label>Name</label>
                        <input type="text" name='name' onChange={(e) => handleChange(e)} />
                    </div>
                    <div className="form-control">
                        <label>Email</label>
                        <input type="email" name='email' onChange={(e) => handleChange(e)} />
                    </div>
                    <div className="form-control">
                        <label>Position</label>
                        <input type="text" name='position' onChange={(e) => handleChange(e)} />
                    </div>
                    <div className="sbmt-btn">
                        <button type='submit'>Submit</button>
                    </div>
                </form>
            }

        </>
    )
}

export default Modal