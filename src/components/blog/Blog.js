import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function Blog() {
  return (
    <main id="contact">
      <Container fluid className="mb-5">
        <Row>
          <div
            className="w-100 contact-banner d-flex justify-content-center align-items-center"
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1519430044529-9a9a57177865?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aG9tZWxlc3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60")`,
            }}
          >
            <h3 className="head sub-head text-white">Blog</h3>
          </div>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col className="col-12 col-md-6  ">
          <Card className="w-100 mb-3 ">
                <Card.Body>
                  <img
                    className=" w-100"
                    alt="blog post"
                    src="https://images.unsplash.com/photo-1531090041372-c47fb16b796f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGhvbWVsZXNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  />
                </Card.Body>
                <Card.Title className="px-3 head mini-head">A visit to Gyinase Orphanage</Card.Title>

                <Card.Text className="px-3 mb-2">
                  <span>
                    Eu veniam laborum nulla magna. Elit nulla amet laboris
                    exercitation do ullamco voluptate nulla consequat velit.
                    Dolor tempor pariatur nisi deserunt reprehenderit nulla
                    velit esse ad cupidatat tempor pariatur anim eu.
                  </span>
                </Card.Text>
              </Card>
          </Col>
          <Col className="col-12 col-md-6 ">
          <Card className="w-100 mb-3 ">
                <Card.Body>
                  <img
                    className=" w-100"
                    alt="blog post"
                    src="https://images.unsplash.com/photo-1512581574034-6f1da619c5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fGhvbWVsZXNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  />
                </Card.Body>
                <Card.Title className="px-3 head mini-head">A visit to Atonsu Orphanage</Card.Title>
                <Card.Text className="px-3 mb-2">
                  <span>
                    Eu veniam laborum nulla magna. Elit nulla amet laboris
                    exercitation do ullamco voluptate nulla consequat velit.
                    Dolor tempor pariatur nisi deserunt reprehenderit nulla
                    velit esse ad cupidatat tempor pariatur anim eu.
                  </span>
                </Card.Text>
              </Card>
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default Blog;
