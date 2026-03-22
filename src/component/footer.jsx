import React, { useState } from "react";

import { Link } from "react-router-dom";

export default function Footer() {
  const [miniSubscribed, setMiniSubscribed] = useState(false);

  const handleMiniSubscribe = (e) => {
    e.preventDefault();
    setMiniSubscribed(true);
  };

  return (

    <footer className="footer-redesign">
      <div className="footer-content">
        {/* Brand & Stats */}
        <div className="footer-brand">
          <h2 className="logo"><span className="logo-g">G</span>Store</h2>
          <p className="footer-address">
            📍 No. 46 Ojodu Berger,<br />
            Lagos State, Nigeria
          </p>
          <div className="social-links-row">
            <a href="#" className="social-icon" title="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z" />
              </svg>
            </a>
            <a href="#" className="social-icon" title="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01" />
              </svg>
            </a>
            <a href="#" className="social-icon" title="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a href="#" className="social-icon" title="TikTok">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M9 12a4 4 0 104 4V2h4a1 1 0 00.9-.6l.1-.4a10 10 0 014.2 8 .2.2 0 01-.1.2H18a1 1 0 00-1 1v1a1 1 0 001 1h4.2a1 1 0 001-.8A12 12 0 0017.5 2h-4.5a1 1 0 00-1 1v11a2 2 0 11-2-2H9v-2h1a4 4 0 00-1-8H9a1 1 0 00-1 1v11a6 6 0 106-6V9a6 6 0 01-5-5V2H9a1 1 0 00-1 1v9z" />
                <path d="M9 8h2v2H9z" opacity="0" />
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L10 17a6.5 6.5 0 007.8-1 6.3 6.3 0 001.2-4.5z" />
              </svg>
            </a>
          </div>

        </div>

        {/* Categories / Quick Links */}
        <div className="footer-col">
          <h4>Shop By Category</h4>
          <ul>
            <li><Link to="/category/electronics">Electronics</Link></li>
            <li><Link to="/category/mens-clothing">Men's Fashion</Link></li>
            <li><Link to="/category/womens-clothing">Women's Fashion</Link></li>
            <li><Link to="/category/smartwatches">Smart Home</Link></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div className="footer-col">
          <h4>Support Center</h4>
          <ul>
            <li><Link to="/contact">Track My Order</Link></li>
            <li><Link to="/about">Our Story</Link></li>
            <li><Link to="/about">Careers</Link></li>
            <li><a href="#">Help Center</a></li>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div className="footer-col footer-newsletter">
          <h4>Be The First To Know</h4>
          {miniSubscribed ? (
               <div style={{ background: "#facc15", color: "#1e3a66", padding: "12px", borderRadius: "10px", fontWeight: "700", marginTop: "15px", animation: "fadeIn 0.5s ease" }}>
                   ✨ You're in! Check your inbox.
               </div>
          ) : (
            <>
              <p>Sign up for exclusive offers and tech news!</p>
              <form className="mini-subscribe" onSubmit={handleMiniSubscribe}>
                <input required type="email" placeholder="Your email here" />
                <button type="submit">JOIN</button>
              </form>
            </>
          )}
        </div>

      </div>

      <div className="footer-bottom-bar">
        <p>&copy; 2026 GStore All rights reserved.</p>
      </div>
    </footer>
  );
}