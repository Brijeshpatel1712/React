import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../App'; // Import the CSS file

const Product = () => {
  const [product, setProduct] = useState([]);

  function fetchData() {
    axios
      .get('https://fakestoreapi.com/products')
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="product-page">
      <h1 className="product-title">Products</h1>
      <div className="product-grid">
        {product.map((el) => (
          <div className="product-card" key={el.id}>
            <img src={el.image} alt={el.title} className="product-image" />
            <h2 className="product-name">{el.title}</h2>
            <p className="product-price">${el.price}</p>
            <p className="product-description">{el.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
