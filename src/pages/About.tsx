import "./AboutPage.css";

const AboutPage = () => {
  const leaders = [
    {
      name: "Saiteja",
      role: "Managing Director",
      image: "/Team/member1.jpeg",
    },
    {
      name: "Teja",
      role: "Technical Director",
      image: "/Team/member2.jpeg",
    },
    {
      name: "Name Here",
      role: "Operations Head",
      image: "/Team/member3.jpeg",
    },
  ];

  return (
    <>
      {/* ================= ABOUT HERO ================= */}
      <section className="about-hero" id="about">
        <div className="about-overlay" />

        <div className="container about-content">
          <span className="about-badge">About Us</span>

          <h1>Building Dreams Since Day One</h1>

          <p>
            Vridhhi Associates is a professional construction company delivering
            residential, commercial and waterproofing projects with strong focus
            on quality, transparency and timely execution.
          </p>

          <p>
            We partner with our clients from planning to completion, ensuring
            every project is built with precision, trust and long-term value.
          </p>
        </div>
      </section>

      {/* ================= LEADERSHIP ================= */}
      <section className="leadership-section">
        <div className="leadership-overlay" />

        <div className="container leadership-inner">
          <h2 className="section-title text-white">Leadership Team</h2>

          <div className="leader-grid">
            {leaders.map((leader, index) => (
              <div className="leader-card" key={index}>
                <img src={leader.image} alt={leader.name} loading="lazy" />

                <h4>{leader.name}</h4>
                <p>{leader.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
