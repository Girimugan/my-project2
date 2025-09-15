import React from "react";
import { Carousel } from "react-bootstrap";
import productImg1 from "../../assets/caroimg1.jpg";
import productImg2 from "../../assets/caroimg2.jpg";
import productImg3 from "../../assets/caroimg3.jpg";
import productImg4 from "../../assets/caroimg4.jpg";
import "./BannerTwo.css";

function BannerTwo() {
  return (
    <div className="banner-carousel">
      <Carousel>
        <Carousel.Item>
          <img
            className="carousel-img"
            src={productImg1}
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="carousel-img"
            src={productImg2}
            alt="Second slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="carousel-img"
            src={productImg3}
            alt="Third slide"
          />
        </Carousel.Item>

         <Carousel.Item>
          <img
            className="carousel-img"
            src={productImg4}
            alt="Fourth slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default BannerTwo;
