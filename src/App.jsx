import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./component/header";
import Sidebar from "./component/sidebar";
import Banner from "./component/banner";
import Products from "./component/products";
import FlashDeals from "./component/flashdeals";
import Features from "./component/feature";
import Testimonials from "./component/testimonials";
import Subscribe from "./component/subscribe";
import Footer from "./component/footer";
import CategoryPage from "./pages/categoryPage";
import ProductDetails from "./pages/productDetails";
import CartPage from "./pages/cartpage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CheckoutPage from "./pages/CheckoutPage";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import "./component/CSS/style.css";




function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <div className="main-layout">
              <Sidebar />
              <div className="content">
                <Banner />
              </div>
            </div>
            <div className="content1">
              <Products />
              <FlashDeals />
              <Features />
              <Testimonials />
              <Subscribe />
            </div>
          </>
        } />
        <Route path="/category/:categoryName" element={<CategoryPage />} />
        <Route path="/product/:productSlug" element={<ProductDetails />} />

        <Route path="/cart" element={<CartPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>


      <Footer />
    </div>
  );
}

export default App;