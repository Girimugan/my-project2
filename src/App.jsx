import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header.jsx";
import Category from "./components/CategoryNav/Category.jsx";
import BannerOne from "./components/PromotionalStrip/BannerOne.jsx";
import BannerTwo from "./components/PromotionalStrip/BannerTwo.jsx";
import CategoryCarousel from "./components/special stores/CategoryCarousel.jsx";
import Routeone from "./components/routeing files/Routeone.jsx";

import "./App.css";

function App() {
  return (
    <div>
      <Header /> 
      <Category />
      <BannerOne />
      <BannerTwo />
      <CategoryCarousel />
      <Routeone />
      
    </div> 
    
  );
}

export default App;
