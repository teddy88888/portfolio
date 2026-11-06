import {
  Code2,
  Globe,
  Smartphone,
  Database,
  GitBranch,
  Layers,
  Monitor,
  Palette,
} from "lucide-react";
import "./Skills.css";

const technologies = [
  { name: "JavaScript", icon: "/java.png" },
  { name: "CSS", icon: "/cs.png" },
  { name: "HTML", icon: "/htm.png" },
  { name: "Javascript", icon: "/javas.png" },
  { name: "Mongodb", icon: "/mongodb.png" },
  { name: "React", icon: "/reac.png" },
  { name: "TypeScript", icon: "/typescript.png" },
  { name: "SQL", icon: "/sql.png" },
];

const skills = [
  { name: "HTML", percentage: 90 },
  { name: "CSS", percentage: 85 },
  { name: "JavaScript", percentage: 80 },
  { name: "React", percentage: 75 },
  { name: "Next.js", percentage: 70 },
  { name: "Responsive Design", percentage: 85 },
];

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-content">
        <header className="skills-header">
          <p className="skills-title">Skills</p>

          <h2 className="skills-subtitle">
            My Skills &amp;
            <br />
            Expertise
          </h2>
        </header>

        <div className="skills-list">
          {technologies.map((technology) => (
            <div
              className="skill-icon"
              key={technology.name}
              title={technology.name}
            >
              <div className="tech-icon">
                <img
                  src={technology.icon}
                  alt={technology.name}
                  width={30}
                  height={30}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="skill-bars">
        {skills.map((skill) => (
          <div className="skill-bar" key={skill.name}>
            <div className="skill-bar-content">
              <div
                className="skill-bar-label"
                style={{ width: `${skill.percentage}%` }}
              >
                <span className="skill-bar-text">{skill.name}</span>
                <div className="skill-diagonal-lines" />
              </div>

              <div className="skill-bar-track" />
            </div>

            <span className="skill-bar-percentage">{skill.percentage}%</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
