
import { CircleHelp } from "lucide-react";
import "./FAQ.css";

type FAQItem = {
  question: string;
  answer: string;
};

const faqItems: FAQItem[] = [
  {
    question: "What technologies do you specialize in?",
    answer:
      "I specialize in React.js, Next.js, Vue.js, Tailwind CSS, and TypeScript, ensuring high-performance, scalable, and maintainable web applications.",
  },
  {
    question: "Can you optimize an existing website for better performance?",
    answer:
      "Yes! I can analyze, debug, and optimize websites to improve speed, accessibility, and SEO, using best practices like lazy loading, code splitting, and performance monitoring.",
  },
  {
    question: "How do you approach a new project?",
    answer:
      "I start by understanding the project goals and requirements, followed by wireframing or UI implementation, then development, testing, and deployment—ensuring a smooth and efficient workflow.",
  },
  {
    question: "Do you work on both design and development?",
    answer:
      "I focus primarily on frontend development, translating UI/UX designs into responsive and interactive web experiences. However, I collaborate closely with designers to ensure a seamless user experience.",
  },
  {
    question: "Do you take freelance or contract-based projects?",
    answer:
      "Yes! I am open to freelance, contract, and full-time opportunities, depending on the project scope and requirements. Feel free to reach out!",
  },
  {
    question: "How can we collaborate?",
    answer:
      "You can contact me via email, LinkedIn, or GitHub. I usually begin with a consultation to discuss your needs, then propose a plan to bring your vision to life. Let’s create something awesome together!",
  },
];

function FAQ() {
  return (
    <section className="faq-section" id="faq">
      {/* FAQ Header */}
      <div className="faq-header">
        <p className="faq-title">FAQ</p>

        <h2 className="faq-subtitle">
          Frequently Asked Questions
        </h2>
      </div>

      {/* FAQ Content */}
      <div className="faq-content">
        {[0, 1, 2].map((rowIndex) => (
          <div className="faq-row" key={rowIndex}>
            {faqItems
              .slice(rowIndex * 2, rowIndex * 2 + 2)
              .map((item) => (
                <article className="faq-question" key={item.question}>
                  <div className="faq-question-heading">
                    <CircleHelp
                      className="faq-icon"
                      size={32}
                      strokeWidth={2}
                    />

                    <h3>{item.question}</h3>
                  </div>

                  <p className="faq-answer">{item.answer}</p>
                </article>
              ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;

