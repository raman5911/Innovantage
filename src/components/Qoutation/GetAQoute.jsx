import React from "react";
import SetDocTitle from "../../utils/SetDocTitle";

import { Container, ListGroup } from "react-bootstrap";

function GetAQoute() {
  return (
    <div className="get-a-qoute">
      <SetDocTitle title="Get A Qoute" />

      <header>
        <div className="content">
          <h1>Get A Qoute</h1>
          <p>Fill up the form and our team will get back to you shortly.</p>
        </div>
      </header>

      <section>
        <Container>

          {/* <div style={{
            textAlign: "center",
            fontSize: "22px",
            fontWeight: "bold",
            marginBottom: "2rem",
            padding: "0.5rem",
            color: "#856404",
            backgroundColor: "#fff3cd"
          }}>Website is under maintainance. In the meantime, you can send us all your queires at sales@innovantage.in, contact@innovantage.in</div> */}

          <h1>Choose Your Service</h1>

          <ListGroup className="list-group">
            <ListGroup.Item action href="/get-a-qoute/freight-forwarding" className="list-group-item">
              Freight Forwarding <i class="fas fa-arrow-right"></i>
            </ListGroup.Item>
            <ListGroup.Item action href="/get-a-qoute/custom-clearance">
              Custom Clearance <i class="fas fa-arrow-right"></i>
            </ListGroup.Item>
            <ListGroup.Item action href="/get-a-qoute/warehouse-management">
              Warehouse Management <i class="fas fa-arrow-right"></i>
            </ListGroup.Item>
            <ListGroup.Item action href="/get-a-qoute/transportation-management">
              Transportation Management <i class="fas fa-arrow-right"></i>
            </ListGroup.Item>
            <ListGroup.Item action href="/get-a-qoute/value-added-services">
              Value Added Services <i class="fas fa-arrow-right"></i>
            </ListGroup.Item>                        
          </ListGroup>
        </Container>
      </section>
    </div>
  );
}

export default GetAQoute;
