import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";

import Header from "./components/Header/Header.jsx";
import Category from "./components/categoryNav/Category.jsx";
import BannerOne from "./components/PromotionalStrip/BannerOne.jsx";
import BannerTwo from "./components/PromotionalStrip/BannerTwo.jsx";
import SpecializedStores from "./components/SpecializedStores/SpecializedStores.jsx";
import Upibanner from "./components/SpecializedStores/Upibanner.jsx";
import Footer from "./components/footer/Footer.jsx";

function Layout({ children }) {
  return (
    <>
      <Header />
      <Category />
      {children}
      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <BannerOne />
            <BannerTwo />
            <SpecializedStores />
            <Upibanner />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;


