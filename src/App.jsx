import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header.jsx";
import Category from "./components/categoryNav/Category.jsx";
import BannerOne from "./components/PromotionalStrip/BannerOne.jsx";
import BannerTwo from "./components/PromotionalStrip/BannerTwo.jsx";
import CategoryCarousel from "./components/specialStores/CategoryCarousel.jsx";
import Routeone from "./components/routeingfiles/Routeone.jsx";

import "./App.css";

function Layout({ children }) {
  return (
    <>
      <Header />
      <Category />
      {children}
    </>
  );
}

function App() {
  return (
    <Routes>
  
      <Route path="/" element={
          <Layout>
            <BannerOne />
            <BannerTwo />
            <CategoryCarousel />
          </Layout>
        }
      />

      <Route path="/routeone" element={
        <Layout>
          <Routeone />
        </Layout>
      }
      />
    </Routes>
  );
}

export default App;
