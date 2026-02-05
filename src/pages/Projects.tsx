import "./Projects.css";

const projects = [
  {
    title: "Sunset Apartments",
    type: "Residential",
    location: "Vidya Nagar, Hubli",
    status: "Completed",
    image:
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Tech Park Office Complex",
    type: "Commercial",
    location: "KSSIDC Industrial Area, Hubli",
    status: "Ongoing",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Heritage Villa Renovation",
    type: "Renovation",
    location: "Old Hubli",
    status: "Completed",
    image:
      "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Green Heights Residency",
    type: "Residential",
    location: "Gokul Road, Hubli",
    status: "Ongoing",
    image:
      "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=1200&q=80",
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
                  <h5>{p.title}</h5>
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
