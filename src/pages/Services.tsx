import { lazy } from "react";
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
  },
];

export default function ServicesPage() {
  return (
    <>
      <section id="services" className="services-header">
        <div className="container">
          <div className="pro-heading">
            <span className="pro-eyebrow">What We Do</span>
            <h2>Our Services</h2>
            <p>
              Practical construction and waterproofing solutions delivered with
              quality workmanship and reliability.
            </p>
          </div>

          <div className="svc-grid">
            {services.map((s, i) => (
              <article key={s.title} className="svc-card">
                <span className="svc-num">{String(i + 1).padStart(2, "0")}</span>
                <span className="svc-icon">{s.icon}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <ul>
                  {s.points.map((p) => (
                    <li key={p}>
                      <FaCheckCircle /> {p}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
