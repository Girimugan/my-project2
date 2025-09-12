
import netmedslogo from "../../assets/netmed.png";
import { FaMapMarkerAlt, FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import "./Header.css";

function Logo() {
  return (
    <div className="box2">
    <div className="logo-section">
      <img src={netmedslogo} alt="Netmeds Logo" height="40" />
    </div>
    <h3>netmeds</h3>
    </div>
  );
}

function LocationSelector() {
  return (
    <div className="box3">
    <div className="location">
      <FaMapMarkerAlt className="icon" />
      <span>Deliver to Delhi, 110001</span>
    </div>
    </div>
  );
}

function SearchBar() {
  return (
    <div className="search-bar">
      <FaSearch className="search-icon" />
      <input type="text" placeholder="Search for medicines, lab tests, doctors & beauty" />
    </div>
  );
}

function CartIcon({ count = 0 }) {
  return (
    <div className="box4">
    <div className="cart">
      <FaShoppingCart className="icon" />
      {count > 0 && <span className="cart-count">{count}</span>}
    </div>
    </div>
  );
}

function UserMenu() {
  return (
    <div className="box5">
    <div className="profile">
      <FaUser className="icon" />
      <span>Giri mug..</span>
    </div>
    </div>
  );
}


function Header() {
  return (
    <header className="box1">
    
      <Logo />
      <LocationSelector />
      <SearchBar />
      <CartIcon />
      <UserMenu />
    </header>
  );
}

export default Header;





