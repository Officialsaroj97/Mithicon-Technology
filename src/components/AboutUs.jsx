import { useEffect } from "react";
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
            <span className="highlight">Automated Employee Training</span>
          </h1>
          <p className="description">
            We revolutionize employee training by providing top-notch document
            and video SOPs that streamline your business processes. Our
            solutions ensure quick onboarding, minimize training costs, and
            enhance overall productivity.
          </p>
          <button className="contact-button" data-aos="zoom-in">
            Contact Us
          </button>
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
            02 <span className="highlight">Focuskon Vision</span>
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
                At Focuskon, We Believe In Creating Sustainable, Scalable
                Systems That Not Only Train Employees But Also Drive Business
                Growth.
              </p>
            </div>
          </div>
          <blockquote className="strength-quote">
            “Focuskon Excels In Resolving The Critical Challenges That
            Businesses Face When Onboarding And Training New Employees.”
          </blockquote>
        </div>
      </div>

      <div className="about-founder-section" data-aos="fade-up">
        <div className="about-founder-content">
          <img
            src="./path-to-founder-image.jpg"
            alt="Founder"
            className="founder-image-large"
          />
          <div className="founder-description">
            <h2>About our Founder</h2>
            <p>
              Nikhil Bansal, a dynamic entrepreneur, navigated the bustling
              business landscape through NM Mumbai and SP Jain’s Family Managed
              Business Program.
            </p>
          </div>
        </div>
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
    </div>
  );
};

export default AboutUs;
