import SectionWrapper from "../components/SectionWrapper";

const services = [
  "Residential Construction",
  "Commercial Buildings",
  "Renovation",
  "Interiors",
  "Project Management",
  "Consultation",
];

const Services = () => (
  <SectionWrapper id="services" title="Services">
    <div className="row g-4">
      {services.map((s) => (
        <div className="col-md-4" key={s}>
          <div className="card h-100 text-center p-3">
            <h5>{s}</h5>
          </div>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default Services;
