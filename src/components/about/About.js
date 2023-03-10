import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function About() {
  return (
    <main id="about">
      <Container fluid>
        <Row className="mb-5">
          <div
            className="w-100 contact-banner d-flex justify-content-center align-items-center"
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1444664361762-afba083a4d77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGNoYXJpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60")`,
            }}
          >
            <h3 className="head sub-head text-white">About us</h3>
          </div>
        </Row>
      </Container>
      <Container>
        <Row className="mb-5">
          <Col className="col-12 d-none d-md-block col-md-6">
            <div
              className="image-bg"
              style={{
                backgroundImage: `url("https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hhcml0eSUyMHdvcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60")`,
              }}
            ></div>
          </Col>
          <Col className="col-12 col-md-6 ">
            <h4 className="head sub-head">What we do?</h4>
            <p style={{ lineHeight: "30px" }}>
              Exercitation ea et laborum consequat nisi reprehenderit sint
              voluptate qui tempor commodo officia et mollit. Est Lorem labore
              ex velit sunt nostrud duis amet aliqua ad sunt nisi id. Proident
              aute voluptate esse culpa.Magna amet quis est ipsum officia irure
              Lorem eiusmod velit cillum deserunt nisi. Consequat dolor labore
              aliquip ad consectetur. Qui duis veniam enim aliquip aliqua
              culpa.Sint sint esse irure cillum. Minim minim esse aliquip
              pariatur Lorem. Reprehenderit quis aliquip aute do tempor dolore
              quis sint eiusmod magna veniam eiusmod nostrud in.
            </p>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col className="col-12 col-md-6 ">
            <h4 className="head sub-head">Who we are?</h4>
            <p style={{ lineHeight: "30px" }}>
              Exercitation ea et laborum consequat nisi reprehenderit sint
              voluptate qui tempor commodo officia et mollit. Est Lorem labore
              ex velit sunt nostrud duis amet aliqua ad sunt nisi id. Proident
              aute voluptate esse culpa.Magna amet quis est ipsum officia irure
              Lorem eiusmod velit cillum deserunt nisi. Consequat dolor labore
              aliquip ad consectetur. Qui duis veniam enim aliquip aliqua
              culpa.Sint sint esse irure cillum. Minim minim esse aliquip
              pariatur Lorem. Reprehenderit quis aliquip aute do tempor dolore
              quis sint eiusmod magna veniam eiusmod nostrud in.
            </p>
          </Col>
          <Col className="col-12 d-none d-md-block col-md-6">
            <div
              className="image-bg"
              style={{
                backgroundImage: `url("https://images.unsplash.com/photo-1611223235982-891064f27716?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHdobyUyMHdlJTIwYXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60")`,
              }}
            ></div>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col className="col-12 d-none d-md-block col-md-6">
            <div
              className="image-bg"
              style={{
                backgroundImage: `url("https://images.unsplash.com/photo-1585776245865-b92df54c6b25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Z29hbHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60")`,
              }}
            ></div>
          </Col>
          <Col className="col-12 col-md-6 ">
            <h4 className="head sub-head">Our mission and goals</h4>
            <p style={{ lineHeight: "30px" }}>
              Exercitation ea et laborum consequat nisi reprehenderit sint
              voluptate qui tempor commodo officia et mollit. Est Lorem labore
              ex velit sunt nostrud duis amet aliqua ad sunt nisi id. Proident
              aute voluptate esse culpa.Magna amet quis est ipsum officia irure
              Lorem eiusmod velit cillum deserunt nisi. Consequat dolor labore
              aliquip ad consectetur. Qui duis veniam enim aliquip aliqua
              culpa.Sint sint esse irure cillum. Minim minim esse aliquip
              pariatur Lorem. Reprehenderit quis aliquip aute do tempor dolore
              quis sint eiusmod magna veniam eiusmod nostrud in.
            </p>
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default About;
