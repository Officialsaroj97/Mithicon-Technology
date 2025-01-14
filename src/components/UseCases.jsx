import { useEffect } from "react";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos"; // Import AOS for animations
import "./UseCases.css"; // Import custom styling

const UseCases = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 }); // Initialize AOS with a default animation duration
  }, []);

  return (
    <div className="use-cases">
      <h1 className="use-cases-title" data-aos="fade-down">
        Use Cases
      </h1>
      <div className="use-case-list">
        <div className="use-case-item" data-aos="fade-right">
          <h3>Quick Onboarding for New Employees</h3>
          <p>
            Reduce onboarding time by providing employees with structured,
            step-by-step SOPs and training modules.
          </p>
        </div>

        <div className="use-case-item" data-aos="fade-left">
          <h3>Standardized Training Across Departments</h3>
          <p>
            Ensure all departments are aligned by delivering consistent training
            programs tailored to their needs.
          </p>
        </div>

        <div className="use-case-item" data-aos="fade-right">
          <h3>Compliance Training and Documentation</h3>
          <p>
            Stay compliant with regulations by using our platform to train
            employees on safety, ethics, and company policies.
          </p>
        </div>

        <div className="use-case-item" data-aos="fade-left">
          <h3>Skill Development for Existing Employees</h3>
          <p>
            Upskill your workforce with targeted training modules that help them
            adapt to evolving business needs.
          </p>
        </div>

        <div className="use-case-item" data-aos="fade-right">
          <h3>Remote Training for Distributed Teams</h3>
          <p>
            Empower remote employees with easily accessible video and document
            SOPs for seamless learning anytime, anywhere.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UseCases;
