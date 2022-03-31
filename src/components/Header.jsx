import React from "react";
import {Carousel} from "react-bootstrap";


function Header() {
  return (
    <Carousel fade>
      <Carousel.Item className="slider slider-1">
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1613690399151-65ea69478674?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80"
          alt="First slide"
        />
        <Carousel.Caption className="content">
          <h2>Get reliable and quality logistics solutions at Innovantage</h2>
          <p>We are a 3PL supply chain company  providing integrated supply chain solutions in Freight Forwarding, Customs Clearance, Contract Logistics and Value Added Services. Interested in any of our services ? Get a Qoutation from us.</p>
          <a href="/get-a-qoute" className="btn">Get a Qoute <i class="fas fa-arrow-right"></i> </a>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="slider slider-2">
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/1267325/pexels-photo-1267325.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="Second slide"
        />

        <Carousel.Caption className="content">
          <h2>Track Your Shipments</h2>
          <p>You can track all of your shipments with our Shipment Tracking tool. Get status of your shipment instantly in real time on a single click. Try it Now!</p>
          <a href="/track-your-shipment" class="btn sec-btn">Track Your Shipment <i class="fas fa-arrow-right"></i> </a>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="slider slider-3">
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/2231742/pexels-photo-2231742.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="Third slide"
        />

        <Carousel.Caption className="content">
          <h2>Contact Us</h2>
          <p>
            Do you have any Query ? Feel free to reach out to us. We would be happy to assist you.
          </p>
          <a href="/contact-us" className="btn">Contact Us <i class="fas fa-arrow-right"></i> </a>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Header;
