import { useEffect } from "react";
import "./ComInfo.css"; // Renaming the CSS file as well
import AOS from "aos"; // Importing AOS for animations
import "aos/dist/aos.css"; // AOS CSS

const ComInfo = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <section className="cominfo-section">
      <div className="cominfo-content">
        <h2 data-aos="fade-up">What is Mithicon?</h2>
        <p data-aos="fade-up">
          Mithicon is a leading provider of Standard Operating Procedures (SOPs)
          for employee training and business process optimization. We aim to
          simplify and streamline your training programs, enabling companies to
          ensure consistency, productivity, and efficient workforce integration.
        </p>

        <div className="cominfo-details" data-aos="fade-up">
          <h3>Our Mission</h3>
          <p>
            Our mission is to provide businesses with customized and effective
            SOPs that enhance employee performance and promote continuous
            learning. With Mithicon, organizations can scale quickly while
            maintaining operational excellence.
          </p>
        </div>

        <div className="interactive-content" data-aos="zoom-in">
          <h3>Interactive Overview</h3>
          <div className="sop-demo">
            <iframe
              src="https://www.youtube.com/embed/YourDemoVideoLink" // Replace with your video
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="SOP Training Demo"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComInfo;
