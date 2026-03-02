import "./Projects.css";

const projects = [
  {
    title: "Tech Park Office Complex",
    type: "Commercial",
    location: "Sulla Road, Hubli",
    status: "Ongoing",
    image: "/projects/project2.webp",
  },
  {
    title: "Heritage Villa Renovation",
    type: "Residential",
    location: "Sangoli Rayanna Nagar, Hubli",
    status: "Completed",
    image: "/projects/project3.webp",
  },
  {
    title: "Green Heights Residency",
    type: "Residential",
    location: "Kuberapuram, Hubli",
    status: "Completed",
    image: "/projects/project4.webp",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-light">
      <div className="container">
        <div className="projects-header">
          <h2>Our Projects</h2>
          <div className="projects-divider"></div>
          <p>
            Selected construction and renovation works delivered with precision
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((p) => (
            <div key={p.title} className="project-card">
              <div className="project-image">
                <img src={p.image} alt={`${p.title} - ${p.location}`} />

                <span
                  className={`project-status ${
                    p.status === "Completed"
                      ? "status-completed"
                      : "status-ongoing"
                  }`}
                >
                  {p.status}
                </span>

                <div className="project-overlay">
                  {/* <h3>{p.title}</h3> */}
                  <p>{p.location}</p>
                  <small>{p.type}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
