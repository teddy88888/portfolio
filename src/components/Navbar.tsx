function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <a href="#home">
          <span className="nav-line" ></span>
          <span className="text-green-300 font-bold ">Teddy Dewanto.</span>
        </a>

        {/* Navigation Menu */}
        <nav className="navbar-menu">
          <a href="#home" className="nav-link active">
            Home
          </a>

          <a href="#about" className="nav-link">
            About
          </a>

          <a href="#skill" className="nav-link">
            Skill
          </a>

          <a href="#project" className="nav-link">
            Projects
          </a>

          <a href="#faq" className="nav-link">
            FAQ
          </a>

          <a href="#contact" className="nav-link">
            Contact
          </a>
        </nav>

        {/* Contact Button */}
        {/* <a href="#contact" className="navbar-contact">
          Let's Talk <span>↗</span>
        </a> */}
      </div>
    </header>
  );
}

export default Navbar;
