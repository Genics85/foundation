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
  Linkedin,
  TelephoneFill,
  Twitter,
} from "react-bootstrap-icons";

function Navigation() {
  return (
    <div className="navigation">
      <header className="bg-secondary p-2">
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
                  <Twitter className="text-light" />
                </a>
                <a href="linkedin.com">
                  <Linkedin className="text-light" />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </header>
      {["md"].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} >
          <Container >
            <Navbar.Brand href="#">Owusu Charity</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#about">About</Nav.Link>
                  <Nav.Link href="#action2">Blog</Nav.Link>
                  <Nav.Link href="#action2">Contact</Nav.Link>
                </Nav>
                <Button className="rounded-pill text-light ">Donate Now</Button>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
}

export default Navigation;
