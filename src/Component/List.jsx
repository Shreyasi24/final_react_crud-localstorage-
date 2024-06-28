import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'

const List = () => {
    const navigate = useNavigate()
    const data = localStorage.getItem('newUser')
    //main state
    const [user, setUser] = useState(JSON.parse(data) || [])


    //edit
    const handleEdit = (i) => {
        //navigate("/edit")
        // const editU = user.find((item, id) => id === i)
        // console.log(editU, "edit")
        // //setUser(editU)
        // localStorage.setItem("editUser", JSON.stringify(editU))
    }

    //delete
    const handleDelete = (id) => {
        //console.log(id, "i")
        const newU = user.filter((item, i) => i !== id)
        setUser(newU)
        localStorage.setItem('newUser', JSON.stringify(newU))
    }
    useEffect(() => {
        const newList = localStorage.getItem('newUser' || [])
        setUser(JSON.parse(newList))
    }, [])
    console.log(user, "user")

    //edit
    useEffect(() => {
        const editList = localStorage.getItem('newUser' || [])
        setUser(JSON.parse(editList))
    }, [])

    return (
        <>
            <Link to="/add">Add User</Link>
            <table>
                <thead>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Position</th>
                    <th>Adress</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    {
                        user && user.map((data, i) => {
                            return (
                                <tr key={i}>
                                    <td>{data.name}</td>
                                    <td>{data.email}</td>
                                    <td>{data.position}</td>
                                    <td>{data.address}</td>
                                    <td>
                                        <button type='button' onClick={() => handleAdd()}>Add</button>
                                        <button type='button' onClick={(e) => handleDelete(e)}>Remove</button>
                                        </td>
                                    <td>
                                        <Link to={`/edit/${i}`}>Edit</Link>
                                        <button onClick={() => handleDelete(i)}>Delete</button>
                                    </td>
                                </tr>

                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default List