import image from "../assets/gp.png";
import "./ExpertTalkSection.css"; // CSS for styling
import "aos/dist/aos.css"; // AOS CSS
import AOS from "aos";
import { useEffect } from "react";

const ExpertTalkSection = () => {
  // Initialize AOS when the component is mounted
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS with desired animation duration
  }, []);

  // Button click handler function
  const handleButtonClick = () => {
    alert("Button clicked! Redirecting to expert talk page...");
    // Add your desired logic here, like routing or an API call
  };

  return (
    <div className="expert-talk-container">
      <div className="expert-talk-content" data-aos="fade-up">
        <h2>
          Talk One-On-One With Our Training Experts And <br />
          <span>Give Your Employee Super Powers On Day 1</span>
        </h2>
        <p>
          During This Call, Our Experts Will Be Able To Solve All Your Concerns
          And Guide You On What Options Are Best-Fit For Your Organization
        </p>
        <button
          className="talk-expert-button"
          onClick={handleButtonClick}
          data-aos="zoom-in" // Animation for the button
        >
          Talk to an expert
        </button>
      </div>

      <div className="expert-talk-image" data-aos="fade-left">
        <img src={image} alt="Experts" />
      </div>
    </div>
  );
};

export default ExpertTalkSection;
