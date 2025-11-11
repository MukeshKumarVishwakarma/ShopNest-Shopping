import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section brand">
          <h2>ShopNest</h2>
          <p>Your one-stop destination for electronics, fashion, and more!</p>
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} ShopNest. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
