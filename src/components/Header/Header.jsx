import React from "react";
import { Navbar, Container, Form, InputGroup, Badge } from "react-bootstrap";
import { FaMapMarkerAlt, FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import netmedslogo from "../../assets/netmedsbeta.svg";
import "./Header.css";

function Header() {
  const cartCount = 2;
  const navigate = useNavigate();
  const location = useLocation();

  // 🔹 When user clicks logo → go to home (or scroll to top)
  const handleLogoClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  return (
    <Navbar expand="lg" className="box1" sticky="top">
      <Container fluid className="d-flex align-items-center justify-content-between">

        {/* 🔹 Logo Section */}
        <div className="box2 d-flex align-items-center justify-content-center">
          <img
            src={netmedslogo}
            alt="Netmeds Logo"
            height="35"
            className="logo-section"
            style={{ cursor: "pointer" }}
            onClick={handleLogoClick}
          />
        </div>

        {/* 🔹 Location Section */}
        <div className="box3 d-flex align-items-center justify-content-center">
          <FaMapMarkerAlt className="icon me-2" />
          <span className="location">Deliver to Tamil Nadu, 110001</span>
        </div>

        {/* 🔹 Search Bar */}
        <Form className="d-flex align-items-center justify-content-center mt-2">
          <InputGroup
            style={{
              width: "350px",
              height: "35px",
              borderRadius: "40px",
              overflow: "hidden",
              backgroundColor: "white",
              marginTop: "-10px",
            }}
          >
            <InputGroup.Text
              className="bg-white border-0"
              style={{
                borderTopLeftRadius: "40px",
                borderBottomLeftRadius: "40px",
                paddingLeft: "15px",
              }}
            >
              <FaSearch style={{ color: "gray", fontSize: "14px" }} />
            </InputGroup.Text>

            <Form.Control
              type="text"
              placeholder="Search for medicines, lab tests, doctors & beauty"
              className="border-0"
              style={{
                fontSize: "13px",
                borderTopRightRadius: "40px",
                borderBottomRightRadius: "40px",
                padding: "8px 12px",
                boxShadow: "none",
              }}
            />
          </InputGroup>
        </Form>

        {/* 🔹 Cart Section */}
        <div className="box4 d-flex align-items-center justify-content-center">
          <div
            className="position-relative"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/cart")}
          >
            <FaShoppingCart className="icon" />
            {cartCount > 0 && (
              <Badge
                bg="danger"
                pill
                className="cart-count position-absolute top-0 start-100 translate-middle"
              >
                {cartCount}
              </Badge>
            )}
          </div>
        </div>

        {/* 🔹 User Section */}
        <div className="box5 d-flex align-items-center justify-content-center">
          <FaUser className="icon me-2" />
          <span className="profile">Giri mug..</span>
        </div>
      </Container>
    </Navbar>
  );
}

export default Header;




