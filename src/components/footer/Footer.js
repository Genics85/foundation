import React from "react";
import { Col, Container,Row } from "react-bootstrap";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "react-bootstrap-icons";

function Footer() {
  return (
    <footer className="bg-dark text-white p-3">
      <Container>
        <Row>
          <Col className="foundation-info col-12 col-md-4">
            <h5>Owusu</h5>
            <p>
              Reprehenderit magna veniam laboris laboris officia cupidatat elit
              esse. Id consequat cupidatat sunt elit eiusmod. Ea non
              reprehenderit in esse consectetur quis.
            </p>
            <div className="socialmedia-handles d-flex gap-4">
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
          <Col className="col-6 col-md-2">
            <h5>Navigation</h5>
            <p>Home</p>
            <p>About</p>
            <p>Services</p>
            <p>Blog</p>
            <p>Contacts</p>
          </Col>
          <Col className="col-6 col-md-2">
            <h5>Services</h5>
            <p>Outreach</p>
            <p>Helping orphans</p>
            <p>Water provision</p>
            <p>Giving scholarships</p>
          </Col>
          <Col className="col-12 col-md-4">
            <h5>Mission and goals</h5>
            <p>
              Consectetur laborum aliqua minim nulla irure qui anim quis dolore
              incididunt. Reprehenderit nulla enim consequat commodo duis ea
              dolor incididunt deserunt proident. Ad voluptate dolore nostrud
              est deserunt minim non cupidatat nulla ea exercitation incididunt
              pariatur aliqua. Excepte
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
