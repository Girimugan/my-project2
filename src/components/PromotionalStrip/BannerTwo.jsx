import React from "react";
import { Container, Carousel } from "react-bootstrap";
import productImg1 from "../../assets/caroimg1.jpg";
import productImg2 from "../../assets/caroimg2.jpg";
import productImg3 from "../../assets/caroimg3.jpg";
import productImg4 from "../../assets/caroimg4.jpg";
import productImg6 from "../../assets/caroimg6.jpg";

function BannerTwo() {
  const images = [productImg1, productImg2, productImg3, productImg4, productImg6];

  return (
    <Container
      fluid
      className="p-0 my-3"
      style={{ width: "90%", marginLeft: "65px", borderRadius: "12px" }}
    >
      <Carousel fade interval={3000}>
        {images.map((img, index) => (
          <Carousel.Item key={index}>
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-100 rounded-4"
              style={{
                height: "250px",
                objectFit: "cover",
              }}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}

export default BannerTwo;

