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

/* ================= SERVICES ACCORDION ================= */

export default function ServicesPage() {
  const [active, setActive] = useState<number | null>(0);

  const toggle = (i: number) => {
    setActive((prev) => (prev === i ? null : i));
  };

  return (
    <>
      {/* HERO */}
      <section id="services" className="services-header">
        <div className="container">
          <h2 className="section-header">Our Services</h2>
          <p className="section-subtitle">
            Practical construction and waterproofing solutions delivered with
            quality workmanship and reliability.
          </p>
        </div>
      </section>

      {/* ACCORDION */}
      <section className="services-accordion-section">
        <div className="container">
          <div className="services-accordion">
            {services.map((s, i) => (
              <div
                key={i}
                className={`service-row ${active === i ? "active" : ""}`}
              >
                <button
                  className="service-row-header"
                  onClick={() => toggle(i)}
                >
                  <div className="service-row-title">
                    <span className="service-row-icon">{s.icon}</span>
                    <span>{s.title}</span>
                  </div>

                  <span
                    className={`service-row-toggle ${active === i ? "open" : ""}`}
                  >
                    ▼
                  </span>
                </button>

                <div className="service-row-content">
                  <p>{s.desc}</p>

                  <ul>
                    {s.points.map((p, idx) => (
                      <li key={idx}>
                        <FaCheckCircle /> {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KEEP YOUR EXISTING IMAGE SECTION EXACTLY AS IS */}
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
