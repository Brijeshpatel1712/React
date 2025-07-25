import React from 'react'
import { Container, Row, Col, Card, Button,Nav,Navbar,NavDropdown, } from "react-bootstrap";



function Navbarr() {
    
    return (
        <div>

            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <br></br>

        <Container style={{ display: "flex", justifyContent: "space-between", padding: "0px 20px", }}>

          <Row className='g-4'>
            <Col xs={12} sm={6} md={4} lg={3}>
              <Card style={{ width: "100%" }}>
                <Card.Img
                  variant="top"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWrWzLAwaEZ2WnU-ZvXGLguUozbL2iA55cghZw2VVYOf-DyuHptKSgjnoIrilJsRspBbc&usqp=CAU" width={200}
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} sm={6} md={4} lg={3}>
              <Card style={{ width: "100%" }}>
                <Card.Img
                  variant="top"
                  src="https://img.pikbest.com/origin/09/24/93/55MpIkbEsTJTr.png!w700wp" width={200}
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} sm={6} md={4} lg={3}>
              <Card style={{ width: "100%" }}>
                <Card.Img
                  variant="top"
                  src="https://thumbs.dreamstime.com/b/cheerful-d-boy-backpack-his-back-leaves-school-jumps-across-water-to-avtar-schoolboy-329290630.jpg" width={200}
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} sm={6} md={4} lg={3}>
              <Card style={{ width: "100%" }}>
                <Card.Img
                  variant="top"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNt8ye0VaQmdMkw-EqaQnX7OGm9pTKdRMvdoKw4ALYw-Irafjw7Sy8Fin0SLano68eBXE&usqp=CAU" width={200}
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>

          </Row>
        </Container>

        <div style={{border:"3px solid black", display:"flex" , textAlign:"center" ,marginTop:"20px"}}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio saepe adipisci minima accusantium veritatis! Quaerat architecto eius ducimus doloribus quas sint tenetur, temporibus odio, dolore repudiandae fuga molestias exercitationem nostrum? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem sit voluptas quisquam officia rem sapiente? Ut dicta tempora illum aspernatur minima facilis fugit nobis? Fugiat repudiandae laborum laudantium maxime.</p>
        </div>



        <div class="footer" style={{backgroundColor:"black", color:"white", marginTop:"20px"}}>
        <div class="centre-2">
            <div class="text-center text-light fs-4 ">Freya Incorporated, 019 Appellation Ave, New Jersey, 535-118-7056
            </div>
            <div class="text-center text-secondary  ">Template by Themewagon
            </div>
        </div>
     </div>

    </div>
    
 

     
    );
}

export default Navbarr