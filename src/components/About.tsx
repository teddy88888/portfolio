import "./About.css";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-content">
        <span className="about-title">ABOUT ME</span>

        <div className="about-details">
          {/* Decorative Images */}
          <img
            src="/weshape.png"
            alt=""
            className="about-decoration about-decoration-one"
          />

          <img
            src="/shaping.png"
            alt=""
            className="about-decoration about-decoration-two"
          />

          <h2 className="about-subtitle">
            CRAFTING SEAMLESS
            <br />
            <span className="about-description">HIGH-PERFORMANCE WEB </span>
            <br />
            EXPERIENCES
          </h2>

          <img
            src="/elevate.png"
            alt=""
            className="about-decoration about-decoration-three"
          />
        </div>
      </div>

      <p className="about-text">
        I love turning designs into interactive, high-performance websites. With
        a keen eye for detail and a deep understanding of frontend technologies,
        I create smooth and visually appealing user experiences.
      </p>

      <div className="about-square-group" aria-hidden="true">
        <div className="about-square" />
        <div className="about-square" />
        <div className="about-square" />
      </div>
    </section>
  );
}

export default About;
