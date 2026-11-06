import { ArrowUpRight, Star } from "lucide-react";

function Hero() {
  return (
    <section className="hero-section" id="home">
      {/* Green Background */}
      <div className="hero-green-bg" />

      <div className="hero-container">
        {/* LEFT CONTENT */}
        <div className="hero-content">
          <div className="hero-label">
            <span className="greeting-line" />
            <span>Hi, I am Teddy Dewanto Frontend Developer</span>
          </div>

          <h1 className="hero-title">
            BUILDING FAST & <span>INTERACTIVE </span>
            WEB
            <br />
            EXPERIENCE
          </h1>

          <p className="hero-description">
            Bridging creativity and functionality to deliver stunning, user-
            <br />
            friendly web applications
          </p>

          <a href="#portfolio" className="hero-button">
            HIRE ME
            <ArrowUpRight size={24} />
          </a>

          {/* Social Links */}
          <div className="hero-socials">
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              <span className="social-icon">GH</span>
              <span>GitHub</span>
            </a>

            <div className="social-divider" />

            <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
              <span className="social-icon">in</span>
              <span>LinkedIn</span>
            </a>

            <div className="social-divider" />

            <a href="#contact">
              <span className="social-x">𝕏</span>
              <span>Twitter</span>
            </a>
          </div>
        </div>
        <div className="hero-profile">
          <div className="profile-green-background" />

          <img
            src="/man.png"
            alt="Portrait of Teddy"
            className="profile-image"
          />

          <div className="profile-gradient" />

          <div className="rating-card">
            <strong className="rating-number">5.0</strong>

            <div className="rating-stars">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} size={32} fill="#F3993F" color="#F3993F" />
              ))}
            </div>

            <p>Many Client Trust with me</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
