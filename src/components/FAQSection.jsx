import { useState } from "react";
import "./FAQSection.css"; // CSS file for styling

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question:
        "How Deeply Does Focuskon Go When Creating A Document SOP And Video SOP For A Job Profile, And What Is Included In These Sops?",
      answer:
        "Focuskon goes in-depth when creating SOPs. Our process involves thorough analysis and inclusion of all necessary operational details for the job profile in both written and video formats.",
    },
    {
      question:
        "How Long Does It Typically Take To Create A Document SOP And Video SOP, And How Much Time Is Required To Train A New Employee Using These Materials?",
      answer:
        "The time to create SOPs varies depending on the complexity of the role, but typically takes between 2-4 weeks. Training time for new employees is significantly reduced due to the efficiency of our materials.",
    },
    {
      question:
        "How Does Focuskon Ensure That A New Employee Is Fully Trained After Watching The Training Videos?",
      answer:
        "We have a comprehensive follow-up system to ensure that employees fully grasp the material, including assessments and practical applications.",
    },
    {
      question: "Can I Update The Sop’s After They’ve Been Created?",
      answer:
        "Yes, Focuskon allows for easy updates to SOPs as your processes evolve over time.",
    },
  ];

  return (
    <div className="faq-container">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-items">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
              <span className="faq-icon">
                {openIndex === index ? "−" : "+"}
              </span>
            </div>
            {openIndex === index && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
