import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./ContactPage.css";

const ContactPage = () => {
  useEffect(() => {
    AOS.init();
    return () => AOS.refresh(); // Refresh AOS on component updates
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      alert("Form submitted successfully!");
      setFormData({ name: "", email: "", phone: "", company: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="contact-page">
      <div className="contact-left" data-aos="fade-right">
        <h2>
          You need a partner. <span>We&apos;re here to help.</span>
        </h2>
        <p>
          We are the only company providing these services to make your life and
          business easier. Automate your business effortlessly with us.
        </p>
        <p>Join the global innovators:</p>
        <div className="clients" data-aos="fade-up">
          {["logo1.png", "logo2.png", "logo3.png", "logo4.png"].map(
            (logo, index) => (
              <img key={index} src={logo} alt={`Client Logo ${index + 1}`} />
            )
          )}
        </div>
      </div>

      <div className="contact-right" data-aos="fade-left">
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Your Name*</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
            aria-label="Your Name"
          />

          <label htmlFor="email">Email*</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
            aria-label="Your Email"
          />

          <label htmlFor="phone">Phone No.*</label>
          <input
            type="tel"
            id="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
            required
            aria-label="Your Phone Number"
          />

          <label htmlFor="company">Your Company Name*</label>
          <input
            type="text"
            id="company"
            placeholder="Enter your company name"
            value={formData.company}
            onChange={handleChange}
            required
            aria-label="Your Company Name"
          />

          {/* Submit Button - Always Fixed at One Place */}
          <div className="submit-button-container">
            <button type="submit" className="submit-btn-1">
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
