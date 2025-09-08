import "../App.css";

import axios from "axios";
import React, { useEffect, useState } from "react";

const Product = () => {
  const [data, setdata] = useState([]);
  const [page, setpage] = useState(1);

  const [price, setPrice] = useState(0);
  const [updetedid, setupdeteid] = useState(null);

  function fatchdata() {
    axios
      .get(`http://localhost:3000/products?_limit=8&_page=${page}`)
      .then((res) => setdata(res.data))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    fatchdata();
  }, [page]);

  function hendaledit(id, price) {
    setupdeteid(id);
    setPrice(price);
  }

  function hendalupdet() {
    axios
      .patch(`http://localhost:3000/products/${updetedid}`, { price })
      .then((res) => {
        fatchdata();
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }

  function hendaldelete(id) {
    axios
      .delete(`http://localhost:3000/products/${id}`)
      .then((res) => {
        fatchdata();
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="products-container">
      <h1>Products</h1>

      {/* Update Section */}
      <div className="update-section">
        <input
          type="text"
          placeholder="Update Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button onClick={hendalupdet}>Update</button>
      </div>

      {/* Product Grid */}
      <div className="product-grid">
        {data.map((el) => (
          <div key={el.id} className="product-card">
            <img src={el.image} alt={el.title} />
            <h3>{el.title}</h3>
            <p>Price: ₹{el.price}</p>
            <p>{el.description}</p>
            <h4>{el.category}</h4>
            <button onClick={() => hendaledit(el.id, el.price)}>
              Edit Price
            </button>
            <button onClick={() => hendaldelete(el.id)}>Delete</button>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination">
        <button disabled={page === 1} onClick={() => setpage(page - 1)}>
          Prev
        </button>
        <span>{page}</span>
        <button disabled={page === 4} onClick={() => setpage(page + 1)}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Product;
