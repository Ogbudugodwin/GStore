import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [isRegister, setIsRegister] = useState(false);
  const [formData, setFormData] = useState({ username: "", password: "", email: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Fake API call to simulate login/register
      // Note: fakestoreapi doesn't actually store new users permanently
      const url = isRegister ? "https://fakestoreapi.com/users" : "https://fakestoreapi.com/auth/login";
      const method = isRegister ? "POST" : "POST";
      const body = isRegister ? formData : { username: formData.username, password: formData.password };

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Success:", data);
        localStorage.setItem("adminToken", data.token || "fake-token");
        navigate("/admin/dashboard");
      } else {
        alert("Invalid credentials / Error occurred");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-login-wrapper" style={{ minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#f1f5f9" }}>
      <div style={{ background: "white", padding: "40px", borderRadius: "15px", boxShadow: "0 10px 25px rgba(0,0,0,0.1)", width: "100%", maxWidth: "400px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "30px", color: "#1e3a66" }}>Admin {isRegister ? "Registration" : "Login"}</h2>
        
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "20px" }}>
            <label>Username</label>
            <input 
              required
              fullWidth
              style={{ width: "100%", padding: "12px", marginTop: "8px", borderRadius: "8px", border: "1px solid #ddd" }}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            />
          </div>

          {isRegister && (
             <div style={{ marginBottom: "20px" }}>
                <label>Email</label>
                <input 
                  required
                  type="email"
                  style={{ width: "100%", padding: "12px", marginTop: "8px", borderRadius: "8px", border: "1px solid #ddd" }}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
          )}

          <div style={{ marginBottom: "30px" }}>
            <label>Password</label>
            <input 
              required
              type="password"
              style={{ width: "100%", padding: "12px", marginTop: "8px", borderRadius: "8px", border: "1px solid #ddd" }}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
          </div>

          <button 
            disabled={loading}
            type="submit" 
            style={{ width: "100%", padding: "15px", background: "#1e3a66", color: "white", border: "none", borderRadius: "8px", fontWeight: "700", cursor: "pointer" }}
          >
            {loading ? "Processing..." : (isRegister ? "Register" : "Login")}
          </button>
        </form>

        <p style={{ textAlign: "center", marginTop: "20px", fontSize: "14px" }}>
          {isRegister ? "Already have an account?" : "Don't have an account?"}
          <span 
            onClick={() => setIsRegister(!isRegister)} 
            style={{ color: "#2b6cb0", marginLeft: "5px", cursor: "pointer", fontWeight: "600" }}
          >
            {isRegister ? "Login here" : "Register here"}
          </span>
        </p>
      </div>
    </div>
  );
}
