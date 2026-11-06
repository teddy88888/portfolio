import { ArrowUpRight } from "lucide-react";
import "./Portfolio.css";

const portfolioProjects = [
  {
    title: "Sociality",
    description:
      "A social media web application featuring profiles, posts, likes, and follow functionality.",
    image: "/sociality2.png",
    link: "https://sociality-sable.vercel.app/",
  },
  {
    title: "Restaurant Ordering Platform",
    description:
      "A responsive restaurant ordering platform with menu browsing and modern UI.",
    image: "/food2.png",
    link: "https://restaurant-ordering-platform-phi.vercel.app",
  },
  {
    title: "Movie Explorer",
    description:
      "Explore movies, discover details, and browse movie trailers in a modern interface.",
    image: "/movi2.png",
    link: "https://challenge-8-new-teddy88888.vercel.app/",
  },
  {
    title: "Book Management",
    description:
      "A book management application for organizing and managing book information.",
    image: "/book.png",
    link: "https://github.com/teddy88888/book-management-system",
  },
  {
    title: "Todo Application",
    description:
      "A task management application with interactive features and DOM manipulation.",
    image: "/todo.png",
    link: "https://github.com/teddy88888/task-management-app",
  },
  {
    title: "Interactive Calculator",
    description:
      "An interactive calculator built with JavaScript and structured application logic.",
    image: "/calcu.png",
    link: "https://github.com/teddy88888/javascript-cli-calculator",
  },
];

function Portfolio() {
  return (
    <section className="portfolio-section" id="portfolio">
      <div className="portfolio-header">
        <span className="portfolio-label">Portfolio</span>
        <h2 className="portfolio-subtitle">My Recent Projects</h2>
      </div>

      <div className="portfolio-content">
        {portfolioProjects.map((project) => (
          <article className="portfolio-card" key={project.title}>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-image-link"
              aria-label={`Visit ${project.title}`}
            >
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                className="portfolio-image"
              />

              <span className="portfolio-visit">
                VISIT
                <ArrowUpRight size={18} />
              </span>
            </a>

            <h3 className="portfolio-project-title">{project.title}</h3>

            <p className="portfolio-description">{project.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
