import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Routes, Route } from "react-router-dom";

import { CartProvider } from "./context/CartContext";

import Header from "./components/Header/Header.jsx";
import Category from "./components/categoryNav/Category.jsx";
import BannerOne from "./components/PromotionalStrip/BannerOne.jsx";
import BannerTwo from "./components/PromotionalStrip/BannerTwo.jsx";
import CategoryCarousel from "./components/specialStores/CategoryCarousel.jsx";
import Routeone from "./components/routeingfiles/Routeone.jsx";
import ProductList from "./components/ProductList.jsx";
import Footer from "./components/footer/Footer.jsx";
import CartPage from "./components/CartPage.jsx";
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
    <CartProvider>
      
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <BannerOne />
                <BannerTwo />
                <CategoryCarousel />
                <ProductList />
                <Footer />
              </Layout>
            }
          />
          <Route
            path="/routeone"
            element={
              <Layout>
                <Routeone />
              </Layout>
            }
          />
          <Route
            path="/cart"
            element={
              <Layout>
                <CartPage />
              </Layout>
            }
          />
        </Routes>
      
    </CartProvider>
  );
}

export default App;