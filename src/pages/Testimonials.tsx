import SectionWrapper from "../components/SectionWrapper";

const Testimonials = () => (
  <SectionWrapper id="testimonials" title="Testimonials">
    <div className="row g-4">
      {["Great service", "On time delivery", "Highly recommended"].map((t) => (
        <div className="col-md-4" key={t}>
          <div className="card p-3">"{t}"</div>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default Testimonials;
