import React, { useState } from "react";
import { Link } from "react-router-dom";

const categories = [
  "men's clothing",
  "women's clothing",
  "jewelery",
  "electronics",
  "smartphones",
  "Laptops",
  "Headphones",
  "Smartwatches",
];

const slugify = (text) =>
  text.toLowerCase().replace(/\s+/g, "-");

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-toggle" onClick={() => setIsOpen(!isOpen)}>
        <h3>Categories</h3>
        <span className="toggle-icon">{isOpen ? "▴" : "▾"}</span>
      </div>

      <div className="category-list">
        {categories.map((cat) => (
          <Link key={cat} to={`/category/${slugify(cat)}`} onClick={() => setIsOpen(false)}>
            <div className="category">
              {cat}
            </div>
          </Link>
        ))}
      </div>
    </aside>
  );
}