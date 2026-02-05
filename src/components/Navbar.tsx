import { useEffect } from "react";
import "./Navbar.css";
import logo from "../assets/logo/Vridhhi1.jpg";

const Navbar = () => {
  useEffect(() => {
    const links = document.querySelectorAll(".nav-link");

    links.forEach((link) => {
      link.addEventListener("click", () => {
        const menu = document.getElementById("navbarMenu");
        if (menu?.classList.contains("show")) {
          menu.classList.remove("show");
        }
      });
    });
  }, []);

  return (
    <nav
      className="navbar navbar-expand-lg fixed-top"
      style={{
        background: "#ffffff",
        minHeight: "80px",
        boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
        zIndex: 5000,
      }}
    >
      <div className="container">
        {/* Logo */}
        <a
          href="#home"
          className="navbar-brand d-flex align-items-center gap-2"
        >
          <img
            src={logo}
            alt="Vridhhi Associates"
            style={{ width: 60, height: 60, objectFit: "contain" }}
          />
          <strong>Vridhhi Associates</strong>
        </a>

        {/* Hamburger */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="navbarMenu">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">
            {[
              "home",
              "about",
              "services",
              "projects",
              "testimonials",
              "contact",
            ].map((item) => (
              <li className="nav-item" key={item}>
                <a className="nav-link" href={`#${item}`}>
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}

            <li className="nav-item ms-lg-3">
              <a href="tel:918792076681" className="btn btn-outline-primary">
                Call Now
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
