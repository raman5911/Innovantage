import { React, useState, useEffect } from "react";
import SetDocTitle from "../utils/SetDocTitle";

import { Container, Card, Row, Col } from "react-bootstrap";
import { get, format_date } from "../utils/index";

import NoJobs from "../assets/images/empty_jobs.png";

function Career() {
  const [jobOpenings, setJobOpenings] = useState([]);

  useEffect(async () => {
    const result = await get('career-jobs/all');
    console.log(result.data.data);
    setJobOpenings(result.data.data)
  }, []);

  function RenderJobOpenings() {
    return jobOpenings.map((job, index) => {
      return (
        <Card className="card" data-aos="zoom-in">
          <Card.Body>
            <Card.Title>{job.position}</Card.Title>
            <Card.Text>
              <Row>
                <Col xl={10} lg={10}>
                  <p>
                    <i class="fas fa-map-marker-alt"></i> Location :-{" "}
                    {job.location}
                  </p>
                  <p>
                  <i class="fas fa-suitcase"></i> Experience :-{" "}
                    {job.experience_min} - {job.experience_max} years
                  </p>
                  <p>
                  <i class="fas fa-clock"></i> Application Deadline :- {format_date(job.application_deadline, "Asia/Kolkata", "dd-MMMM-yyyy")}
                  </p>
                </Col>
                <Col xl={2} lg={2}>
                  <a
                    className="btn"
                    target="_blank"
                    href={`${job.post_link}`}
                  >
                    Apply
                  </a>
                </Col>
              </Row>
            </Card.Text>
          </Card.Body>
        </Card>
      );
    });
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
