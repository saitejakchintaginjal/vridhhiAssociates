import { FaHardHat, FaClock, FaUsers } from "react-icons/fa";

const Home = () => {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        paddingTop: "90px",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="d-flex align-items-center position-relative"
    >
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to right, rgba(13,41,68,0.85), rgba(13,41,68,0.55))",
        }}
      />

      <div className="container position-relative text-white">
        <div className="row">
          <div className="col-lg-7 col-12">
            {/* Badge */}
            <span
              style={{
                backgroundColor: "#f2b705",
                color: "#000",
                padding: "6px 14px",
                borderRadius: 20,
                fontSize: 13,
                display: "inline-block",
                whiteSpace: "nowrap",
              }}
            >
              Trusted Construction Partner
            </span>

            {/* Heading */}
            <h1
              className="fw-bold mt-3"
              style={{ fontSize: "clamp(30px, 6vw, 52px)" }}
            >
              Building Strong Foundations <br />
              For Tomorrow
            </h1>

            {/* Description */}
            <p className="lead mt-3" style={{ color: "#e4e8ed" }}>
              VridhhiAssociates delivers reliable residential and commercial
              construction services with focus on quality and timely completion.
            </p>

            {/* Buttons */}
            <div className="mt-4 d-flex flex-wrap gap-3">
              <a
                href="#contact"
                className="btn"
                style={{
                  backgroundColor: "#1f5ea8",
                  color: "#fff",
                  padding: "10px 22px",
                }}
              >
                Get Quote
              </a>

              <a href="#projects" className="btn btn-outline-light">
                View Projects
              </a>
            </div>

            {/* Feature Pills */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "12px",
                marginTop: "24px",
                maxWidth: "100%",
              }}
            >
              {/* Quality */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "10px 18px",
                  borderRadius: 50,
                  border: "1px solid rgba(255,255,255,0.35)",
                  background: "rgba(255,255,255,0.08)",
                  color: "#fff",
                  backdropFilter: "blur(8px)",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                }}
              >
                <FaHardHat size={18} />
                <span>Quality Construction</span>
              </div>

              {/* Trusted */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "10px 18px",
                  borderRadius: 50,
                  border: "1px solid rgba(255,255,255,0.35)",
                  background: "rgba(255,255,255,0.08)",
                  color: "#fff",
                  backdropFilter: "blur(8px)",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                }}
              >
                <FaUsers size={18} />
                <span>Trusted Team</span>
              </div>

              {/* Time */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "10px 18px",
                  borderRadius: 50,
                  border: "1px solid rgba(255,255,255,0.35)",
                  background: "rgba(255,255,255,0.08)",
                  color: "#fff",
                  backdropFilter: "blur(8px)",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                }}
              >
                <FaClock size={18} />
                <span>On-Time Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
