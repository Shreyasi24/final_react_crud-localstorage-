import React, { useState } from 'react'


// const word = "$4,2,389,00"
// const newWord = word.split("")
// console.log(newWord, "newWord")
// const arr = []
// for (let i = 0; i < newWord.length; i++) {
//     console.log(typeof newWord[i], "hh")
//     if (newWord[i] !== ',' && newWord[i] !== '$') {
//         arr.push(newWord[i])
//     }
//     console.log(arr.join(""), "word")
// }


const Form = () => {
    const [data, setData] = useState({
        name: "",
        age: "",
        gender: "",
        product: []
    })

    const { name, age, gender, product } = data;
    // const handleChange = (e) => {
    //     //console.log(e.target.value, "e")
    //     setData({ ...data, [e.target.name]: e.target.value })
    // }
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ?
                checked ? [...prevState[name], value] : prevState[name].filter(item => item !== value) :
                value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault()

        const info = {
            name: name,
            age: +(age),
            gender: gender,
            product: product
        }
        console.log(info, "data")
    }



    return (
        <form onSubmit={handleSubmit}>
            <div className="form-control">
                <label>Name</label>
                <input type='text' name="name" value={name} onChange={(e) => handleChange(e)} />
            </div>
            <div className="form-control">
                <label>Age</label>
                <input type='number' name="age" min={1} value={age} onChange={(e) => handleChange(e)} />
            </div>
            <div className="form-control">
                <label>Gender</label>
                <input type="radio" name="gender" value="male" onChange={(e) => handleChange(e)} />
                <label for="">Male</label>
                <input type="radio" name="gender" value="female" onChange={(e) => handleChange(e)} />
                <label for="">Female</label>
            </div>
            <div className="form-control">
                <label>Product</label>
                <input type="checkbox" name="product" checked={product.includes('saree')} value="saree" onChange={(e) => handleChange(e)} />
                <label for="">Saree</label>
                <input type="checkbox" name="product" checked={product.includes('punjabi')} value="punjabi" onChange={(e) => handleChange(e)} />
                <label for="">Punjabi</label>
                <input type="checkbox" name="product" checked={product.includes('kurta')} value="kurta" onChange={(e) => handleChange(e)} />
                <label for="">Kurta</label>
            </div>
            <div className="submission">
                <button type='submit'>Submit</button>
            </div>
        </form>
    )
}

export default Form