// components/Products.jsx
import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/cartcontext";
import { WishlistContext } from "../context/WishlistContext";
import { slugify } from "../utils/slugify";

function Products() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);
  const { addToWishlist } = useContext(WishlistContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://sandbox.mockerito.com/ecommerce/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.slice(9, 17)));
  }, []);

  return (
    <div className="products">
      <div className="flash-header">
        <h3>Top Products</h3>
      </div>

      <div className="product-grid1">
        {products.map((p) => (
          <Link key={p.id} to={`/product/${slugify(p.title)}`} style={{ textDecoration: "none", color: "inherit" }}>

            <div className="card">
              <img src={p.image} alt={p.name} />
              <h4>{p.title}</h4>
              <p>₦{p.price}</p>
              <button onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                addToCart(p);
              }}>

                Add to Cart
              </button>
            </div>
          </Link>
        ))}
      </div>

      <div className="view-all-container">
        <span
          className="view-all-link"
          onClick={() => navigate("/category/all")}
        >
          View All →
        </span>
      </div>
    </div>
  );
}


export default Products;