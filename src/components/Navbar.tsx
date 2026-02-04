import logo from "../assets/logo/Vridhhi1.jpg";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg fixed-top"
      style={{
        backgroundColor: "#ffffff",
        boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
      }}
    >
      <div className="container">
        <a
          className="navbar-brand d-flex align-items-center gap-2"
          href="#home"
        >
          <img
            src={logo}
            alt="Vridhhi Associates Logo"
            style={{
              width: 80,
              height: 80,
              objectFit: "contain",
            }}
          />

          <div className="fw-bold">Vridhhi Associates</div>
        </a>
        <button
          className="navbar-toggler border-0"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
          aria-controls="navMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto">
            {[
              "Home",
              "About",
              "Services",
              "Projects",
              "Testimonials",
              "Contact",
            ].map((item) => (
              <li className="nav-item" key={item}>
                <a
                  className="nav-link"
                  href={`#${item.toLowerCase()}`}
                  data-bs-toggle="collapse"
                  data-bs-target="#navMenu"
                >
                  {item}
                </a>
              </li>
            ))}

            {/* Call */}
            <li className="nav-item mt-2 mt-lg-0">
              <a
                href="tel:918792076681"
                className="btn btn-outline-primary w-100"
              >
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
