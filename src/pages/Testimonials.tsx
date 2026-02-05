import "./Testimonials.css";

const testimonials = [
  {
    name: "Ramesh Kumar",
    role: "Home Owner",
    text: "Vridhhi Associates delivered our home on time with excellent quality. The entire team was professional and transparent.",
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Anita Sharma",
    role: "Business Owner",
    text: "Great experience working with Vridhhi Associates. Their workmanship and project management is outstanding.",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Suresh Patel",
    role: "Property Developer",
    text: "Reliable partner for our commercial projects. Always deliver what they promise.",
    image:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=200&q=80",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-white">
      <div className="container">
        <h2 className="section-title">What Our Clients Say</h2>

        <div className="row g-4">
          {testimonials.map((t) => (
            <div key={t.name} className="col-md-4">
              <div className="soft-card p-4 h-100 testimonial-card">
                <div className="stars mb-3">★★★★★</div>

                <p className="testimonial-text">"{t.text}"</p>

                <div className="d-flex align-items-center gap-3 mt-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="testimonial-avatar"
                  />

                  <div>
                    <strong>{t.name}</strong>
                    <div className="text-muted small">{t.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
