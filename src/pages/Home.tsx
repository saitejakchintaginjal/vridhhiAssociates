import "./Home.css";

const Home = () => {
  return (
    <section id="home" className="home-hero">
      {/* HERO IMAGE — LCP ELEMENT */}
      <img
        src="/projects/HomeBackground.webp"
        alt="Residential and commercial construction by Vridhhi Associates"
        className="hero-bg"
        fetchPriority="high"
        decoding="async"
      />

      <div className="home-overlay"></div>

      <div className="container hero-content">
        <span className="badge bg-warning text-dark px-3 py-2 mb-3">
          Trusted Construction Partner
        </span>

        {/* SEO: BRAND H1 */}
        <h1 className="brand-title">Vridhhi Associates</h1>

        {/* Tagline */}
        <h2 className="hero-tagline">
          We Build.
          <br />
          We Protect.
        </h2>

        <p>
          Vridhhi Associates is a construction and waterproofing company based
          in Hubli, India. We deliver residential, commercial and waterproofing
          projects with focus on quality, safety and on-time execution.
        </p>

        <div className="hero-buttons">
          <a href="#contact" className="btn btn-primary">
            Free Consultation
          </a>

          <a href="#projects" className="btn btn-outline-light">
            View Projects
          </a>
        </div>

        <div className="hero-features">
          <span>Quality Construction</span>
          <span>Trusted Team</span>
          <span>On-Time Delivery</span>
        </div>
      </div>
    </section>
  );
};

export default Home;
