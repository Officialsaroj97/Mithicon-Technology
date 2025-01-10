import "./AboutUs.css";
import "aos/dist/aos.css";
import AOS from "aos";

AOS.init();

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1 className="about-us-title" data-aos="fade-up">
        About Us
      </h1>

      <section className="about-us-section" data-aos="fade-right">
        <h2 className="section-heading">
          The Innovative And Efficient Solution For Automated Employee Training
        </h2>
        <p>
          We revolutionize employee training by providing top-notch document and
          video SOPs that streamline your business processes. Our solutions
          ensure quick onboarding, minimize training costs, and enhance overall
          productivity.
        </p>
      </section>

      <section className="about-us-section" data-aos="fade-left">
        <h2 className="section-heading">Contact Us</h2>
        <p>
          Our Video SOP (Standard Operating Procedures) system makes training
          your new employees easier than ever. Our innovative approach
          eliminates the guesswork from training, providing clear, step-by-step
          instructions that are easy to follow and implement. Say goodbye to the
          inefficiencies of traditional training methods and welcome a new era
          of productivity and growth.
        </p>
      </section>

      <section className="about-us-section" data-aos="zoom-in">
        <blockquote className="blockquote">
          At Mithicon, we are dedicated to transforming the way businesses train
          their employees. Our commitment to innovation and efficiency ensures
          that our clients save valuable time and resources, allowing them to
          focus on what truly matters – achieving their business goals and
          fostering growth. Together, we build a future where success is
          streamlined and sustainable.
        </blockquote>
        <p className="author">
          Pranay Kumar, Mithicon
          <br />
          Founder
        </p>
        <p className="author">
          Saroj Yadav, Mithicon
          <br />
          Managing Director
        </p>
      </section>

      <section className="about-us-section" data-aos="fade-up">
        <h2 className="section-heading">About Our Founder</h2>
        <p>
          Pranay Kumar, a dynamic entrepreneur from Mumbai, navigated the
          bustling business landscape through NM Mumbai and SP Jain Family
          Managed Business Program. Experiencing firsthand the challenges of
          losing key employees in his family business, Pranay felt the urgency
          to find a solution.
        </p>
        <p>
          This led to the creation of Mithicon, a platform designed to preserve
          and transfer crucial business knowledge seamlessly, ensuring
          businesses continue to thrive regardless of staff changes. With a deep
          passion for innovation and a commitment to lasting impact, Pranay
          vision for Mithicon is to empower businesses by turning every
          challenge into an opportunity for growth.
        </p>
      </section>

      <section className="about-us-section" data-aos="fade-right">
        <h2 className="section-heading">Mithicon Vision</h2>
        <p>
          Our vision is to eliminate the global challenge of time-consuming
          training processes for newly joined employees. We aim to eradicate the
          anxiety and disruption business owners face when a trained employee
          leaves and a new one joins. By creating innovative document SOPs and
          video SOPs, we ensure that new employees are efficiently trained in
          just one day, enabling businesses to operate smoothly without
          interruptions.
        </p>
        <p>
          Over the past decade, we have empowered our clients to streamline
          their operations, saving time and resources through innovative
          training solutions. At Mithicon, we believe in creating sustainable,
          scalable systems that not only train employees but also drive business
          growth. Our mission is to ensure that every business we work with
          thrives, regardless of challenges.
        </p>
      </section>

      <section className="about-us-section" data-aos="fade-left">
        <h2 className="section-heading">Mithicon Strength</h2>
        <p>
          Mithicon excels in resolving the critical challenges that businesses
          face when onboarding and training new employees. Our unique approach
          ensures that essential knowledge and skills are seamlessly
          transferred, reducing anxiety and ensuring continuity even when
          experienced employees leave.
        </p>
        <p>
          We provide a structured, reliable framework that guarantees every new
          hire is equipped with the necessary tools to perform effectively from
          day one, eliminating the uncertainty and inefficiency of traditional
          training methods.
        </p>
      </section>

      <section className="stats-section" data-aos="zoom-in">
        <h3 className="stats-title">Mithicon By The Numbers</h3>
        <ul className="stats-list">
          <li>
            <strong>3,000+</strong> Training Modules
          </li>
          <li>
            <strong>60+</strong> Quality Assurance Specialists
          </li>
          <li>
            <strong>4,400+</strong> Operations People Trained
          </li>
          <li>
            <strong>360+</strong> Businesses Grown
          </li>
        </ul>
      </section>
    </div>
  );
};

export default AboutUs;
