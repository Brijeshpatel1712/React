import { Link, Links } from "react-router-dom";
import Allrautse from "./Routes/Allrautse";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function App() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container className="mainpage">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="brijesh">
            <div className="links">
              <Link to={"/"} id="brijesh">
                home
              </Link>
              <Link to={"/Product"} id="brijesh">
                product
              </Link>
              <Link to={"/Addproduct"} id="brijesh">
                Addproduct
              </Link>
            </div>
          </Nav>
        </Container>
      </Navbar>

      <Allrautse />
    </>
  );
}

export default App;
