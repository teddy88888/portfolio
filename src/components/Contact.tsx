import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="contact-section" id="contact">
      {/* Contact Profile */}
      <div className="contact-profile">
        <div className="contact-image">
          <img
            src="/man.png"
            alt="Portrait of Teddy"
            className="contact-portrait"
          />
          <div className="contact-image-gradient" />
        </div>

        <div className="contact-profile-info">
          {/* Social Media */}
          <div className="contact-social-media">
            <a
              href="https://dribbble.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Dribbble"
              className="contact-social-link"
            >
              D
            </a>

            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="contact-social-link"
            >
              ◎
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="contact-social-link"
            >
              in
            </a>
          </div>

          {/* Contact Info */}
          <div className="contact-info">
            <h3>Teddy Dewanto</h3>

            <div className="contact-status">
              <span className="contact-status-dot" />
              <p>Open to opportunities</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="contact-form-wrapper">
        <div className="contact-form-header">
          <p className="contact-form-title">Contact</p>

          <h2 className="contact-form-subtitle">LET'S GET IN TOUCH</h2>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          {/* Name */}
          <div className="contact-field">
            <label htmlFor="contact-name">Name</label>

            <input
              id="contact-name"
              name="name"
              type="text"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email */}
          <div className="contact-field">
            <label htmlFor="contact-email">Email</label>

            <input
              id="contact-email"
              name="email"
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Message */}
          <div className="contact-field contact-message-field">
            <label htmlFor="contact-message">Message</label>

            <textarea
              id="contact-message"
              name="message"
              placeholder="Write your message..."
              required
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="contact-submit-button">
            <span>{submitted ? "Message Ready" : "Send Message"}</span>
            <span aria-hidden="true">↗</span>
          </button>

          {submitted && (
            <p className="contact-success-message">
              Form validation completed. Email sending is not connected yet.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
