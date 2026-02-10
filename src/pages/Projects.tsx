import "./Projects.css";

const projects = [
  {
    title: "Tech Park Office Complex",
    type: "Residential",
    location: "Sulla Road, Hubli",
    status: "Ongoing",
    image: "public/projects/project2.jpeg",
  },
  {
    title: "Heritage Villa Renovation",
    type: "Residential",
    location: "Sangoli Rayanna Nagar, Hubli",
    status: "Completed",
    image: "public/projects/project3.jpeg",
  },
  {
    title: "Green Heights Residency",
    type: "Residential",
    location: "Kuberapuram, Hubli",
    status: "Completed",
    image: "public/projects/project4.jpeg",
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
                <div
                  className="project-image"
                  style={{ backgroundImage: `url(${p.image})` }}
                >
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
                  <small className="text-muted">{p.type}</small>
                  {/* <h5>{p.title}</h5> */}
                  <p className="text-muted">{p.location}</p>
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
