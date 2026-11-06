import { useState } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import "./Testimonials.css";

type Testimonial = {
  name: string;
  role: string;
  company: string;
  companyColor: string;
  message: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Thom Haye",
    role: "Head of Product",
    company: "Upwork",
    companyColor: "#14A800",
    message:
      "Highly skilled frontend developer with an eye for design. Transformed our wireframes into a seamless and responsive web experience. Highly recommended!",
  },
  {
    name: "Alex Morgan",
    role: "Product Manager",
    company: "Atlassian",
    companyColor: "#2684FF",
    message:
      "A talented developer who pays attention to detail and delivers clean, responsive interfaces. Communication and collaboration were excellent.",
  },
  {
    name: "Sarah Johnson",
    role: "UI/UX Designer",
    company: "Dribbble",
    companyColor: "#F5956D",
    message:
      "Great understanding of design systems and frontend development. The final result was polished, intuitive, and easy to use.",
  },
  {
    name: "Michael Chen",
    role: "Engineering Lead",
    company: "Figma",
    companyColor: "#2D8CFF",
    message:
      "A reliable team player with strong frontend skills. Built reusable components and created a smooth experience across different screen sizes.",
  },
];

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleTestimonials = testimonials.map(
    (_, index) => testimonials[(index + currentIndex) % testimonials.length],
  );

  const handlePrevious = () => {
    setCurrentIndex(
      (currentIndex - 1 + testimonials.length) % testimonials.length,
    );
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  return (
    <section className="testimonials-section" id="testimonials">
      {/* Header */}
      <div className="testimonials-header">
        <p className="testimonials-title">Testimonials</p>

        <h2 className="testimonials-subtitle">
          What People Say About Me
        </h2>
      </div>

      {/* Content */}
      <div className="testimonials-content">
        <div className="testimonials-list">
          {visibleTestimonials.map((testimonial, index) => (
            <article
  className="testimonial-card"
  key={testimonial.name + "-" + index}
>
              {/* User and Company */}
              <div className="testimonial-header">
                <div className="testimonial-person">
                  <h3>{testimonial.name}</h3>
                  <p>{testimonial.role}</p>
                </div>

                <div
                  className="testimonial-company"
                  style={{ color: testimonial.companyColor }}
                >
                  {testimonial.company}
                </div>
              </div>

              {/* Rating */}
              <div className="testimonial-rating" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star
                    key={starIndex}
                    size={32}
                    fill="#F3993F"
                    color="#F3993F"
                  />
                ))}
              </div>

              {/* Message */}
              <p className="testimonial-message">
                “{testimonial.message}”
              </p>
            </article>
          ))}
        </div>

        {/* Navigation */}
        <div className="testimonials-navigation">
          <button
            type="button"
            className="testimonial-nav-button"
            onClick={handlePrevious}
            aria-label="Previous testimonials"
          >
            <ArrowLeft size={24} />
          </button>

          <button
            type="button"
            className="testimonial-nav-button testimonial-nav-next"
            onClick={handleNext}
            aria-label="Next testimonials"
          >
            <ArrowRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
