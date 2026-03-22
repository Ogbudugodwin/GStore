import React, { useState } from "react";

export default function Subscribe() {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (
    <div className="subscribe">
      <h3>Subscribe & Get 10% Off</h3>
      <p>Join our newsletter and stay updated on the latest gadgets and exclusive deals!</p>
      
      {subscribed ? (
        <div style={{ marginTop: "20px", background: "rgba(255,255,255,0.2)", padding: "15px", borderRadius: "10px", fontWeight: "700" }}>
          🎉 You're on the list! Check your email for your 10% discount code.
        </div>
      ) : (
        <form className="subscribe-form" onSubmit={handleSubscribe}>
          <input required type="email" placeholder="Enter your email address..." />
          <button type="submit">Subscribe Now</button>
        </form>
      )}
    </div>
  );
}