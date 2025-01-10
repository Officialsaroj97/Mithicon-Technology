import "./SolutionSection.css";
import gpImage from "../assets/mithi.jpg"; // Import the image here
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

// Sample data for solutions - replace with actual data as needed
const solutions = [
  {
    id: 1,
    title:
      "I Enhanced My Team Consistency By 10x And Reduced Costs With Efficient Video Trainings",
    description:
      "I own four retail stores, but growth has stopped because training again & again takes too much time and doesn’t work well. I needed a solution to make training better and manage time more effectively.",
    link: "#",
  },
  {
    id: 2,
    title:
      "Use Years Of Business Experience In Just 5 Mins To Fix Training Problems In Your Industry",
    description:
      "Existing staff provided incomplete training due to low commitment, leading to poor team performance. We needed to improve training effectiveness to boost productivity.",
    link: "#",
  },
  {
    id: 3,
    title:
      "Overcoming The Twin Hurdles: Streamline Your Business With Effective Video SOPs",
    description:
      "At my organization, we were constantly facing issues with incomplete or unclear SOPs, combined with ineffective training programs. This led to inconsistent employee performance, difficulty in applying skills on the job, and ultimately slowed down our overall efficiency and growth.",
    link: "#",
  },
  {
    id: 4,
    title: "The Employees Were Leaving Very Soon",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.",
    link: "#",
  },
];

const SolutionSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // triggers only once when scrolled into view
    });
  }, []);

  return (
    <div className="solution-section">
      {/* Left side content (h2, p) and image below */}
      <div className="content" data-aos="fade-right">
        <h2>
          This Is How We Have <span>Solved The Problems</span> Of Our Clients
        </h2>
        <p>
          Every business faces unique challenges, whether it&apos;s the absence
          of structured SOPs, gaps in knowledge transfer, anxiety over employee
          turnover, and time-consuming training processes that delay operations
          — just look at how we have helped our clients overcome these exact
          problems.
        </p>
        <div className="image-section" data-aos="fade-left">
          <img src={gpImage} alt="Solution demonstration" />
        </div>
      </div>

      {/* Right side solutions list */}
      <div className="solutions-list">
        {solutions.map((solution, index) => (
          <div
            key={solution.id}
            className="solution-card"
            data-aos="zoom-in"
            data-aos-delay={`${index * 200}`} // Delay based on the index
          >
            <h3>
              {String(index + 1).padStart(2, "0")} {solution.title}
            </h3>
            <p>{solution.description}</p>
            <a href={solution.link} className="read-link">
              Read the Solution
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SolutionSection;
