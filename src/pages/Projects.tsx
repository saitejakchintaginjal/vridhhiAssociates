import "./Projects.css";

const projects = [
  {
    title: "Tech Park Office Complex",
    type: "Residential",
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

const Projects = () => {
  return (
    <section id="projects" className="section-light">
      <div className="container">
        <h2 className="section-title">Our Projects</h2>

        <div className="row g-4">
          {projects.map((p) => (
            <div key={p.title} className="col-lg-4 col-md-6">
              <div className="project-card soft-card">
                <div className="project-image-wrapper">
                  <img
                    src={p.image}
                    alt={`${p.title} - ${p.location}`}
                    loading="lazy"
                    decoding="async"
                  />

                  <span
                    className={`project-badge ${
                      p.status === "Completed"
                        ? "badge-completed"
                        : "badge-ongoing"
                    }`}
                  >
                    {p.status}
                  </span>
                </div>

                <div className="project-content">
                  <small>{p.type}</small>
                  <p>{p.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
