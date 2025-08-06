import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../App.css'

const Products = () => {
  const [value, setValue] = useState([])
  const [price, setPrice] = useState(0)
  const [updateID, setUpdateId] = useState(null)

  function fetchData() {
    axios.get('http://localhost:3000/products')
      .then((res) => setValue(res.data))
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    fetchData();
  }, [])

  function handleEdit(id, price) {
    setUpdateId(id)
    setPrice(price)
    console.log(id, price)
  }

  function handleUpdate() {
    axios.patch(`http://localhost:3000/products/${updateID}`, { price })
      .then((res) => {
        fetchData();
        console.log(res)
      })
      .catch((err) => console.log(err))
  }

  function handleDelete(id) {
    axios.delete(`http://localhost:3000/products/${id}`)
      .then((res) => {
        fetchData();
        console.log(res)
      })
      .catch((err) => console.log(err))
  }

  return (
    <div className="products-container">
      <h2>Edit Detail</h2>
      <div className="edit-section">
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder='Update Price'
        />
        <button onClick={handleUpdate}>Update</button>
      </div>

      <h1>Products</h1>
      <div className="products-grid">
        {
          value.map((el) =>
            <div className="product-card" key={el.id}>
              <img src={el.image} alt="product" />
              <h3>₹ {el.price}</h3>
              <p>{el.description}</p>
              <button onClick={() => handleEdit(el.id, el.price)}>Edit</button>
              <button onClick={() => handleDelete(el.id)}>Delete</button>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Products
