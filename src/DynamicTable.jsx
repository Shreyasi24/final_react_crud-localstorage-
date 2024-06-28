import React, { useState } from 'react'

const DynamicTable = () => {
    const [data,setData]=useState([])
    const handleAdd=()=>{
const add=[...data,[]]
setData(add)
    }
 
    const handleChange=(e,i)=>{
        console.log(e.target.value,"e")
        const newData=[...data]
        newData[i]=e.target.value
        setData(newData)
    }
    const handleDelete=(i)=>{
        console.log(i,'i')
        const dlt=[...data]
       dlt.splice(i,1)
        setData(dlt)
    }
  return (
    <>
    <button onClick={()=>handleAdd()}>Add</button>
    <>
    {
        data && data.map((item,i)=>
        <div key={i}>
            <input value={item} onChange={(e)=>handleChange(e,i)}/>
            <button onClick={()=>handleDelete(i)}>Delete</button>
         </div>
        )
    }
    </>
    </>
  )
}

export default DynamicTable