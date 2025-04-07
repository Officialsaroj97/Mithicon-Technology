import { useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "aos/dist/aos.css";
import AOS from "aos";
import "./AboutUs.css";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className="about-page">
      <div className="hero-section" data-aos="fade-up">
        <div className="overlay">
          <h1 className="title">
            The Innovative And Efficient Solution For{" "}
            <span className="highlight">
              Automated Employee Training & SOP Development
            </span>
          </h1>
          <p className="description">
            We revolutionize employee training by providing top-notch document
            and video SOPs that streamline your business processes. Our
            solutions ensure quick onboarding, minimize training costs, and
            enhance overall productivity.
          </p>

          {/* Contact Us Button with Router Link */}
          <Link to="/contact" className="contact-button" data-aos="zoom-in">
            Contact Us
          </Link>
        </div>
      </div>

      <div className="info-section" data-aos="fade-right">
        <div className="info-content">
          <h2 className="info-title">
            01{" "}
            <span className="highlight">
              Our Video SOP (Standard Operating Procedures) system
            </span>
          </h2>
          <p className="info-description">
            Training your new employees has never been easier. Our innovative
            approach eliminates the guesswork from training, providing clear,
            step-by-step instructions that are easy to follow and implement.
          </p>
        </div>
      </div>

      <div className="vision-section" data-aos="fade-up">
        <div className="vision-content">
          <h2 className="vision-title">
            02 <span className="highlight">Mithicon Vision</span>
          </h2>
          <p className="vision-description">
            Our Vision Is To Eliminate The Global Challenge Of Time-Consuming
            Training Processes For Newly Joined Employees. We Aim To Eradicate
            The Anxiety And Disruption Business Owners Face When A Trained
            Employee Leaves And A New One Joins.
          </p>
        </div>
      </div>

      <div className="strength-section" data-aos="fade-up">
        <div className="strength-content">
          <div className="strength-header">
            <img
              src="./path-to-team-image.jpg"
              alt="Team collaboration"
              className="strength-image"
            />
            <div className="strength-text">
              <h2 className="strength-title">
                Over The Past Decade, We’ve Empowered Our Clients To Streamline
                Their Operations, Saving Time And Resources Through Innovative
                Training Solutions.
              </h2>
              <p className="strength-description">
                At Mithicon Technology Pvt Ltd, We Believe In Creating
                Sustainable, Scalable Systems That Not Only Train Employees But
                Also Drive Business Growth.
              </p>
            </div>
          </div>
          <blockquote className="strength-quote">
            “Mithicon Excels In Resolving The Critical Challenges That
            Businesses Face When Onboarding And Training New Employees.”
          </blockquote>
        </div>
      </div>

      <div className="about-founder-section" data-aos="fade-up">
        <div className="about-founder-content"></div>
        <div className="stats-section">
          <div className="stat" data-aos="fade-right">
            <h3>3,000+</h3>
            <p>Training Modules</p>
          </div>
          <div className="stat" data-aos="fade-right">
            <h3>60+</h3>
            <p>Quality Assurance Specialists</p>
          </div>
          <div className="stat" data-aos="fade-right">
            <h3>4,400+</h3>
            <p>Operations People Trained</p>
          </div>
        </div>
      </div>

      {/* Contact Us Button with Link */}
      <div className="contact-button-container" data-aos="zoom-in">
        <Link to="/contact" className="contact-button">
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;
