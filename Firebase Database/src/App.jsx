import { Link } from 'react-router-dom';
import Allrautse from './Routes/Allrautse';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';

function App() {

  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("Logout Successfully");
  };

  return (
    <>
      <Navbar expand="lg" className="custom-navbar">
        <Container className='mainpage'>
          <Navbar.Brand href="#">Navbar</Navbar.Brand>

          <Nav className="nav-sections">
            {/* Left side links */}
            <div className="nav-left">
              <Link to="/Home" className="nav-link">Home</Link>
              <Link to="/Product" className="nav-link">Product</Link>
              <Link to="/Addproduct" className="nav-link">Add Product</Link>
            </div>

            {/* Right side login/logout */}
            <div className="nav-right">
              <Link to="/login" className="nav-link">Login</Link>
              <button className="logout-btn" onClick={handleLogout}>Logout</button>
            </div>
          </Nav>
        </Container>
      </Navbar>

      <Allrautse />
    </>
  );
}

export default App;
