import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Testimonials.css";

// Import profile images
import profile1 from "../assets/profile1.jpg";
import profile2 from "../assets/profile2.jpg";
import profile3 from "../assets/profile3.png";
import profile4 from "../assets/profile4.png";
import profile5 from "../assets/profile5.png";
import profile6 from "../assets/profile6.png";
import profile7 from "../assets/profile7.jpg";
import profile8 from "../assets/profile8.jpg";

const Testimonials = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 200,
    });
  }, []);

  const [activeCategory, setActiveCategory] = useState("Export Import");

  const testimonialsData = {
    "Export Import": [
      {
        id: 1,
        name: "Akshit Gupta",
        company: "Asha Ram & Sons",
        title: "Managing Director",
        heading:
          "Overcoming Industry Constraints: Accelerating Sales Success With Focuskon",
        description:
          "In the past, hiring salespeople from outside our niche industry was risky. They would often work for a few months and then leave. We were stuck to hiring only those familiar with our industry. However, since implementing Focuskon's SOPs, this challenge has been completely eliminated. Now, we confidently hire salespeople from any industry, knowing they can be fully trained within just 2-3 days.",
        rating: 5,
        profile: profile1,
      },
      {
        id: 2,
        name: "Rajeev Kumar",
        company: "Global Traders",
        title: "Sales Lead",
        heading:
          "Efficiency Boost: Transforming Team Productivity With Focuskon",
        description:
          "Focuskon’s SOP system has been a game-changer for our sales department. I was initially skeptical about how it would work in our industry, but within a week, our team showed significant improvements in their performance and morale. The structure provided by Focuskon allowed our team to thrive in an organized manner. I strongly recommend it to any sales-oriented business.",
        rating: 5,
        profile: profile3,
      },
    ],
    Retail: [
      {
        id: 1,
        name: "Snehlata",
        company: "Asha Ram & Sons",
        title: "New Joinee",
        heading: "Rapidly Mastering Sales: My Journey to Success",
        description:
          "Starting fresh in the company, I was worried about learning the ropes of sales. But with Focuskon’s SOPs, I was fully trained in just 3 to 4 days. By day four, I was confidently handling sales, understanding the products, and addressing customer questions with ease. The training made my transition smooth and stress-free, enabling me to succeed quickly in my new role.",
        rating: 5,
        profile: profile2,
      },
      {
        id: 2,
        name: "Vinay Shukla",
        company: "Retail Solutions",
        title: "Sales Manager",
        heading: "Streamlined Onboarding and Performance Excellence",
        description:
          "I came to the retail industry with limited experience, and Focuskon's SOPs gave me everything I needed to become productive right away. The training was structured but flexible, allowing me to learn quickly, address customer inquiries confidently, and achieve sales targets in record time. This SOP approach made a huge difference.",
        rating: 5,
        profile: profile4,
      },
    ],
    Trading: [
      {
        id: 1,
        name: "Rohan Mehta",
        company: "TradeLogistics Ltd.",
        title: "Operations Manager",
        heading: "Optimizing Trading Efficiency",
        description:
          "Focuskon transformed our trading operations by making them more efficient and streamlined. Our team is now more confident and productive.",
        rating: 5,
        profile: profile5,
      },
    ],
    Manufacturing: [
      {
        id: 1,
        name: "Alok Jain",
        company: "ManuWorks",
        title: "Factory Head",
        heading: "Streamlining Manufacturing with SOPs",
        description:
          "The SOPs from Focuskon helped us train our workers faster and significantly reduced errors in production. A great investment for any manufacturing unit.",
        rating: 5,
        profile: profile6,
      },
    ],
    Food: [
      {
        id: 1,
        name: "Pooja Agarwal",
        company: "Tasty Treats Co.",
        title: "Chef",
        heading: "SOPs for Food Safety and Quality",
        description:
          "With Focuskon's SOPs, our team adheres to food safety and quality standards without missing a step. It's been a game-changer for our business.",
        rating: 5,
        profile: profile7,
      },
    ],
    Technology: [
      {
        id: 1,
        name: "Vikas Sharma",
        company: "Tech Innovators",
        title: "Lead Developer",
        heading: "Innovating Tech Sales",
        description:
          "Focuskon helped us manage our tech sales pipeline more effectively, leading to increased client satisfaction and revenue.",
        rating: 5,
        profile: profile8,
      },
    ],
  };

  const testimonials = testimonialsData[activeCategory];

  return (
    <section className="testimonials">
      <h2 className="section-title" data-aos="fade-up">
        Hear From Our <span className="highlight">Clients And Employees</span>{" "}
        Share Their Experience
      </h2>

      {/* Categories */}
      <div className="categories" data-aos="fade-up">
        <ul className="category-tabs">
          {Object.keys(testimonialsData).map((category) => (
            <li
              key={category}
              className={category === activeCategory ? "active" : ""}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>

      {/* Testimonial Cards */}
      <div className="testimonial-cards">
        {testimonials.length > 0 ? (
          testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="testimonial-card"
              data-aos="fade-up"
            >
              {/* Header */}
              <div className="card-header">
                <img
                  src={testimonial.profile}
                  alt={testimonial.name}
                  className="profile-image"
                />
                <div>
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.title}</p>
                </div>
              </div>

              {/* Content */}
              <div className="card-content">
                <h3>{testimonial.heading}</h3>
                <p>{testimonial.description}</p>
              </div>

              {/* Stars and Footer */}
              <div className="card-footer">
                <div className="stars">
                  {Array(testimonial.rating)
                    .fill()
                    .map((_, index) => (
                      <span key={index} className="star">
                        &#9733;
                      </span>
                    ))}
                </div>
                <div className="rating-metrics">
                  <p>100% Will Recommend to others</p>
                  <p>100% Saw Growth in Performance</p>
                  <p>100% Said they would come again</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="no-testimonials" data-aos="fade-up">
            No testimonials available for this category.
          </p>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
