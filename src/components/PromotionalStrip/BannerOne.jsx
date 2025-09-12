import React from "react";
import "./BannerOne.css";

function BannerOne() {
  return (
    <div className="banner-container">
      <div className="banner-left">
        <h2>HUGE SAVINGS<br />ON MEDICINE<br />BILLS</h2>
      </div>

      <div className="banner-right">
        <div className="offer-card orange">
          <span className="offer-title">On First Order</span>
          <h4>Flat <span>20% off</span> on meds</h4>
          <p>+ <b>Up to 10%</b> cashback <br />+ <b>free shipping</b></p>
          <div className="offer-code">Code: <b>NMSNEW20</b></div>
        </div>

        <div className="offer-card green">
          <span className="offer-title">Special Offer</span>
          <h4>Flat <span>18% off</span> on meds</h4>
          <p>+ <b>Rs. 150</b> cashback</p>
          <div className="offer-code">Code: <b>NMS18BONUS</b></div>
        </div>

        <div className="offer-card yellow">
          <span className="offer-title">On Lab Tests</span>
          <h4>Flat <span>Rs. 350</span> off</h4>
          <div className="offer-code">Code: <b>EXTRA350</b></div>
        </div>

        {/* <div className="banner-image">
          <img 
            src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1669058794_Web_Home.webp"
            alt="Offer Person"
          />
        </div> */}
      </div>
    </div>
  );
}

export default BannerOne;
