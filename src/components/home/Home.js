import React from "react";
import { Carousel, Button, Row, Container, Col, Card } from "react-bootstrap";
import "./home.scss";

function Home() {
  return (
    <main>
      <div className="home-carousel mb-5">
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100 h-50"
              src="https://images.unsplash.com/photo-1459183885421-5cc683b8dbba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNoYXJpdHl8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="First slide"
            />
            <Carousel.Caption className="h-100 d-flex align-items-center justify-content-center flex-column">
              <h3 className="carousel-label head">
                Support a cause you care about
              </h3>
              <p className="w-50 d-none d-md-block">
                Children are the leaders of the future and they need to get the
                treatment of a befitting leader regardless of their condition,
                help make this possible
              </p>
              <Button className="rounded-pill text-white">
                <span className="btn-text"> JoinJoin us now</span>
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2hhcml0eXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60"
              alt="Second slide"
            />

            <Carousel.Caption className="h-100 d-flex align-items-center justify-content-center flex-column">
              <h3 className="carousel-label head">
                Support a cause you care about
              </h3>
              <p className="w-50 d-none d-md-block">
                Opportunities are available for everyone to grab, but those
                equipped are those going to grab it, help equip the needy so
                that they can get a share of what the future holds for everyone
              </p>
              <Button className="rounded-pill text-white">
                <span className="btn-text"> Join us now</span>
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1597762117709-859f744b84c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNoYXJpdHl8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="Third slide"
            />
            <Carousel.Caption className="h-100 d-flex align-items-center justify-content-center flex-column">
              <h3 className="carousel-label head">
                Support a cause you care about
              </h3>
              <p className="w-50 d-none d-md-block">
                Nulla vitae elit libero, a pharetra augue mollis interdum sjdls
                sidfs ewrwsf sfjosfj sf osjf .
              </p>
              <Button className="rounded-pill text-white ">
                <span className="btn-text"> Join us now</span>
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <section id="about" className="container my-5">
        <Container>
          <Row>
            <Col className="col-12 col-md-6">
              <div
                className="image-bg"
                style={{
                  backgroundImage: `url("https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z3JvdXAlMjBwaG90byUyMG9mJTIwd29ya2Vyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60")`,
                }}
              ></div>
            </Col>
            <Col className="col-12 col-md-6 ">
              <h4 className="head sub-head">Who we are?</h4>
              <p style={{ lineHeight: "30px" }}>
                Exercitation ea et laborum consequat nisi reprehenderit sint
                voluptate qui tempor commodo officia et mollit. Est Lorem labore
                ex velit sunt nostrud duis amet aliqua ad sunt nisi id. Proident
                aute voluptate esse culpa.Magna amet quis est ipsum officia
                irure Lorem eiusmod velit cillum deserunt nisi. Consequat dolor
                labore aliquip ad consectetur. Qui duis veniam enim aliquip
                aliqua culpa.Sint sint esse irure cillum. Minim minim esse
                aliquip pariatur Lorem. Reprehenderit quis aliquip aute do
                tempor dolore quis sint eiusmod magna veniam eiusmod nostrud in.
              </p>
              <Button className="rounded-pill text-white">
                <span className="btn-text">Learn more</span>
              </Button>
            </Col>
          </Row>
          <Row>
            <Col className="col-12 my-5  d-flex flex-column justify-content-center align-items-center">
              <h3 className="head sub-head">We serve for peoples</h3>
              <span>Commodo qui fugiat velit occaecat adipisicing magna.</span>
            </Col>
            <Col className="col-12 col-md-4 mb-3">
              <div className="d-flex flex-column justify-content-center align-items-center">
                <div
                  className="serve-img"
                  style={{
                    backgroundImage: `url("https://img.freepik.com/free-vector/book-with-lighbulb-cartoon-vector-icon-illustration-object-education-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-4009.jpg?w=2000")`,
                  }}
                ></div>
                <h3 className="mini-head head">Education</h3>
                <p>
                  Nostrud est est voluptate velit ea laboris ut qui dolor
                  consectetur dolor tempor. Minim nulla ea reprehenderit sunt in
                  voluptate nisi. Irure ipsum anim cupidatat non laboris veniam
                  aliqua qui.
                </p>
              </div>
            </Col>
            <Col className="col-12 col-md-4 mb-3">
              <div className="d-flex flex-column justify-content-center align-items-center">
                <div
                  className="serve-img"
                  style={{
                    backgroundImage: `url("https://previews.123rf.com/images/elenavdovina/elenavdovina1609/elenavdovina160900082/66214422-healthy-food-vegetables-water-color-illustration-on-a-gray-table-is-a-bottle-of-water-and-a.jpg")`,
                  }}
                ></div>
                <h3 className="mini-head head">Food & Water</h3>
                <p>
                  Nostrud est est voluptate velit ea laboris ut qui dolor
                  consectetur dolor tempor. Minim nulla ea reprehenderit sunt in
                  voluptate nisi. Irure ipsum anim cupidatat non laboris veniam
                  aliqua qui.
                </p>
              </div>
            </Col>
            <Col className="col-12 col-md-4 mb-3">
              <div className="d-flex flex-column justify-content-center align-items-center">
                <div
                  className="serve-img"
                  style={{
                    backgroundImage: `url("https://img.freepik.com/free-vector/main-master-designer-creating-fashion-clothes-designs-hanging-it-coat-rack-fashion-house-clothing-design-house-fashion-production-concept-pinkish-coral-bluevector-isolated-illustration_335657-1275.jpg")`,
                  }}
                ></div>
                <h3 className="mini-head head">Clothes</h3>
                <p>
                  Nostrud est est voluptate velit ea laboris ut qui dolor
                  consectetur dolor tempor. Minim nulla ea reprehenderit sunt in
                  voluptate nisi. Irure ipsum anim cupidatat non laboris veniam
                  aliqua qui.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container fluid>
          <Row>
            <div
              className="w-100 need-help d-flex justify-content-start align-items-center"
              style={{
                backgroundImage: `url("https://images.unsplash.com/photo-1523847027398-d3eb27914c67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")`,
              }}
            >
              <Card className=" w-75 d-block d-md-none p-3">
                <h3 className="head sub-head">They Need Your Help</h3>
                <p>
                  Elit sint nulla pariatur ipsum. Dolor cillum consectetur
                  occaecat laborum consectetur tempor ex excepteur minim
                </p>
                <Button className="text-white">
                  <span className="btn-text">Donate now</span>
                </Button>
              </Card>
              <Card className=" w-25 d-none d-md-block p-3">
                <h3 className="head sub-head">They Need Your Help</h3>
                <p>
                  Elit sint nulla pariatur ipsum. Dolor cillum consectetur
                  occaecat laborum consectetur tempor ex excepteur minim
                </p>
                <Button className="text-white">
                  <span className="btn-text">Donate now</span>
                </Button>
              </Card>
            </div>
          </Row>
        </Container>
      </section>
      <section className="my-5">
        <Container>
          <Row>
            <Col className="col-12 col-md-4 mb-4">
              <h3 className="head sub-head">Join with Us</h3>
              <p>
                Officia ad proident veniam nostrud id eu ipsum occaecat. Culpa
                mollit laboris labore sint nisi anim dolor. Voluptate ipsum
                velit non excepteur magna commodo. Velit consectetur ad
                excepteur in irure deserunt nostrud qui aute ut. Dolore nisi
                fugiat pariatur do exercitation amet non ex nostrud amet aliquip
                fugiat aute Lorem. Lorem ullamco occaecat eu proident laborum
                reprehenderit enim sunt cillum deserunt nulla do.
              </p>
              <Button className="rounded-pill text-white">
                <span className="btn-text">Join now</span>
              </Button>
            </Col>
            <Col className="col-12 col-md-8 d-flex gap-3">
              <Col className="col-12 col-md-6 ">
                <div
                  className="unity-img"
                  style={{
                    backgroundImage: `url("https://images.unsplash.com/photo-1636987050384-9b079c700f63?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dW5pdHl8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60")`,
                  }}
                ></div>
              </Col>
              <Col className="col-12 col-md-6 d-none d-md-block ">
                <div
                  className="unity-img"
                  style={{
                    backgroundImage: `url("https://images.unsplash.com/photo-1547496613-4e19af6736dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvbWVsZXNzJTIwa2lkc3xlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60")`,
                  }}
                ></div>
              </Col>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}

export default Home;
