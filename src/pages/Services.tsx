// import "./ServicesPage.css";

// const services = [
//   {
//     title: "Residential Construction",
//     desc: "From individual homes to large apartment complexes, we build spaces that combine functionality, comfort and lasting quality.",
//     points: [
//       "Custom home construction",
//       "Apartments & villas",
//       "Duplex & row houses",
//       "Turnkey execution",
//     ],
//     image:
//       "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=1200&q=80",
//   },
//   {
//     title: "Commercial Buildings",
//     desc: "We deliver efficient commercial spaces designed for business growth and long-term performance.",
//     points: [
//       "Office complexes",
//       "Retail spaces",
//       "Warehouses",
//       "Institutional buildings",
//     ],
//     image:
//       "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
//   },
//   {
//     title: "Waterproofing Solutions",
//     desc: "Advanced waterproofing systems to protect structures from leakage and deterioration.",
//     points: [
//       "Terrace waterproofing",
//       "Basement treatment",
//       "Bathroom & kitchen sealing",
//       "Structural protection",
//     ],
//     image:
//       "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
//   },
//   {
//     title: "Renovation & Remodeling",
//     desc: "Transform existing spaces with modern design and superior workmanship.",
//     points: [
//       "Home renovation",
//       "Interior upgrades",
//       "Structural strengthening",
//       "Facade improvement",
//     ],
//     image:
//       "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=1200&q=80",
//   },
//   {
//     title: "Interiors",
//     desc: "Complete interior solutions that balance aesthetics with functionality.",
//     points: [
//       "Modular kitchens",
//       "Wardrobes & storage",
//       "False ceilings",
//       "Lighting design",
//     ],
//     image:
//       "https://images.unsplash.com/photo-1586105251261-72a756497a11?auto=format&fit=crop&w=1200&q=80",
//   },
//   {
//     title: "Project Management",
//     desc: "End-to-end planning and execution ensuring timely delivery and quality control.",
//     points: [
//       "Scheduling",
//       "Vendor coordination",
//       "Quality inspections",
//       "Cost control",
//     ],
//     image:
//       "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80",
//   },
// ];

// const ServicesPage = () => {
//   return (
//     <>
//       {/* HERO */}
//       <section className="services-hero" id="services">
//         <div className="overlay" />
//         <div className="container hero-content">
//           <h1>Our Services</h1>
//           <p>
//             Comprehensive construction solutions delivered with quality,
//             transparency and reliability.
//           </p>
//         </div>
//       </section>

//       {/* SERVICES */}
//       <section className="services-list section-light">
//         <div className="container">
//           {services.map((s, i) => (
//             <div
//               key={i}
//               className={`service-row ${i % 2 !== 0 ? "reverse" : ""}`}
//             >
//               {/* Image */}
//               <div className="service-image">
//                 <img src={s.image} alt={s.title} />
//               </div>

//               {/* Content */}
//               <div className="service-content">
//                 <h2>{s.title}</h2>
//                 <p>{s.desc}</p>

//                 <ul>
//                   {s.points.map((p, idx) => (
//                     <li key={idx}>{p}</li>
//                   ))}
//                 </ul>

//                 <a href="#contact" className="btn-primary">
//                   Get Quote
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     </>
//   );
// };

// export default ServicesPage;

import { useEffect, useState } from "react";
import "./ServicesPage.css";

const constructionImages = [
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
  "https://images.unsplash.com/photo-1541888946425-d81bb19240f5",
  "https://images.unsplash.com/photo-1590658268037-6bf12165a8df",
];

const interiorImages = [
  "https://images.unsplash.com/photo-1618220179428-22790b461013",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  "https://images.unsplash.com/photo-1615874959474-d609969a20ed",
];

export default function Services() {
  const [constIndex, setConstIndex] = useState(0);
  const [interiorIndex, setInteriorIndex] = useState(0);

  useEffect(() => {
    const cTimer = setInterval(() => {
      setConstIndex((p) => (p + 1) % constructionImages.length);
    }, 3500);

    const iTimer = setInterval(() => {
      setInteriorIndex((p) => (p + 1) % interiorImages.length);
    }, 3500);

    return () => {
      clearInterval(cTimer);
      clearInterval(iTimer);
    };
  }, []);

  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="services-subtitle">
          End-to-end construction and renovation solutions delivered with
          quality, safety, and reliability.
        </p>

        <div className="services-grid">
          {/* LEFT - SERVICE LIST */}
          <div className="services-list">
            <h3>What We Offer</h3>

            <ul>
              <li>Residential Construction</li>
              <li>Commercial Buildings</li>
              <li>Interior Design & Execution</li>
              <li>Renovation & Remodeling</li>
              <li>Waterproofing Solutions</li>
              <li>Project Management</li>
              <li>Consultation & Planning</li>
            </ul>
          </div>

          {/* RIGHT - IMAGE BLOCK 1 */}
          <div className="service-image">
            <img src={constructionImages[constIndex]} alt="Construction" />
            <div className="image-label">Construction & Commercial</div>
          </div>
        </div>

        {/* BOTTOM IMAGE BLOCK */}
        <div className="services-bottom">
          <div className="service-image large">
            <img src={interiorImages[interiorIndex]} alt="Interior" />
            <div className="image-label">Interiors & Renovation</div>
          </div>
        </div>
      </div>
    </section>
  );
}
