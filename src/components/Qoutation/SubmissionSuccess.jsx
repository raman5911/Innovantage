import React from "react";
import SetDocTitle from "../../utils/SetDocTitle";

import submissionReceived from "../../assets/images/submission_received.png";

import "./style.css";

import { Container } from "react-bootstrap";

function SubmissionSuccess() {
  return (
    <Container>

      <SetDocTitle title="Submission Successfull !" />

      <div className="submission-status">
        <div className="img-box">
          <img
            src={submissionReceived}
            alt="Submission Received"
            height="300px"
            width="400px"
          />
        </div>
        <h1>Your Submission was received. 😀</h1>
        <p>
          Thank you! Your submission was successful, and your form has been
          received. A confirmation email will be sent to your email address
          shortly.
        </p>
        <p>
          We will reach out to you within 2-3 business days. In the meantime, if
          you have any query, ask us at{" "}
          <a href="mailto:contact@innovantage.in">sales@innovantage.in</a> and
          for the reference, also mention the order id from the confirmation
          email sent to you.
        </p>
        <div className="link-box">
          <a href="/" className="btn">
            Back to Home Page
          </a>
        </div>
      </div>
    </Container>
  );
}

export default SubmissionSuccess;
