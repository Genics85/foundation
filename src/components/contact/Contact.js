import React from "react";
import { Row, Container, Col, Form, Button } from "react-bootstrap";
import { Facebook, Instagram, Snapchat } from "react-bootstrap-icons";
import "./contact.scss";

function Contact() {
  return (
    <main id="contact">
      <Container fluid>
        <Row>
          <div
            className="w-100 contact-banner d-flex justify-content-center align-items-center"
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNoYXJpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60")`,
            }}
          >
            <h3 className="head sub-head text-white">Connect with us</h3>
          </div>
        </Row>
      </Container>
      <Container className="my-5">
        <Row>
          <Col className="col-12 col-md-8">
            <h3 className="head mini-ub-head mb-3">Get in touch</h3>
            <Form className="d-flex flex-column gap-4">
              <Form.Control required as="textarea" rows={3} />
              <Form.Control
                required
                type="text"
                placeholder="Enter your name"
              />
              <Form.Control
                required
                type="email"
                placeholder="Enter your email"
              />
              <Form.Control required type="text" placeholder="Enter subject" />
              <Button type="submit">
                <span className="head ">Submit message</span>
              </Button>
            </Form>
          </Col>
          <Col className="col-12 col-md-4 d-flex flex-column gap-5 justify-content-center align-items-center head mini-head mt-4">
            <div>
              <a href="https://www.facebook.com/owusu.afriyie.777">
                <Facebook />
                <span>Sean GB Afriyie</span>
              </a>
            </div>
            <div>
              <a href="https://instagram.com/oliverperress?igshid=YmMyMTA2M2Y=">
                <Instagram />
                <span>@Oliverperress</span>
              </a>
            </div>
            <div>
              <a href="https://www.snapchat.com/add/owusu_afriy3609?share_id=Ay/hDeZcTTOUbD+FEylRHA&locale=en_GB">
                <Snapchat />
                <span>Owusu Afriyie</span>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default Contact;
