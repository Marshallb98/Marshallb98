import React from "react";
import { Col, Row, Container } from "react-bootstrap";

function Divider() {
  return (
      <Container fluid>
    <Row>
      <Col>
        <div class="divider-custom divider-light">
          <div class="divider-custom-line"></div>
          <div class="divider-custom-icon">
            <i class="fas fa-code"></i>
          </div>
          <div class="divider-custom-line"></div>
        </div>
      </Col>
    </Row>
    </Container>
  );
}

export default Divider;
