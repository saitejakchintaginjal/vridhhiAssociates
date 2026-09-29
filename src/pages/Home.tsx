import "./Home.css";
import HeroScene from "../components/HeroScene";

const Home = () => {
  return (
    <section id="home" className="home-hero">
      {/* LCP HERO IMAGE */}
      <img
        src="/projects/HomeBackground.webp"
        alt="Residential and commercial construction services by Vridhhi Associates in Hubli"
        className="hero-bg"
        fetchPriority="high"
        decoding="async"
        width="1920"
        height="1080"
      />

      <div className="home-overlay"></div>

      <div className="hero-main">
        <HeroScene />

      <div className="container hero-content">
        <span className="hero-badge">Built on Trust</span>

        {/* Primary SEO Heading */}
        <h1 className="brand-title">Vridhhi Associates</h1>

        <h2 className="hero-tagline">
          We Build.
          <br />
          We Protect.
        </h2>

        <p className="hero-description">
          Vridhhi Associates is a construction and waterproofing company in
          Hubli, delivering residential and commercial projects with precision,
          durability, and on-time execution.
        </p>

        <div className="hero-buttons">
          <a href="#contact" className="btn btn-primary btn-lg">
            Free Consultation
          </a>

          <a href="#projects" className="btn btn-outline-light btn-lg">
            View Projects
          </a>
          <a
            href="https://teal-croquembouche-8c165f.netlify.app/"
            className="btn btn-outline-light btn-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Gallery
          </a>
        </div>

        <div className="hero-features">
          <span>Quality Construction</span>
          <span>Certified Waterproofing</span>
          <span>On-Time Delivery</span>
        </div>
      </div>
      </div>

      <div className="hero-stats">
        <div className="container hero-stats-grid">
          <div>
            <strong>20+</strong>
            <span>Buildings Delivered</span>
          </div>
          <div>
            <strong>100+</strong>
            <span>Waterproofing Projects</span>
          </div>
          <div>
            <strong>45+</strong>
            <span>Renovations</span>
          </div>
          <div>
            <strong>Hubli</strong>
            <span>Based &amp; Local</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
