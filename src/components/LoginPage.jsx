import { useState } from "react";
import "./LoginPage.css"; // Optional: Add your CSS styles here

const LoginPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add form validation here

    // Show success message and reset form
    setMessage(isSignUp ? "Sign Up Successful!" : "Sign In Successful!");

    // Clear all input fields
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
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
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
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                />
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
