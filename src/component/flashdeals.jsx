// components/FlashDeals.jsx
import React, { useEffect, useRef, useState, useContext } from "react";
import { CartContext } from "../context/cartcontext";
import { useNavigate } from "react-router-dom";
import { slugify } from "../utils/slugify";


export default function FlashDeals() {
  const [deals, setDeals] = useState([]);
  const sliderRef = useRef();
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://sandbox.mockerito.com/ecommerce/api/products")
      .then((res) => res.json())
      .then((data) => {
        // duplicate items for smooth looping
        setDeals([...data, ...data]);
      });
  }, []);

  // AUTO SLIDE
  useEffect(() => {
    const slider = sliderRef.current;

    const autoSlide = setInterval(() => {
      if (!slider) return;

      // if reached end → reset smoothly
      if (slider.scrollLeft >= slider.scrollWidth / 2) {
        slider.scrollTo({ left: 0, behavior: "auto" });
      } else {
        slider.scrollBy({ left: 220, behavior: "smooth" });
      }
    }, 2500);

    return () => clearInterval(autoSlide);
  }, []);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -220, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 220, behavior: "smooth" });
  };

  return (
    <div className="flash">
      <div className="flash-header">
        <h3>Flash Deals</h3>
      </div>

      <div className="slider-container">
        <div className="deal-slider" ref={sliderRef}>
          {deals.map((item, index) => (
            <div 
              className="deal-card" 
              key={index} 
              onClick={() => navigate(`/product/${slugify(item.title)}`)}
              style={{ cursor: "pointer" }}

            >
              <span className="badge">
                {Math.floor(Math.random() * 50) + 10}% OFF
              </span>

              <img src={item.image} alt={item.title} />
              <h4>{item.title}</h4>
              <p>₦{item.price}</p>
              <small>₦{(item.price * 1.5).toFixed(0)}</small>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  addToCart(item);
                }}
                className="add-to-cart-btn"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


