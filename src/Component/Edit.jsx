import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Edit = () => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('newUser')) || [])
    const [editUser, setEditUser] = useState("")
    console.log(editUser, "editUser")
    const navigate = useNavigate()
    const { id } = useParams();
    console.log(id,"i")
    // const [editData, setEditData] = useState({
    //     name: "",
    //     email: "",
    //     position: ""
    // })
    // const { name, email, position } = editData

useEffect(() => {
 const editUser=JSON.parse(localStorage.getItem("newUser") || [])
 setEditUser(editUser[id])
}, [id])

    const handleChange = (e) => {
        console.log(e.target.value, "e")
        setEditUser({ ...editUser, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const edititem=[...user]
        edititem[id]=editUser
        console.log(edititem,"item")
        localStorage.setItem("newUser", JSON.stringify(edititem))
        navigate("/")
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label>Name</label>
                    <input type="text" name='name' value={editUser.name} onChange={(e) => handleChange(e)} />
                </div>
                <div className="form-control">
                    <label>Email</label>
                    <input type="email" name='email' value={editUser.email} onChange={(e) => handleChange(e)} />
                </div>
                <div className="form-control">
                    <label>Position</label>
                    <input type="text" name='position' value={editUser.position} onChange={(e) => handleChange(e)} />
                </div>
                <div className="sbmt-btn">
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </>
    )
}

export default Edit