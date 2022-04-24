import { React, useState } from "react";
import SetDocTitle from "../../utils/SetDocTitle";

import { Container, Form, Row, Col, Button, Toast } from "react-bootstrap";
import "./style.css";

import axios from "axios";

import InputField from "./FormBuilder/InputField";
import PersonalInfo from "./FormBuilder/PersonalInfo";

function WarehouseManagement() {
  const [showToast, setShowToast] = useState(false);

  const [inputValue, setInputValue] = useState({
    name: "",
    address: "",
    phone: "",
    formattedPhone: "",
    email: "",
    warehouseCity: "",
    specificLocation: "",
    coveredArea: "",
    openArea: "",
    commodityStorage: "",
    infraReq: "",
    manpowerReq: "",
    securityReq: "",
    otherReq: "",
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

    const url = `${process.env.REACT_APP_API_URL}/qoutation-forms/new`;
    const data = {
      type: "warehouse",
      userName: inputValue.name,
      userAddress: inputValue.address,
      userPhone: inputValue.phone,
      userPhoneFormatted: inputValue.formattedPhone,
      userEmail: inputValue.email,
      warehouseCity: inputValue.warehouseCity,
      specificLocation: inputValue.specificLocation,
      coveredArea: inputValue.coveredArea,
      openArea: inputValue.openArea,
      commodityStorage: inputValue.commodityStorage,
      infraOptions: inputValue.infraReq,
      manpowOptions: inputValue.manpowerReq,
      securityOptions: inputValue.securityReq,
      otherReq: inputValue.otherReq,
      file: inputValue.fileUpload,
    };

    // creating new form instance
    const formData = new FormData();

    // appending data in form
    for (var key in data) {
      formData.append(`${key}`, data[key]);
    }

    axios
      .post(url, formData)
      .then((response) => {
        if (response.status === 200)
          window.location.href = "/get-a-qoute/submission-successfull";
        else window.location.href = "/get-a-qoute/submission-failed";
      })
      .catch((error) => {
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
    <div className="warehouse form-page">
      <SetDocTitle title="Warehouse Management | Get A Qoute" />

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
            Fill up the form below to get a qoute for our Warehouse Management
            services.
          </p>
        </div>

        <Form className="form" onSubmit={(e) => handleSubmit(e)}>
          <PersonalInfo
            handleInputChange={handleInputChange}
            handlePhoneInputChange={handlePhoneInputChange}
            value={inputValue}
          />

          <h4>Requirement Details</h4>

          <Row>
            <Col xl={6} lg={6} md={12} sm={12}>
              <InputField
                label="Warehouse City"
                type="text"
                name="warehouseCity"
                value={inputValue.warehouseCity}
                handleInputChange={handleInputChange}
              />
            </Col>
            <Col xl={6} lg={6} md={12} sm={12}>
              <InputField
                label="Specific Location"
                type="text"
                name="specificLocation"
                value={inputValue.specificLocation}
                handleInputChange={handleInputChange}
              />
            </Col>
          </Row>

          <Row>
            <Col xl={6} lg={6} md={12} sm={12}>
              <InputField
                label="Required Covered Area (in SQFT)"
                type="text"
                name="coveredArea"
                value={inputValue.coveredArea}
                handleInputChange={handleInputChange}
              />
            </Col>

            <Col xl={6} lg={6} md={12} sm={12}>
              <InputField
                label="Required Open Area (in SQFT)"
                type="text"
                name="openArea"
                value={inputValue.openArea}
                handleInputChange={handleInputChange}
              />
            </Col>
          </Row>

          <Row>
            <Col xl={6} lg={6} md={12} sm={12}>
              <InputField
                label="Commodity Storage"
                type="text"
                name="commodityStorage"
                value={inputValue.commodityStorage}
                handleInputChange={handleInputChange}
              />
            </Col>
            <Col xl={6} lg={6} md={12} sm={12}>
              <InputField
                label="Infrastructure Requirement  (Select Yes / No)"
                type="select"
                name="infraReq"
                value={inputValue.infraReq}
                handleInputChange={handleInputChange}
                selectOptions={["Yes", "No"]}
              />
            </Col>
          </Row>

          <Row>
            <Col xl={6} lg={6} md={12} sm={12}>
              <InputField
                label="Manpower Requirement  (Select Yes / No)"
                type="select"
                name="manpowerReq"
                value={inputValue.manpowerReq}
                handleInputChange={handleInputChange}
                selectOptions={["Yes", "No"]}
              />
            </Col>
            <Col xl={6} lg={6} md={12} sm={12}>
              <InputField
                label="Security Personnel / CCTV Requirement  (Select Yes / No)"
                type="select"
                name="securityReq"
                value={inputValue.securityReq}
                handleInputChange={handleInputChange}
                selectOptions={["Yes", "No"]}
              />
            </Col>
          </Row>

          <Row>
            <Col xl={6} lg={6} md={12} sm={12}>
              <InputField
                label="Other Requirements"
                type="text"
                name="otherReq"
                handleInputChange={handleInputChange}
              />
            </Col>
            <Col xl={6} lg={6} md={12} sm={12}>
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

export default WarehouseManagement;
