import { Container, Row, Col } from "react-bootstrap";
import { Facebook, Instagram, Linkedin, TelephoneFill, Twitter } from "react-bootstrap-icons";

function Navigation() {
  return (
    <div className="navigation">
      <header className="bg-secondary p-2">
        <Container>
          <Row>
            <Col>
              <div className="number-mail text-light d-flex gap-4">
                <span> <TelephoneFill/> +233-234567890</span>
                <span> foundation@gmail.com</span>
              </div>
            </Col>
            <Col>
              <div className="socialmedia-handles d-flex gap-4 justify-content-end">
                <a href="facebook.com">
                  <Facebook className="text-light"/>
                </a>
                <a href="instagram.com">
                  <Instagram className="text-light" />
                </a>
                <a href="twitter.com">
                  <Twitter className="text-light"/>
                </a>
                <a href="linkedin.com">
                  <Linkedin className="text-light" />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
}

export default Navigation;
