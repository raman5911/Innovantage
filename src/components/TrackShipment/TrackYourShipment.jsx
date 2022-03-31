import { React, useState } from "react";
import SetDocTitle from "../../utils/SetDocTitle";

import InputField from "../Qoutation/FormBuilder/InputField";
import { Button, Container, Row, Col } from "react-bootstrap";

import "./style.css";

import ResultNotFound from "./ResultNotFound";

function TrackYourShipment() {
  const [trackId, setTrackId] = useState("");

  function handleInputChange(name, value) {
    setTrackId(value);
  }

  return (
    <div className="track-shipment">
      <SetDocTitle title="Track Your Shipment" />

      <header>
        <h1>Track Your Shipment</h1>
      </header>

      <section className="search-input">
        <Container>
          <Row>
            <Col xl={6} lg={6} md={12} sm={12} className="col">
              <InputField
              type="text"
              label="Tracking Id"
              name="trackId"
              value={trackId}
              handleInputChange={handleInputChange}
              />
            </Col>

            <Col xl={6} lg={6} md={12} sm={12}>
              <Button type="submit" className="btn">Search <i className="fas fa-search"></i> </Button>
            </Col>
          </Row>

          <ResultNotFound />
        </Container>
      </section>
    </div>
  );
}

export default TrackYourShipment;
