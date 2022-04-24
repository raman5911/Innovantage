import React from "react";
import "./navbar.css";
import logo from "../../assets/images/logo.svg";

import {
  Container,
  Navbar,
  Nav,
  Dropdown,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";

function NavbarTop() {
  return (
    <Navbar bg="light" expand="lg" sticky="top" className="nav">
      <Container>
        <Navbar.Brand href="/" className="logo-div">
          <div className="logo-wrapper">
            <img src={logo} alt="logo" height="80" width="80" />
            <div className="logo-content-wrapper">
              <p className="company-name">Innovantage</p>
              <p className="tagline">"Integrating Supply Chain Solutions......."</p>
            </div>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav-links">
            <NavLink to="/about-us" className="nav-item">
              About Us
            </NavLink>
            <NavLink to="/get-a-qoute" className="nav-item">
              Get a Qoute
            </NavLink>
            <NavLink to="/track-your-shipment" className="nav-item">
              Track Your Shipment
            </NavLink>
            <NavLink to="/contact-us" className="nav-item">
              Contact Us
            </NavLink>
            <NavLink to="/career" className="nav-item">
              Career
            </NavLink>

            <Dropdown className="dropdown">
              <Dropdown.Toggle id="dropdown-basic" className="shadow-none">
                Login As
              </Dropdown.Toggle>

              <Dropdown.Menu className="dropdown-btn">
                <Dropdown.Item href="/">Login as Admin</Dropdown.Item>
                <Dropdown.Item href="/">Login as Client</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarTop;
