import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import images from "../assets/mithiconlogo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      {/* Gradient Bar */}
      <div className="gradient-bar">
        <button className="lets-talk-btn">Let&#39;s Talk</button>{" "}
        {/* Styled as a button */}
      </div>

      {/* Footer Content */}
      <div className="footer-content">
        {/* Logo Section */}
        <div className="footer-logo">
          <img src={images} alt="Mithicon Logo" />
        </div>

        {/* Contact Info */}
        <div className="contact-info">
          <p>EMAIL US AT</p>
          <a href="mailto:info@mithicon.com">info@mithicon.com</a>
        </div>

        {/* Footer Links */}
        <div className="footer-links">
          <a href="#about-us">ABOUT US</a>
          <a href="#contact-us">CONTACT US</a>
          <a href="#blogs">BLOGS</a>
          <a href="#privacy-policy">PRIVACY POLICY</a>
          <a href="#terms-of-use">TERMS OF USE</a>
        </div>
      </div>

      {/* Social Icons */}
      <div className="social-icons">
        <a href="#facebook" aria-label="Facebook">
          <FaFacebookF />
        </a>
        <a href="#instagram" aria-label="Instagram">
          <FaInstagram />
        </a>
        <a href="#whatsapp" aria-label="WhatsApp">
          <FaWhatsapp />
        </a>
      </div>

      {/* Copyright Section */}
      <div className="footer-copyright">
        <p>Copyright © 2024 Mithicon Technology</p>
      </div>
    </div>
  );
};

export default Footer;
