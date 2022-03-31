import React from "react";
import { Container } from "react-bootstrap";

import IdNotFound from '../../assets/images/id_not_found.png';

function ResultNotFound() {
  return (
    <div className="result-not-found">
      <Container>
        <h3>This order id doesn't exist. Please enter the correct order id.</h3>

        <div className="img-wrapper">
          <img src={IdNotFound} alt="Id doesn't exist" />
        </div>
      </Container>
    </div>
  );
}

export default ResultNotFound;
