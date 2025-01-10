import "./MithiconSection.css"; // CSS for styling
import bookImage from "../assets/book.png"; // Importing the image
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

const MithiconSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS with animation duration and only once
  }, []);

  return (
    <div className="mithicon-container">
      {/* Text Section */}
      <div
        className="mithicon-box mithicon-text"
        data-aos="fade-right" // Animation for the text section
      >
        <h2>And here comes Mithicon in action!</h2>
        <p>
          At Mithicon, We Specialize In Creating Comprehensive SOPs And Training
          Solutions That Save Businesses Significant Time And Resources. Our
          Innovative Approach Has Helped Our Clients Streamline Their Operations
          And Achieve Remarkable Efficiency.
        </p>
        <p>
          By Implementing Our Customised SOPs, Companies Have Reported Saving
          Thousands Of Training Hours And Experiencing Huge Financial Growth.
          Our Solutions Are Designed To Integrate Seamlessly Into Your Business
          Processes.
        </p>
      </div>

      {/* Image Section */}
      <div
        className="mithicon-box mithicon-image"
        data-aos="fade-left" // Animation for the image text section
      >
        <h2>Revolutionize your Business with our proven</h2>
        <h1>World’s Fastest Employee Training System</h1>
        <p>Learn from the practices and ideologies of the author himself.</p>
        <div
          className="book-image"
          data-aos="zoom-in" // Zoom in animation for the book image
          data-aos-delay="200" // Delay to smoothen the image animation
        >
          <img
            src={bookImage} // Imported image
            alt="World's Fastest Employee Training System"
          />
        </div>
      </div>
    </div>
  );
};

export default MithiconSection;
