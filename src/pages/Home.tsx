import "./Home.css";

const Home = () => {
  return (
    <section id="home" className="home-hero d-flex align-items-center">
      {/* Overlay */}
      <div className="home-overlay"></div>

      <div className="container position-relative text-white">
        <div className="row">
          <div className="col-lg-7">
            <span className="badge bg-warning text-dark px-3 py-2 mb-3">
              Trusted Construction Partner
            </span>

            <h1 className="fw-bold display-4 mt-3">
              Building Strong Foundations <br />
              For Tomorrow
            </h1>

            <p className="lead mt-3">
              Vridhhi Associates delivers residential, commercial and
              waterproofing projects with focus on quality, safety and on-time
              execution.
            </p>

            {/* Buttons */}
            <div className="d-flex flex-wrap gap-3 mt-4">
              <a href="#contact" className="btn btn-primary px-4">
                Request Site Visit
              </a>

              <a href="#projects" className="btn btn-outline-light px-4">
                View Projects
              </a>
            </div>

            {/* Feature Pills */}
            <div className="hero-features mt-4">
              <span className="feature-pill">Quality Construction</span>

              <span className="feature-pill">Trusted Team</span>

              <span className="feature-pill">On-Time Delivery</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
