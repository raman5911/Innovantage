import { React, useState } from "react";
import SetDocTitle from "../utils/SetDocTitle";

import { Container, Card, Row, Col } from "react-bootstrap";

import NoJobs from "../assets/images/empty_jobs.png";

function Career() {
  const [jobOpenings, setJobOpenings] = useState([
    {
      jobTitle: "Business Development Manager for Logistics Services",
      location: "New Delhi",
      experience: "5-6 Years",
      jobLink: 'https://www.linkedin.com/jobs/view/2976108090/'
    }
  ]);

  function RenderJobOpenings() {
    return (
        <Card className="card" data-aos="zoom-in">
          <Card.Body>
            <Card.Title>{jobOpenings[0].jobTitle}</Card.Title>
            <Card.Text>
              <Row>
                <Col xl={10} lg={10}>
                  <p>
                    <i class="fas fa-map-marker-alt"></i>{" "}
                    Location :- {jobOpenings[0].location}
                  </p>
                  <p>
                    <i class="fas fa-clock"></i> Experience :- {jobOpenings[0].experience}
                  </p>
                </Col>
                <Col xl={2} lg={2}>
                  <a className="btn" target="_blank" href={`${jobOpenings[0].jobLink}`}>Apply</a>
                </Col>
              </Row>
            </Card.Text>
          </Card.Body>
        </Card>
    );
  }

  return (
    <div className="career">
      <SetDocTitle title="Career" />

      <header>
        <h1>Join Our Team</h1>
      </header>

      <Container>
        <section>
          <h1>Let's Grow Together</h1>
          <p>
            Innovantage Solutions Private Limited is a startup logistics company
            that wants to achieve and maintain its credibility in the industry.
            We want to create a challenging and healthy working environment for
            our employees who believe in delivering quality services to
            customers , flexibility and customer satisfaction with
            organization’s profitability. We are looking for such people who can
            join us in our mission.
          </p>
        </section>

        <section>
          <h1 data-aos="fade-up">Current Job Openings</h1>

          {jobOpenings.length > 0 ? (
            <RenderJobOpenings></RenderJobOpenings>
          ) : (
            <div className="empty" data-aos="zoom-in">
              <img src={NoJobs} alt="No openings currently" />
              <p>There are no openings currently.</p>
            </div>
          )}
        </section>
      </Container>
    </div>
  );
}

export default Career;
