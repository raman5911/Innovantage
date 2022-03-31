import React from "react";
import { Row, Col, Form, FloatingLabel } from "react-bootstrap";

import InputField from "./InputField";

function PersonalInfo(props) {

  const {handleInputChange, handlePhoneInputChange, value } = props;

  return (
    <div className="group">
      <h4>Enquiry requested from</h4>
      <Row className="row">
        <Col xl={6} lg={6} md={12} sm={12}>
          <InputField label="Name" type="text" name="name" value={value.name} handleInputChange={handleInputChange} isRequired={true} />
        </Col>
        <Col xl={6} lg={6} md={12} sm={12}>
          <InputField label="Address" type="text" name="address" value={value.address} handleInputChange={handleInputChange} isRequired={true} />
        </Col>
      </Row>
      <Row className="row">
        <Col xl={6} lg={6} md={12} sm={12}>
          <InputField label="Phone Number" type="tel" name="phone" value={value.phone} handleInputChange={handlePhoneInputChange} isRequired={true} />
        </Col>
        <Col xl={6} lg={6} md={12} sm={12}>
          <InputField label="Email Address" type="email" name="email" value={value.email} handleInputChange={handleInputChange} isRequired={true} />
        </Col>
      </Row>
    </div>
  );
}

export default PersonalInfo;
