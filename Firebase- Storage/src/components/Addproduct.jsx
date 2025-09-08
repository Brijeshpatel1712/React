import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "../App.css";

import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/firebase";

const Addproduct = () => {
  const obj = {
    title: "",
    image: "",
    description: "",
    price: "",
    category: "",
  };

  const [formdata, setformdata] = useState(obj);

  async function hendealsubmit(e) {
    e.preventDefault();
    e.target.reset();

    // axios.post(`http://localhost:3000/products`,formdata)
    // .then((res)=>setformdata(res.data))
    // .catch(error => console.error('Error:', error));

    try {
      const docRef = await addDoc(collection(db, "kanu"), {
        title: formdata.title,
        image: formdata.image,
        description: formdata.description,
        price: formdata.price,
        category: formdata.category,
      });

      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    console.log(formdata);
  }

  function hendelcheng(e) {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  }

  return (
    <>
      <br />
      <Container>
        <div>
          <form onSubmit={hendealsubmit}>
            <p>title</p>
            <input type="text" name="title" onChange={(e) => hendelcheng(e)} />

            <p>imege</p>
            <input type="url" name="image" onChange={(e) => hendelcheng(e)} />

            <p>description</p>
            <input
              type="text"
              name="description"
              onChange={(e) => hendelcheng(e)}
            />

            <p>price</p>
            <input
              type="number"
              name="price"
              onChange={(e) => hendelcheng(e)}
            />

            <p>category</p>
            <input
              type="text"
              name="category"
              onChange={(e) => hendelcheng(e)}
            />
            <br />
            <br />

            <input type="submit" />
          </form>
        </div>
      </Container>
    </>
  );
};

export default Addproduct;
