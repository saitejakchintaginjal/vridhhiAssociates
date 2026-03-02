import { useState } from "react";
import "./Navbar.css";
import logo from "../../public/Vridhhi1.jpg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className="navbar fixed-top custom-navbar">
      {menuOpen && (
        <div className="nav-backdrop" onClick={() => setMenuOpen(false)} />
      )}

      <div className="container navbar-inner">
        {/* Logo */}
        <a
          href="#home"
          className="navbar-brand brand"
          onClick={handleLinkClick}
        >
          <img src={logo} alt="Vridhhi Associates Logo" />
          <span>Vridhhi Associates</span>
        </a>

        {/* Hamburger */}
        <button
          className={`navbar-toggler ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
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
            className="call-btn"
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
