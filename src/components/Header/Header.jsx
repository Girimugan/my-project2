import React, { useContext } from "react";
import netmedslogo from "../../assets/netmedsbeta.svg";
import { FaMapMarkerAlt, FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import "./Header.css";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <div className="box2">
      <div className="logo-section">
        <img src={netmedslogo} alt="Netmeds Logo" height="45" />
      </div>
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

function CartIcon() {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="box4">
      <Link to="/cart">
        <div className="cart">
          <FaShoppingCart className="icon" />
          {cartItems.length > 0 && (
            <span className="cart-count">{cartItems.length}</span>
          )}
        </div>
      </Link>
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




