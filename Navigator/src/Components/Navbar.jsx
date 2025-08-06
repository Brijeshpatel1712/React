import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const Navbar = () => {
  return (
    <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/add">Add Product</Link>
        <Link to="/product">Product</Link>
        <Link to="/login">Login</Link>
        <button>Logout</button>
    </div>
  )
}

export default Navbar
