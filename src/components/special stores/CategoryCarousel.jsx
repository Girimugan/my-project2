import React from "react";
import specialimg1 from "../../assets/specialimg1.jpg";
import specialimg2 from "../../assets/specialimg2.jpg";
import specialimg3 from "../../assets/specialimg3.jpg";
import specialimg4 from "../../assets/specialimg4.jpg";
import specialimg5 from "../../assets/specialimg5.jpg";
import "./CategoryCarousel.css";

function CategoryCarousel() {
  return (
    <div className="category-container">
      <h3 className="title1">Specialized Stores</h3>

      <div className="specialbox1">
        <img src={specialimg1} alt="first slider" />
      </div>
      <div className="specialbox2">
        <img src={specialimg2} alt="sec slider" />
      </div>
      <div className="specialbox3">
        <img src={specialimg3} alt="third slider" />
      </div>
      <div className="specialbox4">
        <img src={specialimg4} alt="fourth slider" />
      </div>
      <div className="specialbox5">
        <img src={specialimg5} alt="fifth slider" />
      </div>
      <div className="line1"></div>
    </div>
  );
}

export default CategoryCarousel;

