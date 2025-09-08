import { Link, Links } from "react-router-dom";
import Allrautse from "./Routes/Allrautse";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { signOut } from "firebase/auth";
import { auth } from "./firebase/firebase";

function App() {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";

    signOut(auth);
  };

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container className="mainpage">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="kanu ">
            <div className="links">
              <Link to={"/Home"} id="kanu">
                home
              </Link>
              <Link to={"/Product"} id="kanu">
                product
              </Link>
              <Link to={"/Addproduct"} id="kanu">
                Addproduct
              </Link>
            </div>
            <div className="mehul">
              <Link to={"/login"} id="kanu">
                Login{" "}
              </Link>
              <button onClick={handleLogout}>logout</button>
            </div>
          </Nav>
        </Container>
      </Navbar>

      <Allrautse />
    </>
  );
}

export default App;
