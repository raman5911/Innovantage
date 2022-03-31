import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";

import Header from "./Header";

import animation from "../assets/images/animation.gif";
import track from "../assets/images/track_homepage.gif";
import review from "../assets/images/review.jpg";
import automobile from "../assets/images/automobile.jpg";
import electricVehicle from "../assets/images/Electric_Vehicles_Photo.jpeg";
import foodAndBeverages from "../assets/images/Food_Photo.jpeg";
import fruits from "../assets/images/Fruits.jpeg";
import vegetables from "../assets/images/Vegetables.jpeg";
import technology from "../assets/images/Engineering___Technology_Photo.jpeg";
import electronicsAndCommunication from "../assets/images/Telecommunication_Photo.jpeg";
import pharmaceuticals from "../assets/images/Pharmaceuticals_Photo.jpeg";
import medicalEquipments from "../assets/images/Medical_Equipment_Photo.jpeg";
import energyEquipments from "../assets/images/Solar_Energy_Photo.jpeg";

function HomePage() {
  return (
    <>
      <Header />

      <div className="main">
        {/* Scroll Button */}
        {/* <button id="top-scroll">
          <i className="fas fa-arrow-up"></i>
        </button> */}

        <section className="intro">
          <Container className="container">
            <Row>
              <Col xl={6} lg={6} md={12} sm={12}>
                <img src={animation} alt="animation" />
              </Col>
              <Col xl={6} lg={6} md={12} sm={12}>
                <h1>Better logistics solutions for you</h1>
                <p data-aos="fade-up">
                  Do you find it difficult to manage the supply chain for your
                  business ? Don't worry, Get hassle free and reliable logistics
                  solutions for your business. Our mission is to cater every
                  business with a smoother supply chain solution. Innovantage
                  Solutions provides you quality solutions in a customizable and
                  flexible manner according to your business needs.
                </p>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="intro2">
          <Container classNameName="container">
            <Row>
              <Col xl={6} lg={6} md={12} sm={12}>
                <h1>Track your Shipments</h1>
                <p data-aos="fade-up">
                  Do you have to wait for long to get status of your shipments ?
                  You can track all of your shipments with our Shipment Tracking
                  tool. Get status of your shipments instantly in real time on a
                  single click. Try it Now!
                </p>
              </Col>
              <Col xl={6} lg={6} md={12} sm={12}>
                <img src={track} alt="animation" />
              </Col>
            </Row>
          </Container>
        </section>

        <section id="services" className="container-fluid">
          <h1>Services We Provide</h1>

          <div className="container">
            <div className="row">
              <div className="col-lg-6" data-aos="zoom-in">
                <span className="icon-wrapper">
                  <div className="icon-div contract">
                    <i className="fas fa-file-alt fa-4x"></i>
                  </div>

                  <div className="icon-content">
                    <h5>Contract logistics</h5>
                    <p>
                      Need custom logistic service? We got it covered. From
                      overland, air, rail and sea transportation. Fast, safe and
                      accurate shipment provided all over the globe.
                    </p>
                  </div>
                </span>
              </div>
              <div className="col-lg-6" data-aos="zoom-in">
                <span className="icon-wrapper">
                  <div className="icon-div truck">
                    <i className="fas fa-truck fa-4x"></i>
                  </div>
                  <div className="icon-content">
                    <h5>Overland, Ocean and Air Freight</h5>
                    <p>
                      Innovantage offers the best logistics services using all
                      mens of supply chain. Use our overland, ocean and air
                      freight solutions for shipment of your goods.
                    </p>
                  </div>
                </span>
              </div>
              <div className="col-lg-6" data-aos="zoom-in">
                <span className="icon-wrapper">
                  <div className="icon-div">
                    <i className="fas fa-warehouse fa-4x"></i>
                  </div>
                  <div className="icon-content">
                    <h5>Warehousing and Storage</h5>
                    <p>
                      Innovantage offers intelligent warehouse solution. Lower
                      your storage and good maintenance by using our modern and
                      intelligent warehouses. You can see all locations on
                      location page.
                    </p>
                  </div>
                </span>
              </div>
              <div className="col-lg-6" data-aos="zoom-in">
                <span className="icon-wrapper">
                  <div className="icon-div">
                    <i className="fas fa-phone-alt fa-4x"></i>
                  </div>
                  <div className="icon-content">
                    <h5>Consulting Services</h5>
                    <p>
                      Don't know what mean of transportation would be right for
                      you, or you need someone for full supply chain management?
                      Please contact us. Our team will be happy to help you.
                    </p>
                  </div>
                </span>
              </div>
            </div>

            <h3>Industry Sectors Coverage</h3>
            <p style={{ "textAlign": "center" }}>
              We cover different industry sectors, from food and beverage,
              chemical, retail, durable goods and more. Check the full list.
            </p>

            <Carousel className="carousel">
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={foodAndBeverages}
                  alt="food" loading="lazy"
                />
                <Carousel.Caption>
                  <h3>Food and Beverages</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={fruits} alt="fruits" loading="lazy" />

                <Carousel.Caption>
                  <h3>Fruits</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={vegetables}
                  alt="vegetables" loading="lazy"
                />

                <Carousel.Caption>
                  <h3>Vegetables</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={technology}
                  alt="technology" loading="lazy"
                />

                <Carousel.Caption>
                  <h3>Technology and Engineering</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={automobile}
                  alt="automobile" loading="lazy"
                />

                <Carousel.Caption>
                  <h3>Automobile</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={electronicsAndCommunication}
                  alt="telecommunication" loading="lazy"
                />

                <Carousel.Caption>
                  <h3>Electronics and Telecommunication</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={electricVehicle}
                  alt="Electric Vehicles" loading="lazy"
                />

                <Carousel.Caption>
                  <h3>Electric Vehicles</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={pharmaceuticals}
                  alt="pharmaceuticals" loading="lazy"
                />

                <Carousel.Caption>
                  <h3>Pharmaceuticals</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={medicalEquipments}
                  alt="medical equipments" loading="lazy"
                />

                <Carousel.Caption>
                  <h3>Medical Equipments</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={energyEquipments}
                  alt="energy equipments" loading="lazy"
                />

                <Carousel.Caption>
                  <h3>Energy Equipments</h3>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>

            <div className="value-added">
              <h3>Value Added Services</h3>
              <div className="row" data-aos="fade-up">
                <div className="col-lg-6">
                  <i className="fas fa-star"></i>
                  <p>
                    {" "}
                    Import & Certification Licensing approvals from Regulatory
                    Authorities
                  </p>
                </div>

                <div className="col-lg-6">
                  <i className="fas fa-star"></i>
                  <p>Packing & Repacking</p>
                </div>

                <div className="col-lg-6">
                  <i className="fas fa-star"></i>
                  <p>Labeling & Kitting</p>
                </div>

                <div className="col-lg-6">
                  <i className="fas fa-star"></i>
                  <p>Reverse Logistics</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="review" className="container-fluid">
          <div className="container">
            <h1>What makes us the best choice</h1>
            <div className="row">
              <div className="col-lg-7">
                <ul className="fa-ul" data-aos="fade-up">
                  <li>
                    <span className="fa-li">
                      <i className="fas fa-check"></i>
                    </span>{" "}
                    Living up to highest industry standards
                  </li>

                  <li>
                    <span className="fa-li">
                      <i className="fas fa-check"></i>
                    </span>{" "}
                    Safety as top priority in assuring safe work procedures
                  </li>

                  <li>
                    <span className="fa-li">
                      <i className="fas fa-check"></i>
                    </span>{" "}
                    Investing in technology to provide fast, acurate and
                    cost-effective service
                  </li>

                  <li>
                    <span className="fa-li">
                      <i className="fas fa-check"></i>
                    </span>{" "}
                    Providing high quality transportation services to all of our
                    clients
                  </li>

                  <li>
                    <span className="fa-li">
                      <i className="fas fa-check"></i>
                    </span>{" "}
                    Worry about enviroment according to latest industry
                    standards
                  </li>

                  <li>
                    <span className="fa-li">
                      <i className="fas fa-check"></i>
                    </span>{" "}
                    Invest in our employees to provide better service and
                    company growth
                  </li>
                </ul>
              </div>
              <div className="col-lg-5 img-container">
                <img
                  className="review-img"
                  src={review}
                  alt="feedback"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="contact-banner">        
          <h1> <i className="fas fa-phone-alt"></i> Contact Us</h1>
          <p>Want to get in touch? We'd love to hear from you.</p>
          <a href="/contact-us" className="btn">
            Contact Us <i class="fas fa-arrow-right"></i>
          </a>
        </section>
      </div>
    </>
  );
}

export default HomePage;
