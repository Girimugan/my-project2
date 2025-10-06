import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* COMPANY */}
        <div className="footer-column">
          <h4>COMPANY</h4>
          <ul>
            <li><a href="#">About Netmeds</a></li>
            <li><a href="#">Career</a></li>
            <li><a href="#">Sitemap</a></li>
          </ul>
        </div>

        {/* OUR POLICIES */}
        <div className="footer-column">
          <h4>OUR POLICIES</h4>
          <ul>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Fees & Payments Policy</a></li>
            <li><a href="#">Shipping & Delivery Policy</a></li>
            <li><a href="#">Return, Refund & Cancellation Policy</a></li>
            <li><a href="#">Editorial Policy</a></li>
            <li><a href="#">Caution Notice</a></li>
          </ul>
        </div>

        {/* SHOPPING */}
        <div className="footer-column">
          <h4>SHOPPING</h4>
          <ul>
            <li><a href="#">Medicines A to Z</a></li>
            <li><a href="#">Shop By Categories</a></li>
            <li><a href="#">Offers / Coupons</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div className="footer-column">
          <h4>SOCIAL</h4>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">YouTube</a></li>
            <li><a href="#">Instagram</a></li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div className="footer-column newsletter">
          <h4>SUBSCRIBE TO OUR NEWSLETTER</h4>
          <p>
            Get a free subscription to our health and fitness tip and stay tuned
            to our latest offers
          </p>
          <div className="newsletter-box">
            <input type="email" placeholder="enter your email address" />
            <button>→</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
