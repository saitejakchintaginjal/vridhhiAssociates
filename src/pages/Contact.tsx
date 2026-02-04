import SectionWrapper from "../components/SectionWrapper";

const Contact = () => (
  <SectionWrapper id="contact" title="Contact Us">
    <iframe
      className="w-100 mb-4 rounded"
      height="250"
      src="https://www.google.com/maps?q=New+Delhi&output=embed"
    />

    <form className="row g-3">
      <div className="col-md-6">
        <input className="form-control" placeholder="Name" />
      </div>
      <div className="col-md-6">
        <input className="form-control" placeholder="Email" />
      </div>
      <div className="col-12">
        <textarea className="form-control" rows={4} placeholder="Message" />
      </div>
      <div className="col-12">
        <button className="btn btn-warning w-100">Send</button>
      </div>
    </form>
  </SectionWrapper>
);

export default Contact;
