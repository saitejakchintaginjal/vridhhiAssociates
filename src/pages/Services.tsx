import { lazy, useState } from "react";
import "./ServicesPage.css";

const FaHome = lazy(() =>
  import("react-icons/fa").then((m) => ({ default: m.FaHome })),
);
const FaBuilding = lazy(() =>
  import("react-icons/fa").then((m) => ({ default: m.FaBuilding })),
);
const FaWater = lazy(() =>
  import("react-icons/fa").then((m) => ({ default: m.FaWater })),
);
const FaTools = lazy(() =>
  import("react-icons/fa").then((m) => ({ default: m.FaTools })),
);
const FaCouch = lazy(() =>
  import("react-icons/fa").then((m) => ({ default: m.FaCouch })),
);
const FaProjectDiagram = lazy(() =>
  import("react-icons/fa").then((m) => ({ default: m.FaProjectDiagram })),
);
const FaCheckCircle = lazy(() =>
  import("react-icons/fa").then((m) => ({ default: m.FaCheckCircle })),
);
const FaChevronLeft = lazy(() =>
  import("react-icons/fa").then((m) => ({ default: m.FaChevronLeft })),
);
const FaChevronRight = lazy(() =>
  import("react-icons/fa").then((m) => ({ default: m.FaChevronRight })),
);

const services = [
  {
    title: "Residential Construction",
    desc: "From individual homes to large apartment complexes, we build spaces that combine functionality, comfort and lasting quality.",
    points: [
      "Custom home construction",
      "Apartments & villas",
      "Duplex & row houses",
      "Turnkey execution",
    ],
    icon: <FaHome />,
    color: "#2563eb",
  },
  {
    title: "Commercial Construction",
    desc: "Efficient commercial spaces designed for business growth.",
    points: [
      "Office complexes",
      "Retail spaces",
      "Warehouses",
      "Institutional buildings",
    ],
    icon: <FaBuilding />,
    color: "#7c3aed",
  },
  {
    title: "Waterproofing Solutions",
    desc: "Advanced systems to prevent leakage and deterioration.",
    points: [
      "Terrace waterproofing",
      "Basement treatment",
      "Bathroom sealing",
      "Structural protection",
    ],
    icon: <FaWater />,
    color: "#0891b2",
  },
  {
    title: "Renovation & Remodeling",
    desc: "Modern upgrades with superior workmanship.",
    points: [
      "Home renovation",
      "Interior upgrades",
      "Structural strengthening",
      "Facade improvement",
    ],
    icon: <FaTools />,
    color: "#ea580c",
  },
  {
    title: "Interiors",
    desc: "Interior solutions balancing aesthetics and function.",
    points: [
      "Modular kitchens",
      "Wardrobes & storage",
      "False ceilings",
      "Lighting design",
    ],
    icon: <FaCouch />,
    color: "#16a34a",
  },
  {
    title: "Consultation",
    desc: "End-to-end execution with quality control.",
    points: [
      "Scheduling",
      "Vendor coordination",
      "Quality inspections",
      "Cost control",
    ],
    icon: <FaProjectDiagram />,
    color: "#dc2626",
  },
];

export default function ServicesPage() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? services.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === services.length - 1 ? 0 : i + 1));

  return (
    <>
      {/* HERO */}
      <section className="services-hero" id="services">
        <div className="container">
          <h1>Our Services</h1>
          <p>
            Comprehensive construction solutions delivered with quality,
            transparency and reliability.
          </p>
        </div>
      </section>

      {/* SERVICES CAROUSEL */}

      {/* <div className="services-carousel-section">
        <div className="container carousel-wrapper">
      
          <button className="carousel-btn left" onClick={prev}>
            <FaChevronLeft />
          </button>

          <div className="carousel-viewport">
            <div
              className="carousel-track"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {services.map((s, i) => (
                <div
                  className="service-card"
                  key={i}
                  style={{ "--card-color": s.color } as React.CSSProperties}
                >
                  <div className="service-card-title">
                    <div
                      className="service-card-icon"
                      style={{ "--icon-color": s.color } as React.CSSProperties}
                    >
                      {s.icon}
                    </div>
                    <h3>{s.title}</h3>
                  </div>

                  <p className="service-card-desc">{s.desc}</p>

                  <div className="service-points">
                    {s.points.map((p, idx) => (
                      <div className="service-point" key={idx}>
                        <FaCheckCircle
                          className="point-icon"
                          style={{ color: s.color }}
                        />
                        <span>{p}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="carousel-btn right" onClick={next}>
            <FaChevronRight />
          </button>
        </div>
      </div> */}

      {/* SERVICES CAROUSEL */}

      <div className="services-carousel-section">
        <div className="container carousel-wrapper">
          {/* SERVICE TITLES NAV */}
          <div className="services-nav">
            {services.map((s, i) => (
              <button
                key={i}
                className={`services-nav-item ${i === index ? "active" : ""}`}
                onClick={() => setIndex(i)}
              >
                {s.title}
              </button>
            ))}
          </div>

          {/* arrows */}
          <button className="carousel-btn left" onClick={prev}>
            <FaChevronLeft />
          </button>

          <div className="carousel-viewport">
            <div
              className="carousel-track"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {services.map((s, i) => (
                <div
                  className="service-card"
                  key={i}
                  style={{ "--card-color": s.color } as React.CSSProperties}
                >
                  <div className="service-card-title">
                    <div
                      className="service-card-icon"
                      style={{ "--icon-color": s.color } as React.CSSProperties}
                    >
                      {s.icon}
                    </div>
                    <h3>{s.title}</h3>
                  </div>

                  <p className="service-card-desc">{s.desc}</p>

                  <div className="service-points">
                    {s.points.map((p, idx) => (
                      <div className="service-point" key={idx}>
                        <FaCheckCircle
                          className="point-icon"
                          style={{ color: s.color }}
                        />
                        <span>{p}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="carousel-btn right" onClick={next}>
            <FaChevronRight />
          </button>
        </div>
      </div>

      <div className="services-image-section">
        <div className="container image-grid">
          <div className="image-slider slider-one">
            <img src="/services/service-1.webp" alt="" />
            <img src="/services/service-2.webp" alt="" />
            <img src="/services/service-3.webp" alt="" />
          </div>

          <div className="image-slider slider-two">
            <img src="/services/service-4.webp" alt="" />
            <img src="/services/service-5.webp" alt="" />
            <img src="/services/service-6.webp" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
