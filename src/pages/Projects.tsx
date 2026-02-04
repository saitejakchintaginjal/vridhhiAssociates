import SectionWrapper from "../components/SectionWrapper";

const images = [
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd",
  "https://images.unsplash.com/photo-1484154218962-a197022b5858",
  "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
];

const Projects = () => (
  <SectionWrapper id="projects" title="Projects">
    <div className="row g-3">
      {images.map((img, i) => (
        <div className="col-md-4" key={i}>
          <img src={img} className="img-fluid rounded" />
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default Projects;
