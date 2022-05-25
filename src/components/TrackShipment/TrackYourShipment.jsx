import { React, useState } from "react";
import SetDocTitle from "../../utils/SetDocTitle";

import InputField from "../Qoutation/FormBuilder/InputField";
import { Button, Container, Row, Col, Spinner } from "react-bootstrap";

import "./style.css";

import ResultNotFound from "./ResultNotFound";
import ErrorInFetching from "./ErrorInFetching";

import axios from "axios";

function TrackYourShipment() {
  const [trackId, setTrackId] = useState("");

  function handleInputChange(name, value) {
    setTrackId(value);
  }

  const [loading, setLoading] = useState(false);
  const [responseStatus, setResponseStatus] = useState('');

  const handleSubmit = () => {
    setLoading(true);

    axios.get(`${process.env.REACT_APP_API_URL}/track-shipment?orderId=${trackId}`)
    .then((response) => {
      setLoading(false);

      console.log(response.data);

      if(response.data.exist === undefined) {
        setResponseStatus('success');
      }
      else if(response.data.exist === false) {
        setResponseStatus('not found');
      }
    })
    .catch((err) => {
      console.log(err);
      setLoading(false);
      setResponseStatus('error');
    });
  };

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
              <Button type="submit" className="btn" onClick={handleSubmit}>Search <i className="fas fa-search"></i> </Button>
            </Col>
          </Row>

          {loading && <div style={{ marginTop: "3rem", position: "relative", left: "-4rem" }}><Spinner animation="border" variant="primary" /></div>}

          {responseStatus === 'not found' && <ResultNotFound />}

          {responseStatus === 'error' && <ErrorInFetching />}

          {responseStatus === 'success' && (
            <div>

            </div>
          )}
        </Container>
      </section>
    </div>
  );
}

export default TrackYourShipment;
