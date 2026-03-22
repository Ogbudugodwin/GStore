// components/Banner.jsx
import React, { useEffect, useState } from "react";
import banner1 from "../assets/images/image1.png";
import banner2 from "../assets/images/ffaf.jpg";
import banner3 from "../assets/images/image.png";


const slides = [
  {
    id: 1,
    image: banner1,
    // title: "Latest Tech & Gadgets",
    // subtitle: "BIG SALE",
    // desc: "Up to 50% Off",
  },
  {
    id: 2,
    image: banner2,
    // title: "New Arrivals",
    // subtitle: "HOT DEALS",
    // desc: "Save Big Today",
  },
  {
    id: 3,
    image: banner3,
    // title: "Smart Devices",
    // subtitle: "LIMITED OFFER",
    // desc: "Best Prices Guaranteed",
  },
];

export default function Banner() {
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="banner-slider">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`slide ${index === current ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
        </div>
      ))}

      {/* Arrows */}
      {/* <button className="arrow left" onClick={prevSlide}>
        ❮
      </button>
      <button className="arrow right" onClick={nextSlide}>
        ❯
      </button> */}

      {/* Dots */}
      <div className="dots">
        {slides.map((_, i) => (
          <span
            key={i}
            className={i === current ? "dot active" : "dot"}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </div>
  );
}