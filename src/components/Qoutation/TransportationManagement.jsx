import { React, useState } from "react";
import SetDocTitle from "../../utils/SetDocTitle";

import { Container, Form, Row, Col, Button, Toast } from "react-bootstrap";
import "./style.css";

import axios from "axios";

import InputField from "./FormBuilder/InputField";
import PersonalInfo from "./FormBuilder/PersonalInfo";

function TransportationManagement() {
  const [showToast, setShowToast] = useState(false);

  const [inputValue, setInputValue] = useState({
    name: "",
    address: "",
    phone: "",
    formattedPhone: "",
    email: "",
    pickupAddress: "",
    destinationAddress: "",
    vehicleType: "",
    vehicleSize: "",
    packingType: "",
    otherSpec: "",
    numOfPackage: "",
    packageWeight: "",
    shipmentWeight: "",
    measurementUnit: "",
    length: "",
    width: "",
    height: "",
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
      type: "transport",
      userName: inputValue.name,
      userAddress: inputValue.address,
      userPhone: inputValue.phone,
      userPhoneFormatted: inputValue.formattedPhone,
      userEmail: inputValue.email,
      pickupAddress: inputValue.pickupAddress,
      destAddress: inputValue.destinationAddress,
      vehicleType: inputValue.vehicleType,
      vehicleSize: inputValue.vehicleSize,
      packingType: inputValue.packingType,
      otherSpecs: inputValue.otherSpec,
      packagePerUnit: inputValue.numOfPackage,
      packageWt: inputValue.packageWeight,
      shipmentWt: inputValue.shipmentWeight,
      measurementUnit: inputValue.measurementUnit,
      length: inputValue.length,
      width: inputValue.width,
      height: inputValue.height,
      file: inputValue.fileUpload
    };

    // creating new form instance
    const formData = new FormData();
    
    // appending data in form
    for(var key in data) {
      formData.append(`${key}`, data[key]);
    }

    axios.post(
      url,
      formData
    )
      .then((response) => {
        if(response.status === 200)
          window.location.href = '/get-a-qoute/submission-successfull';

        else
          window.location.href = '/get-a-qoute/submission-failed';
      })
      .catch((error) => {
        window.location.href = '/get-a-qoute/submission-failed';
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
      <SetDocTitle title="Transportation Management | Get A Qoute" />
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
            Fill up the form below to get a qoute for our Transportation
            Management services.
          </p>
        </div>

        <Form className="form" onSubmit={(e) => handleSubmit(e)}>
          <PersonalInfo
            handleInputChange={handleInputChange}
            handlePhoneInputChange={handlePhoneInputChange}
            value={inputValue}
          />

          <h4>Shipment Details</h4>

          <Row>
            <Col xl={6} lg={6} md={12} sm={12}>
              <InputField
                label="Shipment Pickup Address"
                type="text"
                name="pickupAddress"
                value={inputValue.pickupAddress}
                handleInputChange={handleInputChange}
              />
            </Col>
            <Col xl={6} lg={6} md={12} sm={12}>
              <InputField
                label="Shipment Destination Address"
                type="text"
                name="destinationAddress"
                value={inputValue.destinationAddress}
                handleInputChange={handleInputChange}
              />
            </Col>
          </Row>

          <Row>
            <Col xl={6} lg={6} md={12} sm={12}>
              <InputField
                label="Select Vehicle Type"
                type="select"
                name="vehicleType"
                value={inputValue.vehicleType}
                handleInputChange={handleInputChange}
                selectOptions={["Open", "Container Type"]}
              />
            </Col>

            <Col xl={6} lg={6} md={12} sm={12}>
              <InputField
                label="Select Vehicle Size"
                type="select"
                name="vehicleSize"
                value={inputValue.vehicleSize}
                handleInputChange={handleInputChange}
                selectOptions={[
                  "14'",
                  "17'",
                  "19'",
                  "20'",
                  "Pick Up Tempo",
                  "32 Feet (SXL)",
                  "32 Feet (MXL)",
                ]}
              />
            </Col>
          </Row>

          <h4>Commodity Details</h4>

          <Row>
            <Col xl={6} lg={6} md={12} sm={12}>
              <InputField
                label="Select Unit Packing Type"
                type="select"
                name="packingType"
                value={inputValue.packingType}
                handleInputChange={handleInputChange}
                selectOptions={[
                  "Cartons",
                  "Bags",
                  "Wooden Boxes",
                  "Bundles",
                  "Rolls",
                  "Drums",
                  "Cylinders",
                  "Nos",
                  "Any Other Specifications",
                ]}
              />
            </Col>

            <Col xl={6} lg={6} md={12} sm={12}>
              <InputField
                label="If any other specifications please specify"
                type="text"
                name="otherSpec"
                value={inputValue.otherSpec}
                handleInputChange={handleInputChange}
              />
            </Col>
          </Row>

          <Row>
            <Col xl={6} lg={6} md={12} sm={12}>
              <InputField
                label="Number of Packages per Unit"
                type="text"
                name="numOfPackage"
                value={inputValue.numOfPackage}
                handleInputChange={handleInputChange}
              />
            </Col>

            <Col xl={6} lg={6} md={12} sm={12}>
              <InputField
                label="Each Package Weight (in Kg)"
                type="text"
                name="packageWeight"
                value={inputValue.packageWeight}
                handleInputChange={handleInputChange}
              />
            </Col>
          </Row>

          <Row>
            <Col xl={6} lg={6} md={12} sm={12}>
              <InputField
                label="Shipment Weight (in Kg)"
                type="text"
                name="shipmentWeight"
                value={inputValue.shipmentWeight}
                handleInputChange={handleInputChange}
              />
            </Col>
          </Row>

          <h4>Package Dimensions</h4>

          <Row>
            <Col xl={6} lg={6} md={12} sm={12}>
              <InputField
                label="Select Unit of Measurement"
                type="select"
                name="measurementUnit"
                value={inputValue.measurementUnit}
                handleInputChange={handleInputChange}
                selectOptions={["mm", "cms", "Inches", "Feet", "Metre"]}
              />
            </Col>

            <Col xl={6} lg={6} md={12} sm={12}>
              <InputField
                label="Length in Selected Unit"
                type="text"
                name="length"
                value={inputValue.length}
                handleInputChange={handleInputChange}
              />
            </Col>
          </Row>

          <Row>
            <Col xl={6} lg={6} md={12} sm={12}>
              <InputField
                label="Width in Selected Unit"
                type="text"
                name="width"
                value={inputValue.width}
                handleInputChange={handleInputChange}
              />
            </Col>

            <Col xl={6} lg={6} md={12} sm={12}>
              <InputField
                label="Height in Selected Unit"
                type="text"
                name="height"
                value={inputValue.height}
                handleInputChange={handleInputChange}
              />
            </Col>
          </Row>

          <Row>
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

export default TransportationManagement;
