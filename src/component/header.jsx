import React, { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/cartcontext";
import { WishlistContext } from "../context/WishlistContext";

function Header() {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);
  const { cart } = useContext(CartContext);
  const { wishlist } = useContext(WishlistContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/category/all?search=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="header">
      <div className="nav-container">
        <div className="nav-bar">
          <div className="logo" onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
            <span className="logo-g">G</span>Store
          </div>

          {/* Desktop Links */}
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact Us</Link>
            <a href="#">Blog</a>
          </div>

          <div className="header-right">
            <div className="icons">
              <span className="icon">❤️ ({wishlist.length})</span>
              <span className="icon auth" onClick={() => navigate("/admin/login")}>
                Login
              </span>

              <span className="icon cart" onClick={() => navigate("/cart")}>
                🛒 ({cart.length})
              </span>
            </div>
            
            <button className="hamburger" onClick={toggleMenu}>
              {isMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Links */}
        <div className={`mobile-menu ${isMenuOpen ? "active" : ""}`}>
           <Link to="/" onClick={toggleMenu}>Home</Link>
           <Link to="/about" onClick={toggleMenu}>About</Link>
           <Link to="/contact" onClick={toggleMenu}>Contact Us</Link>
           <a href="#" onClick={toggleMenu}>Blog</a>
        </div>

        {/* Search Bar */}
        <div className="search-bar-row">
            <div className="search-container">
                <input 
                    className="search-input" 
                    placeholder="Search products..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                />
                <button className="search-btn" onClick={handleSearch}>🔍</button>
            </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
