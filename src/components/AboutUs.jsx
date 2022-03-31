import {React, useEffect} from "react";
import SetDocTitle from "../utils/SetDocTitle";

import { Container, Row, Col } from "react-bootstrap";

import ParmaNandPic from "../assets/images/parmanand_profile.jpg";
import BhagwantSinghPic from "../assets/images/bhagwantSingh_profile_photo.jpg";
import DefaultPic from "../assets/images/default_pic.jpg";


function AboutUs() {
  return (
    <div className="about-us">
      <SetDocTitle title="About Us" />

      <header>
        <h1>About Us</h1>
      </header>

      <section>
        <Container>
          <div>
            <h1>Who We Are</h1>

            <p>
              Innovantage Solutions Private Limited is a Logistics Service
              provider company having its registered office based out of Delhi,
              India. We provide services in the field of International Freight
              Forwarding (Both Ocean and Air), Customs Clearance, Transportation
              for Primary as well as Last Mile Delivery and Warehouse Management.
            </p>

            <p data-aos="fade-up">
              Founder director of the company has 27+ years experience with Big
              Indian Cos. as well as MNCs heading various functions in Supply &
              Sourcing.. With extensive experience of its founders in Logistics
              field, Innovantage Solutions can offer reliable and high-quality
              service. Customer satisfaction and quality are top priority for us.
            </p>
          </div>

          <div>
            <h4 data-aos="fade-up">Vision</h4>
            <p data-aos="fade-up">
              Innovantage Solutions Private Limited is a startup logistics company
              that wants to achieve and maintain its credibility in the industry.
              Innovantage Solutions Private Limited want to create a challenging
              and healthy working environment for its employees who believe in
              delivering quality services to customers , flexibility and customer
              satisfaction with organization’s profitability.
            </p>

            <h4 data-aos="fade-up">Mission</h4>
            <p data-aos="fade-up">
              Innovantage Solutions Private Limited is a 3PL Logistics Services
              Provider that takes care entire supply chain flow of goods with
              integrated logistics solutions network. Together with our customers,
              we strive to innovate & integrate logistics solutions for mutual
              advantage through collaboration with our customers and suppliers.
            </p>
          </div>

          {/* <div id="team" className="container-fluid">
            <h1>Innovantage Management team</h1>

            <Row>
              <Col xl={4} lg={4} md={12} sm={12} className="member-card" data-aos="zoom-in">
                <img src={ParmaNandPic} />
                <h5>Parma Nand Abrol</h5>
                <p>Director</p>              
              </Col>

              <Col xl={4} lg={4} md={12} sm={12} className="member-card" data-aos="zoom-in" data-aos-delay="200">
                <img src={BhagwantSinghPic} />
                <h5>Bhagwant Singh</h5>
                <p>Director</p>              
              </Col>

              <Col xl={4} lg={4} md={12} sm={12} className="member-card" data-aos="zoom-in" data-aos-delay="300">
                <img src={DefaultPic} />
                <h5>Navpreet Kaur</h5>
                <p>Director</p>              
              </Col>                            
            </Row>
          </div> */}
        </Container>
      </section>
    </div>
  );
}

export default AboutUs;
