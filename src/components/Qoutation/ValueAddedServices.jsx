import { React, useState } from "react";
import SetDocTitle from "../../utils/SetDocTitle";

import { Container, Form, Row, Col, Button, Toast } from "react-bootstrap";
import "./style.css";

import axios from "axios";

import InputField from "./FormBuilder/InputField";
import PersonalInfo from "./FormBuilder/PersonalInfo";

function ValueAddedServices() {
  const [showToast, setShowToast] = useState(false);

  const [inputValue, setInputValue] = useState({
    name: "",
    address: "",
    phone: "",
    formattedPhone: "",
    email: "",
    serviceType: "",
    fileUpload: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Submitting ...");

    const { name, address, formattedPhone, email } = inputValue;

    if (
      name === "" ||
      address === "" ||
      formattedPhone === "" ||
      email === ""
    ) {
      console.log("Fields missing");
      setShowToast(true);
      alert("Name, Address, Phone Number and Email Address is required.");
      return;
    }

    axios({
      method: "post",
      url: "https://jsonplaceholder.typicode.com/users",
      data: inputValue,
    })
      .then((response) => {
        console.log(response);
        window.location.href = "/get-a-qoute/submission-successfull";
      })
      .catch((error) => {
        console.log(error);
        window.location.href = "/get-a-qoute/submission-failed";
      });
  }

  function handlePhoneInputChange(name, value, country, e, formattedValue) {
    if (name === "phone") {
      setInputValue((prevState) => ({
        ...prevState,
        ["phone"]: value,
        ["formattedPhone"]: formattedValue,
      }));
    } else if (name === "shipmentPhone") {
      setInputValue((prevState) => ({
        ...prevState,
        ["shipmentPhone"]: value,
        ["formattedShipmentPhone"]: formattedValue,
      }));
    }
  }

  function handleInputChange(name, value) {
    setInputValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <div className="transport form-page">
      <SetDocTitle title="Value Added Services | Get A Qoute" />
      <div>
        <Toast
          onClose={() => setShowToast(false)}
          show={showToast}
          delay={5000}
          autohide
          className="toast"
        >
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <p>Name, Address, Phone Number and Email is required.</p>
          </Toast.Header>
        </Toast>
      </div>

      <Container>
        <div className="heading">
          <h1>Fill up the Form</h1>
          <p>
            Fill up the form below to get a qoute for our Value Added Services.
          </p>
        </div>

        <Form className="form" onSubmit={(e) => handleSubmit(e)}>
          <PersonalInfo
            handleInputChange={handleInputChange}
            handlePhoneInputChange={handlePhoneInputChange}
            value={inputValue}
          />

          <h4>Service Specification</h4>

          <Row>
            <Col xl={12} lg={12} md={12} sm={12}>
              <InputField
                label="Select Value Addded Services"
                type="select"
                name="serviceType"
                value={inputValue.serviceType}
                handleInputChange={handleInputChange}
                selectOptions={["BIS", "DGFT", "E-Waste", "Customs", "MOEFCC", "FSSAI", "Other Regulatory / Licensing Approvals", "Logistics", "Charted Engineer Certificate"]}
              />
            </Col>
            <Col xl={12} lg={12} md={12} sm={12}>
              <InputField
                type="file"
                name="fileUpload"
                handleInputChange={handleInputChange}
              />
            </Col>
          </Row>

          <Col>
            <Button
              type="submit"
              style={{
                backgroundColor: "#2ECC71",
                color: "#fff",
                border: "1px solid transparent",
                marginTop: "1rem",
                marginLeft: "0rem",
                padding: "0.5rem 1rem",
              }}
            >
              Submit
            </Button>
          </Col>
        </Form>
      </Container>      
    </div>
  );
}

export default ValueAddedServices;
