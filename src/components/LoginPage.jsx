import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup, login } from "../services/authService"; // API functions import karein
import "./LoginPage.css";

const LoginPage = () => {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState("");

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    setMessage("");
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSignUp) {
      if (formData.password !== formData.confirmPassword) {
        setMessage("Passwords do not match!");
        return;
      }
      try {
        await signup(formData.name, formData.email, formData.password);
        setMessage("Sign Up Successful! Please Sign In.");
        setIsSignUp(false);
      } catch (error) {
        setMessage(error);
      }
    } else {
      try {
        await login(formData.email, formData.password);
        setMessage("Login Successful!");
        setTimeout(() => {
          navigate("/videos"); // Redirect after login
        }, 1000);
      } catch (error) {
        setMessage(error);
      }
    }

    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="login-container">
      <div className="form-container">
        {message && <div className="success-message">{message}</div>}

        {isSignUp ? (
          <div className="signup-form">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group password-container">
                <label htmlFor="password">Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <span
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "👁️‍🗨️" : "👁️"}
                </span>
              </div>
              <div className="form-group password-container">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
                <span
                  className="password-toggle"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? "👁️‍🗨️" : "👁️"}
                </span>
              </div>
              <button type="submit" className="form-button">
                Sign Up
              </button>
            </form>
            <p>
              Already have an account?{" "}
              <button className="toggle-button" onClick={toggleForm}>
                Sign In
              </button>
            </p>
          </div>
        ) : (
          <div className="signin-form">
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group password-container">
                <label htmlFor="password">Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <span
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "👁️‍🗨️" : "👁️"}
                </span>
              </div>
              <button type="submit" className="form-button">
                Sign In
              </button>
            </form>
            <p>
              Don&apos;t have an account?{" "}
              <button className="toggle-button" onClick={toggleForm}>
                Sign Up
              </button>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
