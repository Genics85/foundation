import React from "react";
import { Row, Container } from "react-bootstrap";
import "./contact.scss";

function Contact() {
  return (
    <main id="contact">
      <Container fluid>
        <Row>
          <div
            className="w-100 contact-banner d-flex justify-content-start align-items-center"
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1523847027398-d3eb27914c67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")`,
            }}
          >
            <h3 className="head sub-head text-white">Connect with us</h3>
          </div>
        </Row>
        <Row>

        </Row>
      </Container>
    </main>
  );
}

export default Contact;
