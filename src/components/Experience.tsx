import { Mail } from "lucide-react";
import "./Experience.css";

const workExperience = [
  "React Expert",
  "Precise Website Implementation",
  "TypeScript Proficiency",
  "Clean, Maintainable Code",
  "Responsive Website Development",
  "UI Design Proficiency",
];

const education = [
  "Basic React Knowledge",
  "Inconsistent Desgn Translation",
  "Little to No TypeScript Knowledge",
  "Unstructure Code",
  "Inconsistent Responsiveness",
  "No Design Skills",
];

function Experience() {
  return (
    <section className="experience-section" id="experience">
      <header className="experience-header">
        <div className="experience-title">
          <p className="experience-label">Working</p>
          <h2 className="experience-subtitle">WHY CHOOSE ME ?</h2>
        </div>
      </header>

      <div className="experience-content">
        {/* Work Experience */}
        <div className="experience-item">
          <h3 className="experience-item-title">WORKING WITH ME</h3>

          <div className="experience-avatar">
            <img
              src="/man.png"
              alt="Profile portrait"
              className="experience-portrait"
            />
          </div>

          {workExperience.map((item, index) => (
            <div className="experience-row" key={item}>
              <img src="/itemicon.png" alt="" className="experience-check" />
              <p className="experience-row-text">{item}</p>
            </div>
          ))}
        </div>

        {/* Education */}
        <div className="experience-item education-item">
          <h3 className="experience-item-title">ANOTHER TALENT</h3>

          <div className="education-icon">
            <img
              src="/emptyprofile.png"
              alt="emptyprofile"
              className="education-icon-image"
            />
          </div>

          {education.map((item) => (
            <div className="education-row" key={item}>
              <img src="/itemicon.png" alt="" className="education-row-icon" />
              <p className="education-row-text">{item}</p>
            </div>
          ))}

          <a href="#contact" className="experience-button">
            <span>HIRE ME</span>            
          </a>
        </div>
      </div>
    </section>
  );
}

export default Experience;
