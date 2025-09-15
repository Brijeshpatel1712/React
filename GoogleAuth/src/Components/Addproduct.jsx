import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react';
import { db } from '../Firebase/firebase';
import '../App'; // Import the CSS

const Addproduct = () => {
  const initialState = {
    title: '',
    description: '',
    price: 0,
    image: '',
    category: ''
  };

  const [formData, setFormData] = useState(initialState);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, 'products'), formData);
      console.log('Document written with ID: ', docRef.id);
      setFormData(initialState); // Reset form
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  }

  return (
    <div className="addproduct-container">
      <h2>Add Product</h2>
      <form className="addproduct-form" onSubmit={handleSubmit}>
        
        <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange} />
        
        <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} rows={4} />

        <input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleChange} />

        <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} />

        <input type="text" name="category" placeholder="Category" value={formData.category} onChange={handleChange} />

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default Addproduct;
