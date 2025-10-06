import React from "react";
import Carousel from "../components/Carousel";
import Category from "../components/Category";
import OfferSection from "../components/OfferSection";
import ProductList from "../components/ProductList";

function HomePage() {
  return (
    <div>
      {/* Carousel / Slider */}
      <Carousel />

      {/* Categories */}
      <Category />

      {/* Offers / Deals Section */}
      <OfferSection />

      {/* Products List */}
      <ProductList />
    </div>
  );
}

export default HomePage;
