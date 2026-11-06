
import { ArrowUpRight } from "lucide-react";
import "./Work.css";

const projects = [
  {
    number: "01",
    title: "Sociality",
    category: "Social Media Web Application",
    description:
      "A social media application built with Next.js, React, TypeScript, and Tailwind CSS. Includes user profiles, posts, likes, and follow features.",
    image: "/sociality.png",
    technologies: ["Next.js", "TypeScript", "Zustand"],
    link: "https://sociality-sable.vercel.app/",
  },
  {
    number: "02",
    title: "Restaurant Ordering Platform",
    category: "Restaurant Web Application",
    description:
      "A restaurant ordering platform featuring responsive UI, menu browsing, and modern frontend architecture.",
    image: "/food.png",
    technologies: ["Next.js", "React", "TypeScript"],
    link: "https://restaurant-ordering-platform-phi.vercel.app",
  },
  {
    number: "03",
    title: "Movie Explorer",
    category: "Movie Discovery Application",
    description:
      "A movie discovery application with movie information, search functionality, and trailer exploration.",
    image: "/movi.png",
    technologies: ["React", "TypeScript", "REST API"],
    link: "https://challenge-8-new-teddy88888.vercel.app/",
  },
  {
    number: "04",
    title: "Book Management",
    category: "Book Management Application",
    description:
      "A book management application designed to organize and manage book information using a structured application architecture.",
    image: "/book.png",
    technologies: ["JavaScript", "Node.js", "REST API"],
    link: "https://github.com/teddy88888/book-management-system",
  },
];

function Work() {
  return (
    <section className="work-section" id="work">
      <div className="work-header">
        <span className="work-label">My Portfolio</span>
        <h2 className="work-title">My Recent Projects</h2>
      </div>

      <div className="work-content">
        <div className="work-timeline" />

        {projects.map((project, index) => (
          <article
            className={`work-item ${
              index % 2 === 1 ? "work-item-reverse" : ""
            }`}
            key={project.number}
          >
            <div className="work-image-wrapper">
              <img
                src={project.image}
                alt={`${project.title} project preview`}
                className="work-image"
              />
            </div>

            <div className="work-project-info">
              <div className="work-number">{project.number}</div>

              <div className="work-card">
                <div className="work-card-header">
                  <div className="work-card-heading">
                    <span className="work-category">
                      {project.category}
                    </span>

                    <h3>{project.title}</h3>
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="work-link"
                    aria-label={`View ${project.title}`}
                  >
                    <ArrowUpRight size={24} />
                  </a>
                </div>

                <p className="work-description">
                  {project.description}
                </p>

                <div className="work-technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Work;
