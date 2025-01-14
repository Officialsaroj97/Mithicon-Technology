import { useEffect } from "react";
import "./ContactPage.css";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactPage = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS when the component is mounted
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload on form submission
    alert("Form submitted successfully!");
  };

  return (
    <div className="contact-page">
      {/* Left Section */}
      <div className="contact-left" data-aos="fade-right">
        <h2>
          You need a partner. <span>We&apos;re here to help.</span>
        </h2>
        <p>
          We are the only company providing these services to make your life and
          business easier. You can automate the business by using our services,
          where you don’t have to do anything.
        </p>
        <p>Join the global innovators:</p>
        <div className="clients" data-aos="fade-up">
          <img src="logo1.png" alt="Raga" />
          <img src="logo2.png" alt="Jaipur Ratna" />
          <img src="logo3.png" alt="Concern" />
          <img src="logo4.png" alt="Ajanta" />
        </div>
      </div>

      {/* Right Section */}
      <div className="contact-right" data-aos="fade-left">
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Your Name*</label>
          <input type="text" id="name" placeholder="Enter your name" required />

          <label htmlFor="email">Email*</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            required
          />

          <label htmlFor="phone">Phone No.*</label>
          <input
            type="tel"
            id="phone"
            placeholder="Enter your phone number"
            required
          />

          <label htmlFor="company">Your Company Name*</label>
          <input
            type="text"
            id="company"
            placeholder="Enter your company name"
            required
          />

          <button type="submit" className="submit-btn" data-aos="zoom-in">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
