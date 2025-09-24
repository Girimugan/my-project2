import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import "./DealsCarousel.css";

const products = [
  { id: 1, img: "https://via.placeholder.com/150", title: "Product 1", price: 500, discount: "10%" },
  { id: 2, img: "https://via.placeholder.com/150", title: "Product 2", price: 650, discount: "15%" },
  { id: 3, img: "https://via.placeholder.com/150", title: "Product 3", price: 800, discount: "20%" },
  { id: 4, img: "https://via.placeholder.com/150", title: "Product 4", price: 750, discount: "12%" },
  { id: 5, img: "https://via.placeholder.com/150", title: "Product 5", price: 900, discount: "18%" },
  { id: 6, img: "https://via.placeholder.com/150", title: "Product 6", price: 400, discount: "8%" },
  { id: 7, img: "https://via.placeholder.com/150", title: "Product 7", price: 300, discount: "5%" },
  { id: 8, img: "https://via.placeholder.com/150", title: "Product 8", price: 450, discount: "7%" },
  { id: 9, img: "https://via.placeholder.com/150", title: "Product 9", price: 600, discount: "9%" },
  { id: 10, img: "https://via.placeholder.com/150", title: "Product 10", price: 1000, discount: "25%" },
];

function DealsCarousel() {
  const [timeLeft, setTimeLeft] = useState(3600); // 1 hr countdown
  const [cart, setCart] = useState({}); // { productId: qty }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (sec) => {
    const h = Math.floor(sec / 3600);
    const m = Math.floor((sec % 3600) / 60);
    const s = sec % 60;
    return `${h}h : ${m}m : ${s}s`;
  };

  const handleAdd = (id) => {
    setCart((prev) => ({ ...prev, [id]: 1 }));
  };

  const handleIncrease = (id) => {
    setCart((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  };

  const handleDecrease = (id) => {
    setCart((prev) => {
      const currentQty = prev[id];
      if (currentQty === 1) {
        const newCart = { ...prev };
        delete newCart[id]; // remove item if qty = 0
        return newCart;
      }
      return { ...prev, [id]: currentQty - 1 };
    });
  };

  return (
    <div className="deals-container">
      <div className="deals-header">
        <h2>Time Deals</h2>
        <span className="timer">{formatTime(timeLeft)}</span>
      </div>

      <Carousel indicators={false} interval={null} controls={true}>
        {[0, 1].map((groupIndex) => (
          <Carousel.Item key={groupIndex}>
            <div className="products-row">
              {products
                .slice(groupIndex * 5, groupIndex * 5 + 5)
                .map((item) => (
                  <div key={item.id} className="product-card">
                    <img src={item.img} alt={item.title} />
                    <h3>{item.title}</h3>
                    <p className="price">₹{item.price}</p>
                    <p className="discount">{item.discount} Off</p>

                    <div className="actions">
                      {cart[item.id] ? (
                        <div className="qty-controls">
                          <button onClick={() => handleDecrease(item.id)}>-</button>
                          <span>{cart[item.id]}</span>
                          <button onClick={() => handleIncrease(item.id)}>+</button>
                        </div>
                      ) : (
                        <button className="add-btn" onClick={() => handleAdd(item.id)}>
                          Add
                        </button>
                      )}
                    </div>
                  </div>
                ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default DealsCarousel;


