import React from "react";
import { Carousel } from "react-bootstrap";
import productImg1 from "../../assets/productimg1.jpg";
import productImg2 from "../../assets/productimg2.jpg";
import productImg3 from "../../assets/productimg3.jpg";
import productImg4 from "../../assets/productimg4.jpg";
import "./BannerTwo.css"; // CSS import

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
