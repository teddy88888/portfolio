import {
  Monitor,
  Code2,
  Smartphone,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: Monitor,
    title: "Custom Website Development",
    description:
      "Building responsive, fast, and scalable websites tailored to your needs.",
  },
  {
    number: "02",
    icon: Monitor,
    title: "Web Performance Optimization",
    description:
      "Enhancing website speed, SEO, and overall performance for bette",
  },
  {
    number: "03",
    icon: Monitor,
    title: "Website Maintenance & Debugging",
    description:
      "Fixing bugs, improving UI, and ensuring smooth performance over time.",
  },
];

function Services() {
  return (
    <section className="services-section" id="services">
      <div className="services-header">
        <div className="services-title">
          <span className="services-label">MY SERVICES</span>

          <h2 className="services-heading">
            MY SERVICE EXPERTISE
            <br />
          </h2>
        </div>

        <p className="services-text">
          Creating modern, intuitive, and visually consistent web experiences
          that align with industry trends and user expectations.
        </p>
      </div>

      <div className="services-cards">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <article className="service-card" key={service.number}>
              <span className="service-number">{service.number}</span>

              <div className="service-line" />

              <Icon className="service-icon" size={32} strokeWidth={2} />

              <h3 className="service-card-title">{service.title}</h3>

              <p className="service-card-description">{service.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Services;