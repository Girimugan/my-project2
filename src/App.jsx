import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Header from "./components/Header/Header.jsx";
import Category from "./components/CategoryNav/Category.jsx";
import BannerOne from "./components/PromotionalStrip/BannerOne.jsx";
import BannerTwo from "./components/PromotionalStrip/BannerTwo.jsx";
import CategoryCarousel from "./components/special stores/CategoryCarousel.jsx";

import "./App.css";

function App() {
  return (
    <div>
      <Header /> 
      <Category />
      <BannerOne />
      <BannerTwo />
      <CategoryCarousel />
    </div> 
  );
}

export default App;
