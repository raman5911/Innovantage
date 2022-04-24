import {React, useState} from 'react';
import SetDocTitle from "../../utils/SetDocTitle";

import {
  Container,
  Form,
  Row,
  Col,
  Button,
  Toast,
} from "react-bootstrap";
import "./style.css";

import axios from "axios";

import InputField from "./FormBuilder/InputField";
import PersonalInfo from "./FormBuilder/PersonalInfo";

function CustomClearance() {
  const [showToast, setShowToast] = useState(false);

  const [inputValue, setInputValue] = useState({
    name: "",
    address: "",
    phone: "",
    formattedPhone: "",
    email: "",
    shipmentType: "",
    pickupAddress: "",
    areaCode: "",
    shipmentPhone: "",
    formattedShipmentPhone: "",
    shipmentFrom: "",
    shipmentFromCountry: "",
    shipmentTo: "",
    shipmentToCountry: "",
    originPort: "",
    destinationPort: "",
    modeOfShipment: "",
    commodityName: "",
    containerType: "",
    grossWeight: "",
    numOfPackages: "",
    totalVolume: "",
    shipmentPerMonth: "",
    fileUpload: ""
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
      alert("Name, Address, Phone Number and Email Address is required.")
      return;
    }

    const url = `${process.env.REACT_APP_API_URL}/qoutation-forms/new`;
    const data = {
      type: "custom",
      userName: inputValue.name,
      userAddress: inputValue.address,
      userPhone: inputValue.phone,
      userPhoneFormatted: inputValue.formattedPhone,
      userEmail: inputValue.email,
      shipmentType: inputValue.shipmentType,
      pickupAddress: inputValue.pickupAddress,
      areaCode: inputValue.areaCode,
      pickupPhone: inputValue.shipmentPhone,
      pickupPhoneFormatted: inputValue.formattedShipmentPhone,
      pickupFromCountryCode: inputValue.shipmentFrom,
      pickupFromCountryName: inputValue.shipmentFromCountry,
      originPort: inputValue.originPort,
      dropToCountryCode: inputValue.shipmentTo,      
      dropToCountryName: inputValue.shipmentToCountry,
      destinationPort: inputValue.destinationPort,
      shipmentMode: inputValue.modeOfShipment,
      commodityName: inputValue.commodityName,
      commodityType: inputValue.commodityType,
      containerType: inputValue.containerType,
      grossWeight: inputValue.grossWeight,
      numOfPkg: inputValue.numOfPackages,
      totalVolume: inputValue.totalVolume,
      numOfShip: inputValue.shipmentPerMonth,
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

  function handleCountryInputChange(name, code, country) {
    if (name === "shipmentFrom") {
      setInputValue((prevState) => ({
        ...prevState,
        ["shipmentFrom"]: code,
        ["shipmentFromCountry"]: country,
      }));
    } else if (name === "shipmentTo") {
      setInputValue((prevState) => ({
        ...prevState,
        ["shipmentTo"]: code,
        ["shipmentToCountry"]: country,
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
    <div className="custom form-page">
      <SetDocTitle title="Custom Clearance | Get A Qoute" />

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
            Fill up the form below to get a qoute for our Custom Clearance
            services.
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
                label="Select type of Shipment"
                type="select"
                name="shipmentType"
                value={inputValue.shipmentType}
                handleInputChange={handleInputChange}
                selectOptions={["Import", "Export", "LCL"]}
              />
            </Col>

            <Col xl={6} lg={6} md={12} sm={12}>
              <InputField
                label="Select Mode of Shipment"
                type="select"
                name="modeOfShipment"
                value={inputValue.modeOfShipment}
                handleInputChange={handleInputChange}
                selectOptions={["By Air", "By Ocean"]}
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <InputField
                label="Shipment Pickup Address"
                type="text"
                name="pickupAddress"
                value={inputValue.pickupAddress}
                handleInputChange={handleInputChange}
              />
            </Col>
          </Row>

          <Row>
            <Col xl={6} lg={6} md={12} sm={12}>
              <InputField
                label="ZIP/PIN Code"
                type="number"
                name="areaCode"
                value={inputValue.areaCode}
                handleInputChange={handleInputChange}
              />
            </Col>
            <Col xl={6} lg={6} md={12} sm={12}>
              <InputField
                label="Phone Number"
                type="tel"
                name="shipmentPhone"
                value={inputValue.shipmentPhone}
                handleInputChange={handlePhoneInputChange}
              />
            </Col>
          </Row>

          <Row>
            <Col xl={6} lg={6} md={12} sm={12}>
              <InputField
                label="Shipment From (Select Country)"
                type="selectCountry"
                name="shipmentFrom"
                value={inputValue.shipmentFrom}
                handleInputChange={handleCountryInputChange}
              />
            </Col>
            <Col xl={6} lg={6} md={12} sm={12}>
              <InputField
                label="Shipment To (Select Country)"
                type="selectCountry"
                name="shipmentTo"
                value={inputValue.shipmentTo}
                handleInputChange={handleCountryInputChange}
              />
            </Col>
          </Row>

          <Row>
            <Col xl={6} lg={6} md={12} sm={12}>
              <InputField
                label="Port of Origin (Nearest Port)"
                name="originPort"
                value={inputValue.originPort}
                handleInputChange={handleInputChange}
              />
            </Col>
            <Col xl={6} lg={6} md={12} sm={12}>
              <InputField
                label="Destination Port (Nearest Port)"
                name="destinationPort"
                value={inputValue.destinationPort}
                handleInputChange={handleInputChange}
              />
            </Col>
          </Row>

          <h4>Commodity Details</h4>

          <Row>
            <Col xl={6} lg={6} md={12} sm={12}>
              <InputField
                label="Commodity Name"
                name="commodityName"
                value={inputValue.commodityName}
                handleInputChange={handleInputChange}
              />
            </Col>
          </Row>

          <Row>
            <Col xl={6} lg={6} md={12} sm={12}>
              <InputField
                label="Select Type of Container"
                type="select"
                name="containerType"
                value={inputValue.containerType}
                handleInputChange={handleInputChange}
                selectOptions={[
                  "20FT General",
                  "40FT General",
                  "20FT High Cube",
                  "40FT High Cube",
                  "20FT Refregerated",
                  "40FT Refregerated",
                  "LCL Cargo",
                  "N.A. (For Air Shipments Only)",
                ]}
              />
            </Col>
            <Col xl={6} lg={6} md={12} sm={12}>
              <InputField type="file" name="fileUpload" handleInputChange={handleInputChange} />
            </Col>
          </Row>

          <h4>Shipment Volume</h4>

          <Row>
            <Col xl={6} lg={6} md={12} sm={12}>
              <InputField
                type="text"
                label="Gross Weight (Kgs)"
                name="grossWeight"
                value={inputValue.grossWeight}
                handleInputChange={handleInputChange}
              />
            </Col>
            <Col xl={6} lg={6} md={12} sm={12}>
              <InputField
                type="text"
                label="Number of Packages"
                name="numOfPackages"
                value={inputValue.numOfPackages}
                handleInputChange={handleInputChange}
              />
            </Col>
          </Row>

          <Row>
            <Col xl={6} lg={6} md={12} sm={12}>
              <InputField
                type="text"
                label="Total Volume (CBM)"
                name="totalVolume"
                value={inputValue.totalVolume}
                handleInputChange={handleInputChange}
              />
            </Col>

              <Col xl={6} lg={6} md={12} sm={12}>
              <InputField
                type="text"
                label="Number of Shipments per Month"
                name="shipmentPerMonth"
                value={inputValue.shipmentPerMonth}
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

export default CustomClearance;