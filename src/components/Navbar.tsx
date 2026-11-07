import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <a href="#home" className="navbar-brand" onClick={closeMenu}>
          <span className="nav-line" />
          <span className="text-green-300 font-bold">Teddy Dewanto.</span>
        </a>

        <button
          type="button"
          className="navbar-toggle"
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`navbar-menu${menuOpen ? " is-open" : ""}`}>
          <a href="#home" className="nav-link active" onClick={closeMenu}>
            Home
          </a>
          <a href="#about" className="nav-link" onClick={closeMenu}>
            About
          </a>
          <a href="#skill" className="nav-link" onClick={closeMenu}>
            Skill
          </a>
          <a href="#project" className="nav-link" onClick={closeMenu}>
            Projects
          </a>
          <a href="#faq" className="nav-link" onClick={closeMenu}>
            FAQ
          </a>
          <a href="#contact" className="nav-link" onClick={closeMenu}>
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
