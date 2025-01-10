import "./WhyTrainingSection.css"; // Assuming we create a CSS file for this component
import "aos/dist/aos.css"; // AOS CSS import
import AOS from "aos"; // AOS import
import { useEffect, useState } from "react";

const WhyTrainingSection = () => {
  // Initializing state for the statistics data
  const [statsData, setStatsData] = useState({
    stat1: 74,
    stat2: 59,
    stat3: 87,
  });

  // Initialize AOS when the component is mounted
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // AOS with duration and once trigger
  }, []);

  // Simulate fetching new related data every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      // Update stats directly without the need for 'prevData'
      setStatsData({
        stat1: Math.floor(Math.random() * (80 - 70 + 1) + 70), // Simulated new stat value for stat1
        stat2: Math.floor(Math.random() * (65 - 55 + 1) + 55), // Simulated new stat value for stat2
        stat3: Math.floor(Math.random() * (95 - 85 + 1) + 85), // Simulated new stat value for stat3
      });
    }, 5000); // Data updates every 5 seconds (you can change the time here)

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  return (
    <div className="why-training-section">
      <h2 data-aos="fade-up">
        Know More From The Industry Experts: Revolutionize Your Employee
        Training Process
      </h2>

      <div className="training-stats-container" data-aos="fade-up">
        <div className="stat-box" data-aos="zoom-in">
          <h3>Why is the training important?</h3>
          <p>
            As per Employee Training statistics, the following statistics
            demonstrate the importance of proper job training.
          </p>
          <div className="stats-row">
            <div className="stat-item" data-aos="fade-left">
              <h2>{statsData.stat1}%</h2>
              <p>
                Surveyed employees feel they aren’t reaching full potential at
                work due to lack of development opportunities.
              </p>
            </div>
            <div className="stat-item" data-aos="fade-right">
              <h2>{statsData.stat2}%</h2>
              <p>
                Employees claim they had no workplace training and that most of
                their skills were self-taught.
              </p>
            </div>
            <div className="stat-item" data-aos="fade-up">
              <h2>{statsData.stat3}%</h2>
              <p>
                Millennials believe learning and development in the workplace is
                important.
              </p>
            </div>
          </div>

          <p className="footnote" data-aos="fade-up">
            Training and development is one of the lowest things on the priority
            list of most companies. When it’s organized, it is often at the
            persistence of the human resources department. However, there is
            enormous value in organizing proper training and development
            sessions for employees.
          </p>
          <div className="source" data-aos="zoom-in">
            <img src="et_logo.png" alt="The Economic Times Logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyTrainingSection;
