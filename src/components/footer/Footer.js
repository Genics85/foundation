import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Facebook, Instagram, Snapchat } from "react-bootstrap-icons";
import logo from "../../images/logo.png";

function Footer() {
  return (
    <footer className="bg-dark text-white p-3">
      <Container>
        <Row>
          <Col className="foundation-info col-12 col-md-3 mb-4 ">
            <div className=" mb-3 d-flex ">
              <img  width={30} src={logo} alt="logo" />
            </div>
            <h5 className="head mini-head">Oliver Charity Foundation</h5>
            <p align="justify">
              Reprehenderit magna veniam laboris laboris officia cupidatat elit
              esse. Id consequat cupidatat sunt elit eiusmod. Ea non
              reprehenderit in esse consectetur quis.
            </p>
            <div className="socialmedia-handles d-flex gap-4">
              <a href="facebook.com">
                <Facebook className="text-secondary" />
              </a>
              <a href="instagram.com">
                <Instagram className="text-secondary" />
              </a>
              <a href="linkedin.com">
                <Snapchat className="text-secondary" />
              </a>
            </div>
          </Col>
          <Col className="col-6 col-md-3 mb-4">
            <h5 className="head mini-head">Navigation</h5>
            <p>Home</p>
            <a href="#about">
              <p>About</p>
            </a>
            <p>Blog</p>
            <p>Contacts</p>
          </Col>
          <Col className="col-6 col-md-3 mb-4">
            <h5 className="head mini-head">Services</h5>
            <p>Outreach</p>
            <p>Helping orphans</p>
            <p>Water provision</p>
            <p>Giving scholarships</p>
          </Col>
          <Col className="col-12 col-md-3">
            <h5 className="head mini-head">Mission and goals</h5>
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
