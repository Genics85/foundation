import { Container, Row, Col, Nav, Offcanvas, Navbar } from "react-bootstrap";
import {
  Facebook,
  Instagram,
  Snapchat,
  TelephoneFill,
} from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";
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
                <a
                  href="https://www.facebook.com/owusu.afriyie.777"
                  rel="noreferrer"
                  target={"_blank"}
                >
                  <Facebook className="text-light" />
                </a>
                <a
                  href="https://instagram.com/oliverperress?igshid=YmMyMTA2M2Y="
                  rel="noreferrer"
                  target={"_blank"}
                >
                  <Instagram className="text-light" />
                </a>
                <a
                  href="https://www.snapchat.com/add/owusu_afriy3609?share_id=Ay/hDeZcTTOUbD+FEylRHA&locale=en_GB"
                  rel="noreferrer"
                  target={"_blank"}
                >
                  <Snapchat className="text-light" />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </header>
      {["md"].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand}>
          <Container>
            <Navbar.Brand href="#">
              <div>
                <img className="me-2" width={24} src={logo} alt="logo" />
                <span className="head mini-head">Oliver Foundation</span>
              </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <span className="head mini-head ">
                    Oliver Charity Foundation
                  </span>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 gap-4 pe-3">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "activeNav" : "notActiveNav"
                    }
                  >
                    Home
                  </NavLink>
                  {/* <NavLink
                    href="#about"
                    className={({ isActive }) =>
                      isActive ? "activeNav" : "notActiveNav"
                    }
                  >
                    About
                  </NavLink> */}
                  <NavLink
                    to="/blog"
                    className={({ isActive }) =>
                      isActive ? "activeNav" : "notActiveNav"
                    }
                  >
                    Blog
                  </NavLink>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      isActive ? "activeNav" : "notActiveNav"
                    }
                  >
                    Contact
                  </NavLink>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
}

export default Navigation;
