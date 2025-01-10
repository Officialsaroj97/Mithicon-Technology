import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./FeatureSection.css";

const features = [
  {
    icon: "✔",
    title: "Trained Employee In 12hr",
    description:
      "Get Your New Employees Trained In 12hr Rather Than 30-60 Days Without Having To Trouble Yourself",
  },
  {
    icon: "✔",
    title: "No Resource Investment",
    description:
      "No Senior Has To Put In Time And Efforts In Training Which Leads To Savings",
  },
  {
    icon: "✔",
    title: "Quality Test Of Employees",
    description:
      "Specially Designed Tests To Check If The Trainee Is Ready To Contribute.",
  },
  {
    icon: "✔",
    title: "Automated Trainings",
    description:
      "No Need For Constant Check, Enroll Once And Directly Reap The Benefits.",
  },
];

const FeatureSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  return (
    <div className="feature-section">
      <div className="features">
        {features.map((feature, index) => (
          <div
            key={index}
            className="feature-card"
            data-aos="fade-up" // Add AOS animation here
            data-aos-delay={index * 200} // Slight delay for each card to make the effect sequential
          >
            <div className="icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
      <div className="cta-button1" data-aos="fade-up" data-aos-delay="1000">
        <button>Yes, I want to be stress-free</button>
      </div>
    </div>
  );
};

export default FeatureSection;
