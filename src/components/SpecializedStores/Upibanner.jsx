import React, { useRef } from "react";
import { Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Upibanner.css";

import upiimg1 from "../../assets/upiimg1.jpg";
import upiimg2 from "../../assets/upiimg2.jpg";
import upiimg3 from "../../assets/upiimg3.jpg";
import upiimg4 from "../../assets/upiimg4.jpg";

const stores = [
  { img: upiimg1 },
  { img: upiimg2 },
  { img: upiimg3 },
  { img: upiimg4 },
];

const Upibanner = () => {
  const scrollRef = useRef(null);
  const scrollLeft = () =>
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  const scrollRight = () =>
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });

  return (
    <Container>
      <div className="upibanner-section position-relative">
      
        <div className="scroll-container d-flex overflow-auto" ref={scrollRef}>
          {stores.map((store, index) => (
            <div key={index} className="upiimage-card">
              <img
                src={store.img}
                alt={`store-${index}`}
                className="UPI-img"
              />
            </div>
          ))}
        </div>
        <Button
          variant="light"
          className="arrowupi-btn leftupi-arrow"
          onClick={scrollLeft}
        >
          <i className="bi bi-arrow-left"></i>
        </Button>
        <Button
          variant="light"
          className="arrowupi-btn rightupi-arrow"
          onClick={scrollRight}
        >
          <i className="bi bi-arrow-right"></i>
        </Button>
      </div>
    </Container>
  );
};

export default Upibanner;
