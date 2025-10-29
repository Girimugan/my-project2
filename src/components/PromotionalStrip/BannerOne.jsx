import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./BannerOne.css";

function BannerOne() {
  return (
    <Container
      fluid
      className="p-4 my-3 text-white rounded-4"
      style={{ backgroundColor: "#c62828", width: "90%" }}
    >
      <Row className="align-items-center">
  
        <Col md={3} sm={12} className="text-center text-md-start mb-3 mb-md-0">
          <h2 className="fw-bold" style={{ lineHeight: "1.2" }}>
            HUGE SAVINGS <br /> ON MEDICINE <br /> BILLS
          </h2>
        </Col>

        <Col md={8} sm={10}>
          <Row className="g-3 justify-content-center">

            
            <Col xs={12} sm={6} md={4}>
              <Link to="/routeone" style={{ textDecoration: "none" }}>
                <Card className="h-100 text-dark border-0 rounded-3" style={{ backgroundColor: "#ffe0cc" }}>
                  <Card.Body>
                    <Card.Title className="fw-bold text-secondary fs-5">
                      On First Order
                    </Card.Title>
                    <h4>
                      Flat <span className="fw-bold">20% off</span> on meds
                    </h4>
                    <p className="mb-2">
                      + <b>Up to 10%</b> cashback <br /> + <b>free shipping</b>
                    </p>
                    <div className="border-top pt-2 small">
                      Code: <b>NMSNEW20</b>
                    </div>
                  </Card.Body>
                </Card>
              </Link>
            </Col>

            {/* Card 2 */}
            <Col xs={12} sm={6} md={4}>
              <Link to="/routeone" style={{ textDecoration: "none" }}>
                <Card className="h-100 text-dark border-0 rounded-3" style={{ backgroundColor: "#d5f2db" }}>
                  <Card.Body>
                    <Card.Title className="fw-bold text-secondary fs-5">
                      Special Offer
                    </Card.Title>
                    <h4>
                      Flat <span className="fw-bold">18% off</span> on meds
                    </h4>
                    <p className="mb-2">
                      + <b>Rs. 150</b> cashback
                    </p>
                    <div className="border-top pt-5 small">
                      Code: <b>NMS18BONUS</b>
                    </div>
                  </Card.Body>
                </Card>
              </Link>
            </Col>

            {/* Card 3 */}
            <Col xs={12} sm={6} md={4}>
              <Link to="/routeone" style={{ textDecoration: "none" }}>
                <Card className="h-100 text-dark border-0 rounded-3" style={{ backgroundColor: "#fff7cc" }}>
                  <Card.Body>
                    <Card.Title className="fw-bold text-secondary fs-5">
                      On Lab Tests
                    </Card.Title>
                    <h4>
                      Flat <span className="fw-bold">Rs. 350</span> off
                    </h4>
                    <div className="border-top pt-5 small">
                      
                      Code: <b>EXTRA350</b>
                    </div>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default BannerOne;
