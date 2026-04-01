// components/Banner.jsx
import React, { useEffect, useState } from "react";
import banner1 from "../assets/images/image1.png";
import banner2 from "../assets/images/ffaf.jpg";
import banner3 from "../assets/images/image.png";


const slides = [
  {
    id: 1,
    image: banner1,
   
  },
  {
    id: 2,
    image: banner2,
   
  },
  {
    id: 3,
    image: banner3,

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

  return (
    <div className="banner-slider">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`slide ${index === current ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        />
      ))}

      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === current ? "active" : ""}`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
}