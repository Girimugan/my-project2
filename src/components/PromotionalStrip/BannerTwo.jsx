import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Image1 from "../../assets/lakme.jpg";
import Image2 from "../../assets/Medical-Terminology.jpg";
import Image3 from "../../assets/scope.jpg";
import Image4 from "../../assets/lakme.jpg";
import "./BannerTwo.css";

function BannerTwo() {
  return (
    <div className="carousel-container">
      <Carousel interval={3000} indicators={true} controls={true}>
        
        {/* Slide 1 */}
        <Carousel.Item>
          <div className="slide-layout1">
            <div className="slide-text">
              <h3>Where Science Meets True Compassion</h3>
              <p>Redefining Healthcare, Transforming Lives</p>
              <button className="slide-btn1">Buy Now</button>
            </div>
            <div className="slide-image">
              <img src={Image1} alt="First slide" className="slide-img" />
            </div>
          </div>
        </Carousel.Item>

        {/* Slide 2 */}
        <Carousel.Item>
          <div className="slide-layout2">
            <div className="slide-text">
              <h3>Huge Savings on Medicines</h3>
              <p>Flat 20% off on First Order + Cashback</p>
              <button className="slide-btn2">Shop Now</button>
            </div>
            <div className="slide-image">
              <img src={Image2} alt="Second slide" className="slide-img" />
            </div>
          </div>
        </Carousel.Item>

        {/* Slide 3 */}
        <Carousel.Item>
          <div className="slide-layout3">
            <div className="slide-text">
              <h3>Lab Tests at Your Doorstep</h3>
              <p>Book Tests Online & Save Big</p>
              <button className="slide-btn3">Book Now</button>
            </div>
            <div className="slide-image">
               <img src={Image3} alt="Third slide" className="slide-img" />
            </div>
          </div>
        </Carousel.Item>

         <Carousel.Item>
          <div className="slide-layout4">
            <div className="slide-text">
              <h3>Where Science Meets True Compassion</h3>
              <p>Redefining Healthcare, Transforming Lives</p>
              <button className="slide-btn4">Buy Now</button>
            </div>
            <div className="slide-image">
              <img src={Image4} alt="Fourth slide" className="slide-img" />
            </div>
          </div>
        </Carousel.Item>

      </Carousel>
    </div>
  );
}

export default BannerTwo;
