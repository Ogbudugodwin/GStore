// pages/CartPage.jsx
import React, { useContext } from "react";
import { CartContext } from "../context/cartcontext";
import { useNavigate } from "react-router-dom";
import "../component/CSS/cartpage.css";

function CartPage() {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2);

  return (
    <div className="cart-page">
      <h2>Shopping Cart</h2>
      
      {cart.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty</p>
          <button onClick={() => navigate("/")} className="empty-cart-btn">
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
          <table className="cart-table">
            <thead>
              <tr className="cart-header-row">
                <th className="cart-header-cell">Product</th>
                <th className="cart-header-cell center">Price</th>
                <th className="cart-header-cell center">Quantity</th>
                <th className="cart-header-cell center">Subtotal</th>
                <th className="cart-header-cell center">Action</th>
                <th className="cart-header-cell center">Image</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id} className="cart-row">
                  <td className="cart-cell" data-label="Product">{item.title}</td>
                  <td className="cart-cell center" data-label="Price">₦{item.price}</td>
                  <td className="cart-cell center" data-label="Quantity">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="quantity-btn minus-btn"
                    >
                      -
                    </button>
                    <span className="quantity-value">{item.quantity}</span>
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="quantity-btn plus-btn"
                    >
                      +
                    </button>
                  </td>
                  <td className="cart-cell center" data-label="Subtotal">₦{(item.price * item.quantity).toFixed(2)}</td>
                  <td className="cart-cell center" data-label="Action">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="delete-btn"
                    >
                      Delete
                    </button>
                  </td>
                  <td className="cart-cell center" data-label="Image">
                    <img src={item.image} alt={item.title} className="cart-img" />
                  </td>
                </tr>

              ))}
            </tbody>
          </table>

          <div className="cart-total">
            Total: ₦{totalPrice}
          </div>

          <div className="cart-actions">
            <button 
              onClick={() => navigate("/")} 
              className="cart-actions-btn continue-shopping-btn"
            >
              Continue Shopping
            </button>
            <button 
              className="cart-actions-btn checkout-btn"
              onClick={() => navigate("/checkout")}
            >
              Checkout
            </button>

          </div>
        </>
      )}
    </div>
  );
}

export default CartPage;

