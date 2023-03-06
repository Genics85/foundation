import React from "react";
import { Carousel, Button } from "react-bootstrap";
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
              <h3 className="carousel-label">Support a cause you care about</h3>
              <p>
                Nulla vitae elit libero, a pharetra augue mollis interdum sjdls
                sidfs ewrwsf sfjosfj sf osjf .
              </p>
              <Button className="rounded-pill"> Join us now</Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2hhcml0eXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60"
              alt="Second slide"
            />

            <Carousel.Caption className="h-100 d-flex align-items-center justify-content-center flex-column">
              <h3 className="carousel-label">Support a cause you care about</h3>
              <p>
                Nulla vitae elit libero, a pharetra augue mollis interdum sjdls
                sidfs ewrwsf sfjosfj sf osjf .
              </p>
              <Button className="rounded-pill"> Join us now</Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1597762117709-859f744b84c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNoYXJpdHl8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="Third slide"
            />
            <Carousel.Caption className="h-100 d-flex align-items-center justify-content-center flex-column">
              <h3 className="carousel-label">Support a cause you care about</h3>
              <p>
                Nulla vitae elit libero, a pharetra augue mollis interdum sjdls
                sidfs ewrwsf sfjosfj sf osjf .
              </p>
              <Button className="rounded-pill"> Join us now</Button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <section className="mt-5">
        <span className="mb-5"> Causes we are serving</span>
        


      </section>
    </main>
  );
}

export default Home;
