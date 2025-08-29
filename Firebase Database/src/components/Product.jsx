import axios from "axios";
import React, { useEffect, useState } from "react";
import '../App.css'

const Product = () => {
  const [data, setData] = useState([]);
  const [price, setPrice] = useState("");
  const [updatedId, setUpdatedId] = useState(null);

  const fetchData = () => {
    axios
      .get("http://localhost:3000/products")
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleEdit = (id, price) => {
    setUpdatedId(id);
    setPrice(price);
  };

  const handleUpdate = () => {
    if (!updatedId || price === "") return;

    axios
      .patch(`http://localhost:3000/products/${updatedId}`, { price })
      .then(() => {
        fetchData();
        setUpdatedId(null);
        setPrice("");
      })
      .catch((err) => console.error(err));
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3000/products/${id}`)
      .then(() => fetchData())
      .catch((err) => console.error(err));
  };

  return (
    <div className="container">
      <h1 className="heading">Products</h1>

      <div className="input-section">
        <input
          type="text"
          placeholder="Update Price"
          value={price}
          className="input-box"
          onChange={(e) => setPrice(e.target.value)}
        />
        <button className="button" onClick={handleUpdate}>
          Update
        </button>
      </div>

      <div className="product-grid">
        {data.map((el) => (
          <div key={el.id} className="card">
            <img src={el.image} alt={el.title} />
            <h3>{el.title}</h3>
            <p>Price: ₹{el.price}</p>
            <p>{el.description}</p>
            <h4>{el.category}</h4>

            <button className="button" onClick={() => handleEdit(el.id, el.price)}>
              Edit Price
            </button>
            <button className="button" onClick={() => handleDelete(el.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
