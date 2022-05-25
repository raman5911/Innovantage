import React from "react";
import { Container } from "react-bootstrap";

import ErrorOccured from '../../assets/images/submission_failed.png';

function ErrorInFetching() {
  return (
    <div className="result-not-found">
      <Container>
        <h3>Oops! There was an error occured while fetching your details. Please try again later.</h3>

        <div className="img-wrapper">
          <img src={ErrorOccured} alt="Error Occured" />
        </div>
      </Container>
    </div>
  );
}

export default ErrorInFetching;
