import { Link } from "react-router-dom";

function PromotionStrip() {
  return (
    <div className="strip-container">
      <Link to="/special-stores">
        <div className="offer-box">Special Stores →</div>
      </Link>

      <Link to="/category">
        <div className="offer-box">Shop by Category</div>
      </Link>
    </div>
  );
}

export default PromotionStrip;
