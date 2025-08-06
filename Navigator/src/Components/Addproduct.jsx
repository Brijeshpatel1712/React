import axios from 'axios'
import React, { useState } from 'react'
import '../App.css'

const Addproduct = () => {
  const initialState = {
    image: "",
    price: "",
    description: ""
  }

  const [data, setData] = useState(initialState)

  function handleSubmit(e) {
    e.preventDefault()
    console.log(data)

    axios.post('http://localhost:3000/products', data)
      .then((res) => {
        alert("Data Added Successfully")
        console.log(res)
      })
      .catch((error) => console.log(error))
  }

  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  return (
    <div className="add-product-container">
      <h1>Add Product</h1>
      <form className="add-product-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="image"
          placeholder="Enter Image URL"
          onChange={handleChange}
        />
        <input
          type="text"
          name="price"
          placeholder="Enter Price"
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Enter Description"
          onChange={handleChange}
        />
        <input type="submit" value="Add Product" />
      </form>
    </div>
  )
}

export default Addproduct
