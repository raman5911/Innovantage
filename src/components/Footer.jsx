import React from "react";

function Footer() {

  var year = new Date().getFullYear();

  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6" data-aos="flip-right">
            <h4>Our Services</h4>

            <ul>
              <li>
                {/* <span className="fa-li">
                  <i className="fas fa-angle-right"></i>
                </span> */}
                Freight Forwarding
              </li>

              <li>
                {/* <span className="fa-li">
                  <i className="fas fa-angle-right"></i>
                </span> */}
                Customs Clearance
              </li>

              <li>
                {/* <span className="fa-li">
                  <i className="fas fa-angle-right"></i>
                </span> */}
                Warehouse Management
              </li>

              <li>
                {/* <span className="fa-li">
                  <i className="fas fa-angle-right"></i>
                </span> */}
                Transportation Management
              </li>

              <li>
                {/* <span className="fa-li">
                  <i className="fas fa-angle-right"></i>
                </span> */}
                Liaisoning & Consultancy Services
              </li>
            </ul>
          </div>

          <div
            className="col-lg-4 col-md-6 col-sm-6"
            data-aos="flip-up"
            data-aos-delay="300"
          >
            <h4>Industry Solutions</h4>

            <ul>
              <li>
                {/* <span className="fa-li">
                  <i className="fas fa-angle-right"></i>
                </span> */}
                Food and Beverages
              </li>

              <li>
                {/* <span className="fa-li">
                  <i className="fas fa-angle-right"></i>
                </span> */}
                Fruits and Vegetables
              </li>

              <li>
                {/* <span className="fa-li">
                  <i className="fas fa-angle-right"></i>
                </span> */}
                Technology and Engineering
              </li>

              <li>
                {/* <span className="fa-li">
                  <i className="fas fa-angle-right"></i>
                </span> */}
                Automobile
              </li>

              <li>
                {/* <span className="fa-li">
                  <i className="fas fa-angle-right"></i>
                </span> */}
                Electronics and Telecommunication
              </li>

              <li>
                {/* <span className="fa-li">
                  <i className="fas fa-angle-right"></i>
                </span> */}
                Electric Vehicles
              </li>

              <li>
                {/* <span className="fa-li">
                  <i className="fas fa-angle-right"></i>
                </span> */}
                Pharmaceuticals
              </li>

              <li>
                {/* <span className="fa-li">
                  <i className="fas fa-angle-right"></i>
                </span> */}
                Medical Equipments
              </li>

              <li>
                {/* <span className="fa-li">
                  <i className="fas fa-angle-right"></i>
                </span> */}
                Energy Equipments
              </li>
            </ul>
          </div>

          {/* <div className="col-lg-3 col-md-6 col-sm-6" data-aos="flip-down" data-aos-delay="400">
                <h4>Our Regions</h4>

                <ul>
                    <li>
                        <span className="fa-li">
                            <i className="fas fa-angle-right"></i>
                        </span>
                        Delhi
                    </li>

                    <li>
                        <span className="fa-li">
                            <i className="fas fa-angle-right"></i>
                        </span>
                        Mumbai
                    </li>

                    <li>
                        <span className="fa-li">
                            <i className="fas fa-angle-right"></i>
                        </span>
                        Hyderabad
                    </li>

                    <li>
                        <span className="fa-li">
                            <i className="fas fa-angle-right"></i>
                        </span>
                        Punjab
                    </li>
                </ul>

            </div> */}

          <div
            className="col-lg-3 col-md-6 col-sm-6 contact"
            data-aos="flip-left"
            data-aos-delay="500"
          >
            <h4>Contact Us</h4>
            <span>
              {" "}
              <i className="fas fa-map-marker-alt"></i>
              <p>
                G-1, Ground Floor, Shahpuri's Tirath Tower, Near Janak
                Cinepolis, C-3, DDA Comunity Centre Market, Janakpuri, New Delhi
                - 110058 (
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Innovantage+Solutions+Private+Limited,+G-1,+Ground+Floor+Shahpuri's+Tower+Plot+No.+58,+Shahpuri+Tirath+Singh+Tower+Behind+Janak+Cinepolis,+near+BlueDart+Office,+Block+C3,+Janakpuri,+New+Delhi,+Delhi+110058"
                  target="_blank"
                  style={{"color": "#536dfe"}}
                >
                  Google Map Location
                </a>
                )
              </p>
            </span>
            <span>
              {" "}
              <i className="fas fa-phone-alt"></i>
              <p>(+91) 11-45131696, 9711996245</p>
            </span>
            <span>
              {" "}
              <i className="far fa-envelope"></i>
              <p>
                corporate@innovantage.in, contact@innovantage.in,
                sales@innovantage.in
              </p>
            </span>
            <br />
            <p>Be a part of our family. Follow us on Social Media.</p>
            <p>
              <a
                target="_blank"
                href="https://www.facebook.com/InnovantageSolutions"
              >
                <i className="fab fa-facebook-square social"></i>
              </a>
              {/* <a target="_blank" href=""><i className="fab fa-instagram social"></i></a> */}
              <a target="_blank" href="https://twitter.com/Innovantage2017">
                <i className="fab fa-twitter social"></i>
              </a>
              <a
                target="_blank"
                href="https://in.linkedin.com/company/innovantage-solutions?trk=public_profile_topcard-current-company"
              >
                <i className="fab fa-linkedin social"></i>
              </a>
            </p>
          </div>
        </div>

        <div className="copyright-section">
          <p className="copyright">
            Copyright &copy; <span id="year">{year}</span> Innovantage Solutions
            Private Limited. All rights reserved.
          </p>

          <p className="dev-name">
            Website is designed and developed by{" "}
            <a href="https://raman5911.github.io" target="_blank">
              Ramanpreet Singh
            </a>{" "}
            .
          </p>

          {/* <p className="credit">
            Thanks to <a href="https://icons8.com">icons8.com</a> for the icons
            used in website -
            <a href="https://icons8.com/icon/D8D65y6Vy5bY/document">Document</a>
            <a href="https://icons8.com/icon/etRqsBHtSyMZ/truck">Truck</a>
            <a href="https://icons8.com/icon/vy9QfEGutlBU/buying">Buying</a>
            <a href="https://icons8.com/icon/gWLSUFaxGFPJ/phone-ringing">
              Phone Ringing
            </a>
          </p> */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
