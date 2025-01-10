import "./Navbar.css";
import logo from "../assets/mithiconlogo.png";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Mithicon Logo" />
      </div>
      <ul className="navbar-links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About Us</a>
        </li>
        <li>
          <a href="#use-case">Use Case</a>
        </li>
        <li>
          <a href="#blogs">Blogs</a>
        </li>
        <li>
          <a href="#contact">Contact Us</a>
        </li>
      </ul>
      <Link to="/login">
        <button className="navbar-btn">Login or Register</button>
      </Link>
    </nav>
  );
};

export default NavBar;
