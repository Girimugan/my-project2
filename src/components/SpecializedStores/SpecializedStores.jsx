import React, { useRef } from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SpecializedStores.css";

import specialimg1 from "../../assets/img/specialimg1.jpg";
import specialimg2 from "../../assets/img/specialimg2.jpg";
import specialimg3 from "../../assets/img/specialimg3.jpg";
import specialimg4 from "../../assets/img/specialimg4.jpg";
import specialimg5 from "../../assets/img/specialimg5.jpg";
import specialimg6 from "../../assets/img/specialimg6.jpg";

const stores = [
  { img: specialimg1 },
  { img: specialimg2 },
  { img: specialimg3 },
  { img: specialimg4 },
  { img: specialimg5 },
  { img: specialimg6 },
];

const SpecializedStores = () => {
  const scrollRef = useRef(null);
  const scrollLeft = () => scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  const scrollRight = () => scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });

  return (
    <div className="special-container">
      <div className="element-style"></div>

      <section className="specialized-bg py-4 position-relative">
        <Container>
          <Row className="align-items-center mb-3">
            <Col>
              <h4 className="fw-bold ms-2">Specialized Stores</h4>
            </Col>
          </Row>

          <div className="scroll-container d-flex overflow-auto" ref={scrollRef}>
            {stores.map((store, index) => (
              <div key={index} className="image-card">
                <img src={store.img} alt={`store-${index}`} className="store-img" />
              </div>
            ))}
          </div>

          <Button
            variant="light"
            className="arrow-btn left-arrow"
            onClick={scrollLeft}
          >
            <i className="bi bi-arrow-left"></i>
          </Button>
          <Button
            variant="light"
            className="arrow-btn right-arrow"
            onClick={scrollRight}
          >
            <i className="bi bi-arrow-right"></i>
          </Button>
        </Container>
      </section>
    </div>
  );
};

export default SpecializedStores;




