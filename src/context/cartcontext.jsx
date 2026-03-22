// context/CartContext.jsx
import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  // Initialize cart from localStorage if available
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem("cart");
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error("Failed to parse cart from localStorage:", error);
      return [];
    }
  });


  // Persist cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = async (product) => {
    // Check if product already exists in cart
    const existingProduct = cart.find(item => item.id === product.id);
    
    if (existingProduct) {
      // Increase quantity if already in cart
      const updatedCart = cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
      await updateCartAPI(updatedCart);
    } else {
      // Add new product with quantity 1
      const updatedCart = [...cart, { ...product, quantity: 1 }];
      setCart(updatedCart);
      await updateCartAPI(updatedCart);
    }
    showToast(`${product.title.substring(0, 20)}... added to cart!`);
  };


  const increaseQuantity = async (productId) => {
    const updatedCart = cart.map(item =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
    await updateCartAPI(updatedCart);
  };

  const decreaseQuantity = async (productId) => {
    const updatedCart = cart.map(item =>
      item.id === productId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(updatedCart);
    await updateCartAPI(updatedCart);
  };

  const removeFromCart = async (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
    await updateCartAPI(updatedCart);
  };

  const clearCart = async () => {
    setCart([]);
    localStorage.removeItem("cart");
  };


  const updateCartAPI = async (updatedCart) => {
    try {
      // Mock API call (fakestoreapi doesn't actually persist changes)
      await fetch("https://fakestoreapi.com/carts/1", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: 1,
          date: new Date().toISOString(),
          products: updatedCart.map(p => ({ productId: p.id, quantity: p.quantity }))
        }),
      });
    } catch (err) {
      console.log(err);
    }
  };

  const [notification, setNotification] = useState("");

  const showToast = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(""), 3000);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, increaseQuantity, decreaseQuantity, removeFromCart, clearCart, showToast }}>
      {children}
      {notification && (
        <div style={{
          position: "fixed",
          top: "100px",
          left: "50%",

          transform: "translateX(-50%)",
          background: "#1e3a66",
          color: "white",
          padding: "15px 30px",
          borderRadius: "12px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
          zIndex: 9999,
          fontWeight: "600",
          animation: "fadeInDown 0.3s ease-out"
        }}>

          ✨ {notification}
        </div>
      )}
    </CartContext.Provider>
  );
}


