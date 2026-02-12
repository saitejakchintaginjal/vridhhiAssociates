import { lazy } from "react";
import "./ServicesPage.css";
// import {
//   FaHome,
//   FaBuilding,
//   FaWater,
//   FaTools,
//   FaCouch,
//   FaProjectDiagram,
//   FaCheckCircle,
// } from "react-icons/fa";

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
    title: "Commercial Buildings",
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

const ServicesPage = () => {
  return (
    <>
      {/* HERO */}
      <section className="services-hero" id="services">
        <div className="container hero-content">
          <h1>Our Services</h1>
          <p>
            Comprehensive construction solutions delivered with quality,
            transparency and reliability.
          </p>
        </div>
      </section>
      {/* IMAGE SHOWCASE */}
      <section className="services-image-section">
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
      </section>

      {/* SERVICES GRID */}
      <section className="services-grid-section">
        <div className="container services-grid">
          {services.map((s, i) => (
            <div className="service-card" key={i}>
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
      </section>
    </>
  );
};

export default ServicesPage;
