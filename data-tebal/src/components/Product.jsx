import axios from "axios";
import React, { useEffect, useState } from "react";

const Product = () => {
  const [data, setdata] = useState([]);

  const [price, setPrice] = useState(0);
  const [updetedid, setupdeteid] = useState(null);

  function fatchdata() {
    axios
      .get("http://localhost:3000/products")
      .then((res) => setdata(res.data))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    fatchdata();
  }, []);

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
    <>
      <h1 style={{ textAlign: "center" }}>products</h1>

      <input
        type="text"
        placeholder="updet prise"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <br />
      <button onClick={hendalupdet}>updet</button>

      <br />
      <br />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "10px",
        }}>
          
        {data.map((el) => (
          <div
            key={el.id}
            style={{ border: "solid 2px black", alignContent: "center" }}>
            <img src={el.image} alt="" height={200} width={200} />
            <h3>{el.title}</h3>
            <p> price : {el.price}</p>
            <p>{el.description}</p>
            <h4>{el.category}</h4>
            
            <button onClick={() => hendaledit(el.id, el.price)}>
              Edit price
            </button>
            <button onClick={() => hendaldelete(el.id)}>delete</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Product;
