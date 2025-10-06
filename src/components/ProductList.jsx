import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import med1 from "../assets/timedealprod1.jpg";
import med2 from "../assets/timedealprod1.jpg";
import med3 from "../assets/timedealprod1.jpg";
import "./ProductList.css";

function ProductList() {
  const products = [
    { id: 1, name: "Paracetamol 500mg", price: 35, img: med1 },
    { id: 2, name: "Vitamin C Tablets", price: 120, img: med2 },
    { id: 3, name: "Cough Syrup", price: 85, img: med3 },
    { id: 4, name: "Paracetamol 500mg", price: 35, img: med1 },
    { id: 5, name: "Vitamin C Tablets", price: 120, img: med2 },
    { id: 6, name: "Cough Syrup", price: 85, img: med3 },
  ];

  const [timeLeft, setTimeLeft] = useState(13 * 3600 + 55 * 60 + 53);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (secs) => {
    const hours = Math.floor(secs / 3600);
    const minutes = Math.floor((secs % 3600) / 60);
    const seconds = secs % 60;
    return { hours, minutes, seconds };
  };

  const { hours, minutes, seconds } = formatTime(timeLeft);

  return (
    <div className="product-container">
      <div className="header-box">
       <div className="deals-heading"><h2>Limited Time Deals</h2></div> 
        <div className="timer-box">
          <span>Ends in</span>
          <div className="time-values">
            <span className="time">{hours}h</span>
            <span className="time">{minutes}m</span>
            <span className="time">{seconds}s</span>
          </div>
        </div>
      </div>

      {/* Horizontal Product Carousel */}
      <div className="product-list">
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={20}
          slidesPerView={"auto"}
          loop={true}
        >
          {products.map((item) => (
            <SwiperSlide
              key={item.id}
              style={{ width: "250px" }} // fixed width for horizontal scroll
            >
              <ProductCard
                name={item.name}
                price={item.price}
                img={item.img}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default ProductList;



