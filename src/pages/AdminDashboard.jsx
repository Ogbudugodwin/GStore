import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../component/CSS/admin.css";

export default function AdminDashboard() {
  const [formData, setFormData] = useState({ title: "", price: "", description: "", category: "", image: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://fakestoreapi.com/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ title: "", price: "", description: "", category: "", image: "" });
        setTimeout(() => setSuccess(false), 3000);
      } else {
        alert("Error adding product");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-dashboard-wrapper">
      <div className="dashboard-header">
        <h1 style={{color: "#1e3a66", fontSize: "32px", fontWeight: "900"}}>Admin Dashboard</h1>
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      </div>

      <div className="admin-card">
        <h2 style={{ fontSize: "22px", marginBottom: "25px", color: "#1e3a66", fontWeight: "700" }}>Add New Product</h2>
        
        {success && <div style={{ background: "#dcfce7", color: "#166534", padding: "18px", borderRadius: "10px", marginBottom: "25px", fontWeight: "700", border: "1px solid #bbf7d0", animation: "fadeIn 0.3s ease" }}>🚀 Product successfully created!</div>}

        <form onSubmit={handleSubmit} className="admin-form-grid">
          <div className="admin-input-group">
            <label>Product Title</label>
            <input 
              required
              className="admin-input"
              placeholder="e.g. Premium Wireless Headphones"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            />
          </div>

          <div className="admin-input-group">
            <label>Price (₦)</label>
            <input 
              required
              type="number"
              step="0.01"
              className="admin-input"
              placeholder="0.00"
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: e.target.value })}
            />
          </div>

          <div className="admin-input-group" style={{ gridColumn: "span 2" }}>
            <label>Description</label>
            <textarea 
              required
              rows="5"
              className="admin-input"
              placeholder="Describe the product features and quality..."
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              style={{resize: "none"}}
            />
          </div>

          <div className="admin-input-group">
            <label>Category</label>
            <select 
              required
              className="admin-input"
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              style={{appearance: "none", background: "white"}}
            >
                <option value="">Select Category</option>
                <option value="electronics">Electronics</option>
                <option value="jewelery">Jewelery</option>
                <option value="men's clothing">Men's Clothing</option>
                <option value="women's clothing">Women's Clothing</option>
            </select>
          </div>

          <div className="admin-input-group">
            <label>Image URL</label>
            <input 
              required
              type="url"
              className="admin-input"
              placeholder="https://images.unsplash.com/..."
              value={formData.image}
              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
            />
          </div>

          <div style={{ gridColumn: "span 2", marginTop: "20px" }}>
             <button 
                disabled={loading}
                type="submit" 
                className="admin-submit-btn"
              >
                {loading ? "Creating Product..." : "Create Product"}
              </button>
          </div>
        </form>
      </div>
    </div>
  );
}
