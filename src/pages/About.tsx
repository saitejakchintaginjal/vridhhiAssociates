// import "./AboutPage.css";

// const AboutPage = () => {
//   // const leaders = [
//   //   {
//   //     name: "Saiteja",
//   //     role: "Managing Director",
//   //     image: "/Team/member1.jpeg",
//   //   },
//   //   {
//   //     name: "Teja",
//   //     role: "Technical Director",
//   //     image: "/Team/member2.jpeg",
//   //   },
//   //   {
//   //     name: "Name Here",
//   //     role: "Operations Head",
//   //     image: "/Team/member3.jpeg",
//   //   },
//   // ];

//   return (
//     <>
//       {/* ================= ABOUT HERO ================= */}
//       <section className="about-hero" id="about">
//         <div className="about-overlay" />

//         <div className="container about-content">
//           <span className="about-badge">About Us</span>

//           <h1>Building Dreams Since Day One</h1>

//           <p>
//             Vridhhi Associates is a professional construction company delivering
//             residential, commercial and waterproofing projects with strong focus
//             on quality, transparency and timely execution.
//           </p>

//           <p>
//             We partner with our clients from planning to completion, ensuring
//             every project is built with precision, trust and long-term value.
//           </p>
//         </div>
//       </section>

//       {/* ================= LEADERSHIP ================= */}
//       {/* <section className="leadership-section">
//         <div className="leadership-overlay" />

//         <div className="container leadership-inner">
//           <h2 className="section-title text-white">Leadership Team</h2>

//           <div className="leader-grid">
//             {leaders.map((leader, index) => (
//               <div className="leader-card" key={index}>
//                 <img src={leader.image} alt={leader.name} loading="lazy" />

//                 <h4>{leader.name}</h4>
//                 <p>{leader.role}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section> */}
//     </>
//   );
// };

// export default AboutPage;

import "./AboutPage.css";

const AboutPage = () => {
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

      {/* ================= COMPLETED PROJECTS ================= */}
      <section className="projects-section">
        <div className="container">
          <h2 className="projects-title">Completed Projects</h2>
          <p className="projects-subtitle">
            A proven track record across multiple construction domains
          </p>

          <div className="projects-grid">
            <div className="project-card">
              <h3>Construction</h3>
              <span className="project-count">20+</span>
              <p>Residential & commercial buildings delivered</p>
            </div>

            <div className="project-card">
              <h3>Waterproofing</h3>
              <span className="project-count">100+</span>
              <p>Terrace, basement & structural waterproofing works</p>
            </div>

            <div className="project-card">
              <h3>Renovation</h3>
              <span className="project-count">45+</span>
              <p>Home, office and structural renovation projects</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
