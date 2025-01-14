import "./JobSection.css";

const JobSection = () => {
  const jobCards = [
    "Sr Executive",
    "Accounts Head",
    "EA",
    "Merchandiser",
    "Coordinators",
    "CRM",
    "Software Engineer",
    "Project Manager",
    "Marketing Head",
    "Product Specialist",
    "HR Executive",
    "Finance Lead",
  ];

  return (
    <div className="job-section">
      <h1>
        We Make <span className="highlight">Teams More Productive</span>
      </h1>
      <p>
        We are the only company helping you in saving time and money. We are the
        experts, with more than 10 years in the service.
      </p>
      <div className="cta-container">
        <button className="cta-button">We want to save time and money</button>
      </div>

      {/* Job Cards Wrapper */}
      <div className="job-cards-wrapper">
        {/* First Row: Left-to-Right */}
        <div className="job-cards-container">
          {jobCards.concat(jobCards).map((job, index) => (
            <div className="job-card" key={index}>
              {job}
            </div>
          ))}
        </div>

        {/* Second Row: Right-to-Left */}
        <div className="job-cards-container">
          {jobCards.concat(jobCards).map((job, index) => (
            <div className="job-card" key={index}>
              {job}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobSection;
