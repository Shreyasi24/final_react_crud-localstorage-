import React, { useEffect, useState } from 'react'

const User = () => {
    //edit
    const [editUser, setEditUser] = useState("")
    const [editInd, setEditInd] = useState('')
    //add
    const [user, setUser] = useState([])
    //user
    const [data, setData] = useState({
        name: "",
        email: "",
        position: ""
    })
    const { name, email, position } = data
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        user.push(data)
        setUser(user)
    }
    const handleDelete = (i) => {
        //console.log(i, "i")
        const dltData = user.filter((item, id) => id !== i)
        setUser(dltData)
    }
    //edit
    const handleEdit = (data, i) => {
        console.log(data, "dd")
        // console.log(i, "i")
        //const getData = user;
        //console.log(getData, "get")
        setEditUser(data)
        setEditInd(i)
    }
    const handleinput = (e) => {
        setEditUser({ ...editUser, [e.target.name]: e.target.value })
    }
    const handleSubmission = (e, i) => {
        e.preventDefault()
        console.log(i, "i")
        setData(user.map((item, i) => {
            if (i === editInd) {
                const updateddata = [...user]
                updateddata[i] = editUser
                setUser(updateddata)
            }
        }))
    }
    //console.log(editInd, "ind")
    //console.log(data, "data")
    //console.log(user, "user")
    //console.log(editUser, "editUser")
    return (
        <>
            {/* add user */}
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
                <div className="sbmt-btn">
                    <button type='submit'>Submit</button>
                </div>
            </form>

            {/* list of users */}
            <table>
                <thead>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Position</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    {
                        user.map((data, i) =>
                            <tr key={i}>
                                <td>{data.name}</td>
                                <td>{data.email}</td>
                                <td>{data.position}</td>
                                <td>
                                    <button onClick={() => handleEdit(data, i)}>Edit</button>
                                    <button onClick={() => handleDelete(i)}>Delete</button>
                                </td>
                            </tr>
                        )
                    }


                </tbody>
            </table>

            {/* edit user */}
            <form onSubmit={handleSubmission}>
                <div className="form-control">
                    <label>Name</label>
                    <input type="text" name='name' value={editUser.name} onChange={(e) => handleinput(e)} />
                </div>
                <div className="form-control">
                    <label>Email</label>
                    <input type="email" name='email' value={editUser.email} onChange={(e) => handleinput(e)} />
                </div>
                <div className="form-control">
                    <label>Position</label>
                    <input type="text" name='position' value={editUser.position} onChange={(e) => handleinput(e)} />
                </div>
                <div className="sbmt-btn">
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </>
    )
}

export default User