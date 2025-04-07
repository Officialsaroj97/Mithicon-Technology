import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import images from "../assets/mithiconlogo.png";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      {/* Gradient Bar */}
      <div className="gradient-bar">
        <button className="lets-talk-btn">Let&#39;s Talk</button>
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
          <a href="mailto:support@mithicon.com">support@mithicon.com</a>
        </div>

        {/* Footer Links */}
        <div className="footer-links">
          <Link to="/about">ABOUT US</Link>
          <Link to="/contact">CONTACT US</Link>
          <Link to="/blog">BLOGS</Link>
          <Link to="/privacy-policy">PRIVACY POLICY</Link>
          <Link to="/terms-of-use">TERMS OF USE</Link> {/* Updated Link */}
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
        <a href="#youtube" aria-label="YouTube">
          <FaYoutube />
        </a>
        <a
          href="https://www.linkedin.com/company/mithi-consultancy-services/"
          aria-label="LinkedIn"
        >
          <FaLinkedinIn />
        </a>
      </div>

      {/* Copyright Section */}
      <div className="footer-copyright">
        <p>Copyright © 2024 Mithicon Technology Pvt. Ltd.</p>

        {/* Powered By Section */}
        <div className="powered-by">
          <p>
            Powered By - <span>Mithi Consultancy Services</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
