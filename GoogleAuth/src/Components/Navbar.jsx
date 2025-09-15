import React from 'react';
import { Link } from 'react-router-dom';
import { useSignOut } from 'react-firebase-hooks/auth';
import { auth } from '../Firebase/firebase';
import '../App'; // Make sure to import the CSS

const Navbar = () => {
  const [signOut] = useSignOut(auth);

  function handleLogout() {
    signOut();
  }

  return (
    <nav className="navbar">
      <div className="navbar__logo">MyApp</div>
      <ul className="navbar__links">
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/add-product">Add Product</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><button onClick={handleLogout} className="navbar__logout">Logout</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
