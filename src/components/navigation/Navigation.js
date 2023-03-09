import {
  Container,
  Row,
  Col,
  Nav,
  Offcanvas,
  Navbar,
  Button,
} from "react-bootstrap";
import {
  Facebook,
  Instagram,
  Snapchat,
  TelephoneFill,
} from "react-bootstrap-icons";
import logo from "../../images/logo.png";

function Navigation() {
  return (
    <div className="navigation">
      <header className="d-none d-md-block bg-secondary p-2">
        <Container>
          <Row>
            <Col>
              <div className="number-mail text-light d-flex gap-4">
                <span>
                  {" "}
                  <TelephoneFill /> +233-234567890
                </span>
                <span> foundation@gmail.com</span>
              </div>
            </Col>
            <Col>
              <div className="socialmedia-handles d-flex gap-4 justify-content-end">
                <a href="facebook.com">
                  <Facebook className="text-light" />
                </a>
                <a href="instagram.com">
                  <Instagram className="text-light" />
                </a>
                <a href="twitter.com">
                  <Snapchat className="text-light" />
                </a>
                
              </div>
            </Col>
          </Row>
        </Container>
      </header>
      {["md"].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} >
          <Container >
            <Navbar.Brand href="#"><div>
              <img
              className="me-2"
              width={24}
              src={logo}
              alt="logo"
              />
            <span className="head mini-head">Oliver Foundation</span>
              </div></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <span className="head mini-head ">Oliver Charity Foundation</span>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#about">About</Nav.Link>
                  <Nav.Link href="#action2">Blog</Nav.Link>
                  <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
                <Button className="rounded-pill text-light d-none d-md-block"><span className="head">Donate now</span></Button>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
}

export default Navigation;
