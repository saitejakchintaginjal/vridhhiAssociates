import Section from "../components/Section";
import "./About.css";

export default function AboutPage() {
  return (
    <>
      {/* SPLIT ABOUT */}
      <Section id="about" variant="white">
        <div className="about-split">
          {/* <div className="about-image">
            <img
              src="/projects/project3.webp"
              alt="Construction project by Vridhhi Associates"
              loading="lazy"
            />
          </div> */}

          <div className="about-text">
            <div className="about-header">
              <div className="about-label">About Us</div>

              <h2 className="about-title">
                Trusted Construction & Waterproofing Experts in Hubli
              </h2>

              <div className="about-divider" />
            </div>

            <p>
              Vridhhi Associates is a professional construction company
              delivering residential, commercial and waterproofing projects with
              strong focus on structural quality, transparency and timely
              execution.
            </p>

            <p>
              From planning to completion, we partner with clients to ensure
              durable construction, leak-proof protection and long-term value
              for every project.
            </p>

            <div className="about-inline-stats">
              <div>
                <strong>20+</strong>
                <span>Buildings</span>
              </div>
              <div>
                <strong>100+</strong>
                <span>Waterproofing</span>
              </div>
              <div>
                <strong>45+</strong>
                <span>Renovations</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* PROCESS */}
      <Section
        variant="light"
        title="Our Construction Process"
        subtitle="A transparent and structured approach from planning to project completion"
      >
        <div className="process-steps">
          <div className="process-step">
            <div className="process-icon">1</div>
            <h4>Consultation</h4>
            <p>
              Understanding requirements, site conditions and project goals.
            </p>
          </div>

          <div className="process-step">
            <div className="process-icon">2</div>
            <h4>Planning & Estimation</h4>
            <p>Design planning, material selection and transparent costing.</p>
          </div>

          <div className="process-step">
            <div className="process-icon">3</div>
            <h4>Execution</h4>
            <p>
              Structured construction with skilled workforce and supervision.
            </p>
          </div>

          <div className="process-step">
            <div className="process-icon">4</div>
            <h4>Quality Checks</h4>
            <p>Stage-wise inspections ensuring durability and precision.</p>
          </div>

          <div className="process-step">
            <div className="process-icon">5</div>
            <h4>Handover</h4>
            <p>Final finishing, client walkthrough and project delivery.</p>
          </div>
        </div>
      </Section>
    </>
  );
}
