import React from "react";
import "../component/CSS/about.css";

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <div className="hero-banner">
        <img 
          src="/assets/about_hero.png" 
          alt="GStore Innovation Office" 
        />
        <div className="hero-title">
            <h1>OUR STORY</h1>
            <p style={{fontSize: "20px", color: "#facc15", fontWeight: "600", marginTop: "10px"}}>Bridging The Gap Between People, Fashion & Tech</p>
        </div>
      </div>

      <div className="main-container">
        <div className="about-grid">
            <div className="about-text">
                 <h2>Pioneering The Future of E-Commerce</h2>
                 <p>
                    <strong>GStore</strong> was born out of a simple idea: high-end technology and cutting-edge fashion should be available to everyone, everywhere. 
                    Founded in 2020, we've dedicated ourselves to sourcing the most reliable hardware and the most trendsetting apparel.
                 </p>
                 <p>
                   Our mission is to empower individuals through technology that enhances life, and style that expresses personality. 
                   Today, we serve a global community of tech enthusiasts from our headquarters in Lagos.
                 </p>
            </div>
            
            <div className="values-card">
                <h3 style={{ color: "#1e3a66", fontSize: "28px", marginBottom: "40px", fontWeight: "800" }}>The GStore Way</h3>
                <div className="value-item">
                    <span className="value-number">1</span>
                    Uncompromising Quality Assurance
                </div>
                <div className="value-item">
                    <span className="value-number">2</span>
                    Hyper-Responsive Customer Care
                </div>
                <div className="value-item">
                    <span className="value-number">3</span>
                    Ethical & Transparent Sourcing
                </div>
                <div className="value-item">
                    <span className="value-number">4</span>
                    Global Logistical Excellence
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
