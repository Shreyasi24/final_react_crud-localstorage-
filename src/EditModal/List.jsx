import React, { useEffect, useState } from 'react'

const List = () => {
    //edit
    const [showModal, setShowModal] = useState(false)
    const [editData, setEditData] = useState("")
    useEffect(() => {

    }, [])

    //list
    const [data, setData] = useState([])
    useEffect(() => {
        const gatData = JSON.parse(localStorage.getItem("newData" || []))
        setData(gatData)
    }, [])

    //add
    const [user, setUser] = useState({
        name: "",
        email: "",
        position: ""
    })
    const { name, email, position } = user
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })

    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (localStorage.getItem("newData")) {
            const addUser = JSON.parse(localStorage.getItem("newData"))
            addUser.push(user)
            localStorage.setItem("newData", JSON.stringify(addUser))
        } else {
            const addUser = []
            addUser.push(user)
            localStorage.setItem("newData", JSON.stringify(addUser))
        }
    }
    //console.log(data, "data")
    //delete
    const handleDelete = (i) => {
        console.log(i, "i")
        const freshData = data.filter((item, id) => id !== i)
        setData(freshData)
        localStorage.setItem("newData", JSON.stringify(freshData))
    }
    useEffect(() => {
        const newList = localStorage.getItem("newData" || [])
        setData(JSON.parse(newList))
    }, [])
    //edit
    const handleEdit = (data, i) => {
        setEditData(data)
        setShowModal(!showModal)
    }
    const handleData = (e) => {
        setEditData({ ...editData, [e.target.name]: e.target.value })
    }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
    const handleSubmission = (e) => {
        e.preventDefault()

    }
    return (
        <>
            {/* adding user */}
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
                        data && data.map((item, i) => {
                            const { name, email, position } = item
                            return (

                                <tr tr key={i} >
                                    <td>{name}</td>
                                    <td>{email}</td>
                                    <td>{position}</td>
                                    <td>
                                        <button onClick={() => handleEdit(item, i)}>Edit</button>
                                        <button onClick={() => handleDelete(i)}>Delete</button>
                                    </td>
                                </tr>

                            )
                        })
                    }
                </tbody>
            </table >
            {/* edit */}
            {showModal &&
                <form onSubmit={handleSubmission}>
                    <div className="form-control">
                        <label>Name</label>
                        <input type="text" name='name' value={editData.name} onChange={(e) => handleData(e)} />
                    </div>
                    <div className="form-control">
                        <label>Email</label>
                        <input type="email" name='email' value={editData.email} onChange={(e) => handleData(e)} />
                    </div>
                    <div className="form-control">
                        <label>Position</label>
                        <input type="text" name='position' value={editData.position} onChange={(e) => handleData(e)} />
                    </div>
                    <div className="sbmt-btn">
                        <button type='submit'>Submit</button>
                    </div>
                    <div><span onClick={() => setShowModal(!showModal)}>Cross</span></div>
                </form>
            }
        </>
    )
}

export default List