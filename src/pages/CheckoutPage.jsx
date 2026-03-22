import React, { useContext, useState } from "react";
import { CartContext } from "../context/cartcontext";
import { useNavigate } from "react-router-dom";
import "../component/CSS/checkout.css";

export default function CheckoutPage() {
  const { cart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [isOrdered, setIsOrdered] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("card");

  const totalPrice = cart.reduce((acc, item) => acc + (item.price * (item.quantity || 1)), 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsOrdered(true);
    setTimeout(() => {
      clearCart();
      navigate("/");
    }, 5000);
  };

  if (isOrdered) {
    return (
      <div className="status-page" style={{ padding: "100px 20px", textAlign: "center" }}>
        <h1 style={{ color: "green", fontSize: "48px" }}>🚀 Order Placed!</h1>
        <p style={{ fontSize: "20px", margin: "20px 0" }}>
           {paymentMethod === "pod" ? "Please prepare your cash/card for home delivery." : "Your transaction is being processed."}
        </p>
        <p>Redirecting to home page in 5 seconds...</p>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      
      <div className="checkout-container">
        {/* Checkout Form */}
        <div className="checkout-form-section">
          <form onSubmit={handleSubmit}>
            <div className="checkout-card">
              <h3>Shipping Information</h3>
              <div className="shipping-grid">
                <input placeholder="First Name" required className="checkout-input" style={{marginTop: "0"}} />
                <input placeholder="Last Name" required className="checkout-input" style={{marginTop: "0"}} />
              </div>
              <input placeholder="Phone Number" required className="checkout-input" />
              <input placeholder="Email Address" required type="email" className="checkout-input" />
              <input placeholder="Street Address" required className="checkout-input" />
            </div>

            <div className="checkout-card">
              <h3>Payment Method</h3>
              <div className="payment-methods">
                <label className="payment-method-label">
                  <input type="radio" value="card" checked={paymentMethod === "card"} onChange={(e) => setPaymentMethod(e.target.value)} />
                  Debit/Credit Card
                </label>
                <label className="payment-method-label">
                  <input type="radio" value="transfer" checked={paymentMethod === "transfer"} onChange={(e) => setPaymentMethod(e.target.value)} />
                  Bank Transfer
                </label>
                <label className="payment-method-label">
                  <input type="radio" value="pod" checked={paymentMethod === "pod"} onChange={(e) => setPaymentMethod(e.target.value)} />
                  Pay on Delivery
                </label>
              </div>

              {paymentMethod === "card" && (
                <div style={{ animation: "fadeIn 0.3s ease" }}>
                  <input placeholder="Card Number" required className="checkout-input" style={{marginTop: "0"}} />
                  <div className="shipping-grid">
                    <input placeholder="MM/YY" required className="checkout-input" style={{marginTop: "0"}} />
                    <input placeholder="CVV" required className="checkout-input" style={{marginTop: "0"}} />
                  </div>
                </div>
              )}

              {paymentMethod === "transfer" && (
                <div style={{ padding: "15px", background: "#f1f5f9", borderRadius: "10px", border: "1px dashed #1e3a66" }}>
                  <p><strong>Account Name:</strong> GStore Tech Ltd</p>
                  <p><strong>Bank:</strong> Zenith Bank</p>
                  <p><strong>Account Number:</strong> 1234567890</p>
                  <p style={{ fontSize: "12px", marginTop: "5px", color: "#64748b" }}>Please use your name as the transfer description.</p>
                </div>
              )}

              {paymentMethod === "pod" && (
                <div style={{ padding: "15px", background: "#fffbeb", borderRadius: "10px", border: "1px dashed #d97706" }}>
                  <p>You can pay via cash or POS when your order arrives at your doorstep.</p>
                </div>
              )}
            </div>

            <button type="submit" className="confirm-btn">
              Confirm Order - ₦{totalPrice.toFixed(2)}
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="order-summary-section">
          <h3>Order Summary</h3>
          <div style={{ marginTop: "20px" }}>
            {cart.map(item => (
              <div key={item.id} style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px" }}>
                <span style={{flex: "1", paddingRight: "10px"}}>{item.title.substring(0, 30)}... (x{item.quantity || 1})</span>
                <span style={{fontWeight: "700"}}>₦{(item.price * (item.quantity || 1)).toFixed(2)}</span>
              </div>
            ))}
            <div style={{ borderTop: "1px solid #e2e8f0", paddingTop: "15px", marginTop: "15px", fontWeight: "800", fontSize: "20px", display: "flex", justifyContent: "space-between" }}>
              <span>Total:</span>
              <span>₦{totalPrice.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
