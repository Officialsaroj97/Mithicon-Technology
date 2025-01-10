import "./TrainingProcess.css"; // Import the CSS file
import terms1 from "../assets/terms1.webp";
import anxious from "../assets/terms2.webp";
import awaiting from "../assets/terms3.jpg";
import stressed from "../assets/terms4.jpg";

const TrainingProcess = () => {
  const cards = [
    {
      id: 1,
      title: "Aren't You Afraid",
      description:
        "Of Investing Another 30-60 Days In Training A New Employee?",
      image: terms1,
      alt: "Afraid",
    },
    {
      id: 2,
      title: "Are You Anxious That",
      description:
        "Senior Team Invest Too Much Time Just To Train The New Ones?",
      image: anxious,
      alt: "Anxious",
    },
    {
      id: 3,
      title: "Are You Awaiting",
      description:
        "Results From The New Hires, Similar To The One Who Left On The First Day?",
      image: awaiting,
      alt: "Awaiting",
    },
    {
      id: 4,
      title: "Are You Stressed",
      description: "That Your Employee Might Leave Right After Getting Paid?",
      image: stressed,
      alt: "Stressed",
    },
  ];

  return (
    <section className="training-process">
      <h2 className="section-title">
        Tired Of The{" "}
        <span className="highlight">Never-Ending And Costly Training</span>{" "}
        Process?
      </h2>

      <div className="process-cards">
        {cards.map((card) => (
          <div key={card.id} className="card">
            <img src={card.image} alt={card.alt} className="card-image" />
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>

      <div className="divider">
        <div className="circle"></div>
      </div>
    </section>
  );
};

export default TrainingProcess;
