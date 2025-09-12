
import React from "react";
import { FaBars, FaPills, FaFlask, FaSpa, FaHeartbeat, FaBookMedical, FaGift } from "react-icons/fa";
import "./Category.css";

function Category() {
  const categories = [
    { icon: <FaBars />, label: "All Categories"  },
    { icon: <FaPills />, label: "Medicine" },
    { icon: <FaFlask />, label: "Lab Tests" },
    { icon: <FaSpa />, label: "Beauty" },
    { icon: <FaHeartbeat />, label: "Wellness" },
    { icon: <FaBookMedical />, label: "Health Corner" },
    { icon: <FaGift />, label: "Offers" },
  ];

  return (
    <div className="category-bar">
      {categories.map((cat, index) => (
        <div key={index} className="category-item">
          {cat.icon}
          <span>{cat.label}</span>
        </div>
      ))}
    </div>
  );
}

export default Category;

