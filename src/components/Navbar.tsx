import { useState } from "react";
import "./Navbar.css";
import logo from "../assets/logo/Vridhhi1.jpg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className="navbar fixed-top custom-navbar">
      <div className="container navbar-inner">
        {/* Logo */}
        <a
          href="#home"
          className="navbar-brand d-flex align-items-center gap-2"
          onClick={handleLinkClick}
        >
          <img
            src={logo}
            alt="Vridhhi Associates Logo"
            width={60}
            height={60}
          />
          <strong>Vridhhi Associates</strong>
        </a>

        {/* Hamburger */}
        <button
          className="navbar-toggler"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          ☰
        </button>

        {/* Menu */}
        <div className={`nav-menu ${menuOpen ? "show" : ""}`}>
          {["home", "about", "services", "projects", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="nav-link"
              onClick={handleLinkClick}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}

          <a
            href="tel:918792076681"
            className="btn btn-outline-primary call-btn"
            onClick={handleLinkClick}
          >
            Call Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
