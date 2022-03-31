import React from "react";
import SetDocTitle from "../utils/SetDocTitle";

import { Row, Col, Container } from "react-bootstrap";
import ContactUsImg from "../assets/images/contact_us.jpg";

function ContactUs() {
  return (
    <div className="contact-us">
      <SetDocTitle title="Contact Us" />

      <Container>
        <Row>
          <Col xl={6} lg={6} md={12} sm={12}>
            <img src={ContactUsImg} alt="contact us" />
            <p style={{
              "position": "relative",
              "top": "-5.3rem",
              "left": "2.5rem",
              "fontSize": "13px"
            }}>Photo by <a href='https://www.freepik.com/vectors/job'>freepik</a></p>
          </Col>

          <Col xl={6} lg={6} md={12} sm={12}>
            <div className="info">
              <h1>Contact Us</h1>
              <p>Want to get in touch? We'd love to hear from you.</p>
              <div class="contact-group">
                <span>
                  {" "}
                  <i class="fas fa-phone-alt"></i>
                  <p>(+91) 11-45131696 (Landline), (+91) 9711996245 (Mobile), (+91) 80769 54175 (Whatsapp)</p>
                </span>
                <span>
                  {" "}
                  <i class="far fa-envelope"></i>
                  <p>
                    corporate@innovantage.in, contact@innovantage.in,
                    sales@innovantage.in
                  </p>
                </span>
                <span>
                  {" "}
                  <i class="fas fa-map-marker-alt"></i>
                  <p>
                    G-1, Ground Floor, Shahpuri's Tirath Tower, Near Janak
                    Cinepolis, C-3, DDA Comunity Centre Market, Janakpuri, New
                    Delhi - 110058 (
                    <a
                      href="https://www.google.com/maps/dir/?api=1&destination=Innovantage+Solutions+Private+Limited,+G-1,+Ground+Floor+Shahpuri's+Tower+Plot+No.+58,+Shahpuri+Tirath+Singh+Tower+Behind+Janak+Cinepolis,+near+BlueDart+Office,+Block+C3,+Janakpuri,+New+Delhi,+Delhi+110058"
                      target="_blank"
                    >
                      Google Map Location
                    </a>
                    )
                  </p>
                </span>
              </div>

              <p class="social-icons">
                <a
                  target="_blank"
                  href="https://www.facebook.com/InnovantageSolutions"
                >
                  <i class="fab fa-facebook-square social"></i>
                </a>
                {/* <a target="_blank" href=""><i class="fab fa-instagram social"></i></a> */}
                <a target="_blank" href="https://twitter.com/Innovantage2017">
                  <i class="fab fa-twitter social"></i>
                </a>
                <a
                  target="_blank"
                  href="https://in.linkedin.com/company/innovantage-solutions?trk=public_profile_topcard-current-company"
                >
                  <i class="fab fa-linkedin social"></i>
                </a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <section>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.6016005298093!2d77.09144481489292!3d28.61172638242591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04ad293def79%3A0x62e8a35bdb57ce43!2sInnovantage%20Solutions%20Private%20Limited%20%22Integrating%20Supply%20Chain%20Solutions%E2%80%A6%E2%80%A6.%22!5e0!3m2!1sen!2sin!4v1647704846172!5m2!1sen!2sin"
          allowfullscreen=""
          loading="lazy"
        />
      </section>
    </div>
  );
}

export default ContactUs;
