import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Add = () => {
    const navigate = useNavigate()
    const [list, setList] = useState({
        name: "",
        email: "",
        position: "",
        address:[]
    })
    const { name, email, position,address } = list

    const handleChange = (e) => {
        //console.log(e.target.value,"e")
        setList({ ...list, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (localStorage.getItem('newUser')) {
            const user = JSON.parse(localStorage.getItem('newUser'))
            user.push(list)
            window.localStorage.setItem("newUser", JSON.stringify(user))
        } else {
            const user = []
            user.push(list)
            window.localStorage.setItem("newUser", JSON.stringify(user))
        }
        navigate("/")
    }
console.log(list,"list")
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label>Name</label>
                    <input type="text" name='name' value={name} onChange={(e) => handleChange(e)} />
                </div>
                <div className="form-control">
                    <label>Email</label>
                    <input type="email" name='email' value={email} onChange={(e) => handleChange(e)} />
                </div>
                <div className="form-control">
                    <label>Position</label>
                    <input type="text" name='position' value={position} onChange={(e) => handleChange(e)} />
                </div>
                <div className="form-control">
                    <label>Address</label>
                    <input type="text" name='address' value={address} onChange={(e) => handleChange(e)} />
                </div>
                <div className="sbmt-btn">
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </>
    )
}

export default Add