import { useState } from "react";
import "./FAQ.css";

const faqs = [
  {
    q: "What services does Vridhhi Associates offer?",
    a: "We provide residential and commercial construction, waterproofing, renovation and remodeling, interiors, and project consultation in Hubli and nearby areas.",
  },
  {
    q: "How much does construction cost per square foot?",
    a: "Residential construction starts from around ₹2,200 per sq.ft. The final cost depends on design, specifications, materials and site conditions. We share an itemised estimate before work begins.",
  },
  {
    q: "How much does waterproofing cost?",
    a: "Waterproofing starts from around ₹55 per sq.ft depending on the area (terrace, bathroom, basement) and the system used. We offer a free site inspection to recommend the right solution.",
  },
  {
    q: "Do you provide a warranty on waterproofing work?",
    a: "Yes. Our waterproofing treatments come with a material and workmanship warranty. Warranty duration depends on the system applied and is confirmed in your quotation.",
  },
  {
    q: "How long does it take to build a house?",
    a: "A typical individual house takes 8–12 months depending on size and design. We share a clear schedule at the start and track milestones through the project.",
  },
  {
    q: "Do you offer free site visits and consultation?",
    a: "Yes. Book a free consultation and our team will visit your site, understand your requirements and give you a no-obligation estimate.",
  },
  {
    q: "Which areas do you serve?",
    a: "We are based in Vidya Nagar, Hubli, and work across Hubli–Dharwad and nearby regions. Contact us to check availability for your location.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="faq-section">
      <div className="container">
        <div className="pro-heading">
          <span className="pro-eyebrow">FAQ</span>
          <h2>Frequently Asked Questions</h2>
          <p>Quick answers to what clients ask us most.</p>
        </div>

        <div className="faq-list">
          {faqs.map((f, i) => (
            <div key={f.q} className={`faq-item ${open === i ? "open" : ""}`}>
              <button
                className="faq-question"
                aria-expanded={open === i}
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span>{f.q}</span>
                <span className="faq-icon" aria-hidden="true" />
              </button>
              <div className="faq-answer">
                <p>{f.a}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="faq-cta">
          <p>Still have questions?</p>
          <a href="#contact" className="faq-btn">
            Talk to Our Team
          </a>
        </div>
      </div>
    </section>
  );
}
