import React from 'react';
import SetDocTitle from "../../utils/SetDocTitle";

import submissionFailed from "../../assets/images/submission_failed.png";

import "./style.css";

import { Container } from "react-bootstrap";

function SubmissionFail() {
  return (
    <Container>

      <SetDocTitle title="Submission Failed !" />

      <div className="submission-status">
        <div className="img-box">
          <img
            src={submissionFailed}
            alt="Submission Received"
            height="300px"
            width="400px"
          />
        </div>
        <h1>Oops! Something went wrong. 😞</h1>
        <p>Looks like something went wrong and your form submission was failed. We suggest you to check the internet connection of your device and try to submit the form again.</p>
        <div className="link-box">
          <a href="/" className="btn">
            Back to Home Page
          </a>
        </div>
      </div>
    </Container>
  )
}

export default SubmissionFail;