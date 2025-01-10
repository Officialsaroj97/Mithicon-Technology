import "./JobSection.css";

const JobSection = () => {
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

      <div className="job-cards-container">
        <div className="job-card left-to-right">Sr Executive</div>
        <div className="job-card right-to-left">Accounts Head</div>
        <div className="job-card left-to-right">EA</div>
        <div className="job-card right-to-left">Merchandiser</div>
        <div className="job-card left-to-right">Coordinators</div>
        <div className="job-card right-to-left">CRM</div>
        {/* Additional job profiles */}
        <div className="job-card left-to-right">Software Engineer</div>
        <div className="job-card right-to-left">Project Manager</div>
        <div className="job-card left-to-right">Marketing Head</div>
        <div className="job-card right-to-left">Product Specialist</div>
        <div className="job-card left-to-right">HR Executive</div>
        <div className="job-card right-to-left">Finance Lead</div>
      </div>
    </div>
  );
};

export default JobSection;
