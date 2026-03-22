import React from "react";
import "../component/CSS/contact.css";

const Contact = () => {
    const [submitted, setSubmitted] = React.useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="contact-page">
            {/* Contact Hero */}
            <div className="hero-bg">
                <img
                    src="/assets/contact_hero.png"
                    alt="Contact Us"
                    className="hero-img"
                />
                <div className="hero-content">
                    <h1 style={{ fontSize: "56px", fontWeight: "900", letterSpacing: "2px", textShadow: "0 4px 10px rgba(0,0,0,0.3)" }}>GET IN TOUCH</h1>
                    <p style={{ fontSize: "20px", marginTop: "10px", color: "#facc15", fontWeight: "600" }}>Solutions for your tech & Fashion lifestyle 24/7</p>
                </div>
            </div>

            <div className="contact-container">
                <div className="contact-grid">
                    {/* Contact Info */}
                    <div className="info-sidebar">
                        <h2 style={{ marginBottom: "40px", color: "#facc15", fontSize: "32px", fontWeight: "800" }}>Say Hello! 👋</h2>
                        <div style={{ display: "flex", flexDirection: "column", gap: "35px" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                                <span style={{ fontSize: "30px", background: "rgba(255,255,255,0.1)", padding: "12px", borderRadius: "15px" }}>📞</span>
                                <div>
                                    <p style={{ color: "#94a3b8", fontSize: "14px", fontWeight: "600" }}>Phone Number</p>
                                    <p style={{ fontWeight: "700", fontSize: "18px" }}>+234 7077065057</p>
                                </div>
                            </div>
                            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                                <span style={{ fontSize: "30px", background: "rgba(255,255,255,0.1)", padding: "12px", borderRadius: "15px" }}>✉️</span>
                                <div>
                                    <p style={{ color: "#94a3b8", fontSize: "14px", fontWeight: "600" }}>Support Email</p>
                                    <p style={{ fontWeight: "700", fontSize: "18px" }}>support@gstore.com</p>
                                </div>
                            </div>
                            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                                <span style={{ fontSize: "30px", background: "rgba(255,255,255,0.1)", padding: "12px", borderRadius: "15px" }}>📍</span>
                                <div>
                                    <p style={{ color: "#94a3b8", fontSize: "14px", fontWeight: "600" }}>Our HQ</p>
                                    <p style={{ fontWeight: "700", fontSize: "18px" }}>No. 46 Ojodu Berger, Lagos State</p>
                                </div>
                            </div>
                        </div>

                        <div style={{ marginTop: "70px" }}>
                            <h3 style={{ marginBottom: "20px", fontSize: "18px", fontWeight: "600" }}>Connect With Us</h3>
                            <div style={{ display: "flex", gap: "15px" }}>
                                <a href="#" className="social-icon-btn">
                                    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                                        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" />
                                    </svg>
                                </a>
                                <a href="#" className="social-icon-btn">
                                    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                                    </svg>
                                </a>
                                <a href="#" className="social-icon-btn">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Message Form Area */}
                    <div className="form-area">
                        {submitted ? (
                            <div style={{ textAlign: "center", padding: "100px 20px", animation: "fadeIn 0.6s ease" }}>
                                <h2 style={{ fontSize: "54px", color: "green", marginBottom: "25px" }}>Message Sent! 🚀</h2>
                                <p style={{ fontSize: "20px", color: "#475569", lineHeight: "1.6" }}>Thank you for reaching out. A human technician will get back to you within 24 hours.</p>
                                <button onClick={() => setSubmitted(false)} style={{ marginTop: "40px", background: "#1e3a66", color: "white", border: "none", padding: "15px 35px", borderRadius: "12px", cursor: "pointer", fontWeight: "700", boxShadow: "0 10px 20px rgba(30,58,102,0.1)" }}>Send Another Message</button>
                            </div>
                        ) : (
                            <>
                                <h2 style={{ fontSize: "36px", marginBottom: "40px", color: "#1e3a66", fontWeight: "900" }}>Send Us A Message</h2>
                                <form onSubmit={handleSubmit} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "25px" }} className="contact-form-grid">
                                    <div style={{ gridColumn: "span 1" }}>
                                        <label style={{ display: "block", marginBottom: "10px", fontWeight: "700", color: "#475569" }}>Your Name</label>
                                        <input required placeholder="Enter full name" className="contact-input" />
                                    </div>
                                    <div style={{ gridColumn: "span 1" }}>
                                        <label style={{ display: "block", marginBottom: "10px", fontWeight: "700", color: "#475569" }}>Your Email</label>
                                        <input required type="email" placeholder="example@gmail.com" className="contact-input" />
                                    </div>
                                    <div style={{ gridColumn: "span 2" }}>
                                        <label style={{ display: "block", marginBottom: "10px", fontWeight: "700", color: "#475569" }}>Subject Case</label>
                                        <input required placeholder="Briefly describe your request" className="contact-input" />
                                    </div>
                                    <div style={{ gridColumn: "span 2" }}>
                                        <label style={{ display: "block", marginBottom: "10px", fontWeight: "700", color: "#475569" }}>Detailed Message</label>
                                        <textarea required rows="7" placeholder="Tell us more about how we can help..." className="contact-input" style={{ resize: "none" }}></textarea>
                                    </div>
                                    <div style={{ gridColumn: "span 2" }}>
                                        <button type="submit" className="send-btn">
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
