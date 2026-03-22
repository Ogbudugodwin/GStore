import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { CartContext } from "../context/cartcontext";
import "../component/CSS/productDetails.css";


import { slugify } from "../utils/slugify";

const ProductDetails = () => {
    const { productSlug } = useParams();
    const { addToCart } = useContext(CartContext);
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        fetch(`https://fakestoreapi.com/products`)
            .then((res) => res.json())
            .then((data) => {
                const foundProduct = data.find(p => slugify(p.title) === productSlug);
                setProduct(foundProduct);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, [productSlug]);

    if (loading) return <div className="loading-container"><h2 className="loading">Checking Product Stock...</h2></div>;
    if (!product) return <div className="loading-container"><h2 className="loading">Product not found.</h2><button onClick={() => navigate("/")} className="btn-buy" style={{marginTop: "20px"}}>Back to Shop</button></div>;


  const handleAddToCart = () => {
      addToCart({ ...product, quantity });
  };


  const handleBuyNow = () => {
    addToCart({ ...product, quantity });
    navigate("/checkout");
  };

  return (
    <div className="product-page-wrapper">
      <div className="product-container">
        {/* Left: Product Image */}
        <div className="product-image-section">
          <img src={product.image} alt={product.title} />
        </div>

        {/* Right: Product Details */}
        <div className="product-info-section">
          <nav className="breadcrumb">Home / {product.category} / {product.title}</nav>
          
          <h1 className="product-title">{product.title}</h1>
          
          <div className="rating-row">
            <span className="stars">
                {"⭐".repeat(Math.round(product.rating?.rate || 0))}
                <span style={{ color: "#ccc" }}>
                    {"⭐".repeat(5 - Math.round(product.rating?.rate || 0))}
                </span>
            </span>
            <span className="rating-text">{product.rating?.rate || 0} / 5</span>
            <span className="reviews-count">({product.rating?.count || 0} Customer Reviews)</span>
          </div>


          <h2 className="product-price">₦{product.price.toFixed(2)}</h2>

          <div className="product-description">
            <h3>Description</h3>
            <p>{product.description}</p>
          </div>

          <div className="purchase-options">
            <div className="quantity-selector">
                <button onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(q => q + 1)}>+</button>
            </div>
          </div>

          <div className="action-buttons">
            <button className="add-to-cart-btn-large" onClick={handleAddToCart}>
              Add to Cart
            </button>
            <button className="buy-now-btn" onClick={handleBuyNow}>
              Buy Now
            </button>
          </div>

          <div className="product-meta">
            <p><strong>Category:</strong> {product.category}</p>
            <p><strong>Availability:</strong> In Stock</p>
          </div>
        </div>
      </div>
    </div>
  );
};




export default ProductDetails;