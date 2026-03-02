import "./Contact.css";
import { useRef, useState } from "react";
// import emailjs from "emailjs-com";

/* ---------------- ICONS ---------------- */

const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path
      d="M22 16.92V21A2 2 0 0120.18 23 19.8 19.8 0 013 5.82 2 2 0 015 3h4.09a2 2 0 012 1.72c.12.9.32 1.77.6 2.61a2 2 0 01-.45 2L9.91 10.91a16 16 0 006.18 6.18l1.58-1.58a2 2 0 012-.45c.84.28 1.71.48 2.61.6a2 2 0 011.72 2z"
      fill="currentColor"
    />
  </svg>
);

const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path
      d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm0 4l8 5 8-5"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

const MapIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path
      d="M12 21s8-4.5 8-11a8 8 0 10-16 0c0 6.5 8 11 8 11z"
      stroke="currentColor"
      strokeWidth="2"
    />
    <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const ClockIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
    <path
      d="M12 6v6l4 2"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

/* ---------------- COMPONENT ---------------- */

type ModalStatus = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [modalStatus, setModalStatus] = useState<ModalStatus>("idle");

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setModalStatus("sending");

    const emailjs = await import("emailjs-com");

    emailjs.default
      .sendForm(
        "service_6v08qg8",
        "template_f1008yn",
        formRef.current!,
        "zQl56Ji0l4W0xoGgZ",
      )
      .then(
        () => {
          formRef.current?.reset();
          setLoading(false);
          setModalStatus("success");
        },
        () => {
          setLoading(false);
          setModalStatus("error");
        },
      );
  };

  return (
    <>
      <section id="contact" className="contact-section">
        <div className="container">
          {/* HEADER */}
          <div className="contact-header">
            <h2>Contact Us</h2>
            <div className="contact-divider" />
            <p>
              Get in touch for construction, waterproofing and renovation
              enquiries. Our team will respond promptly.
            </p>
          </div>

          {/* CONTENT */}
          <div className="contact-layout">
            {/* INFO PANEL */}
            <div className="contact-info-panel">
              <h3>Vridhhi Associates</h3>
              <p className="contact-intro">
                Reliable construction and waterproofing services delivered with
                precision and quality workmanship.
              </p>

              <div className="info-list">
                <div className="info-item">
                  <PhoneIcon />
                  <div>
                    <strong>Phone</strong>
                    <span>+91 8792076681</span>
                    <small>Pradeep V Dhavande</small>
                  </div>
                </div>

                <div className="info-item">
                  <MailIcon />
                  <div>
                    <strong>Email</strong>
                    <span>vridhhiassociate@gmail.com</span>
                    <small>Response within 24 hours</small>
                  </div>
                </div>

                <div className="info-item">
                  <MapIcon />
                  <div>
                    <strong>Office</strong>
                    <span>Vidya Nagar, Hubli</span>
                    <small>
                      B-14 Marvel Artiza, Opp Kim's,Vidya Nagar, Hubli
                    </small>
                  </div>
                </div>

                <div className="info-item">
                  <ClockIcon />
                  <div>
                    <strong>Hours</strong>
                    <span>Mon – Sat · 10 AM – 8 PM</span>
                    <small>Sunday closed</small>
                  </div>
                </div>
              </div>

              <div className="contact-actions">
                <a href="tel:918792076681" className="btn-call">
                  Call
                </a>
                <a
                  href="https://wa.me/918792076681"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-whatsapp"
                >
                  WhatsApp
                </a>
              </div>
            </div>

            {/* FORM PANEL */}
            <div className="contact-form-panel">
              <h3>Send Enquiry</h3>
              <p className="form-intro">
                Share your requirement and we’ll contact you shortly.
              </p>

              <form ref={formRef} onSubmit={sendEmail}>
                <div className="form-row">
                  <input name="name" placeholder="Name *" required />
                  <input
                    name="phone"
                    placeholder="Phone *"
                    required
                    type="tel"
                    inputMode="numeric"
                    maxLength={10}
                    pattern="[0-9]{10}"
                    onChange={(e) =>
                      (e.target.value = e.target.value.replace(/\D/g, ""))
                    }
                  />
                </div>

                <input
                  name="email"
                  type="email"
                  placeholder="Email (optional)"
                />

                <select name="workType" required>
                  <option value="">Type of Work *</option>
                  <option value="construction">Construction</option>
                  <option value="waterproofing">Waterproofing</option>
                  <option value="renovation">Renovation</option>
                  <option value="consultation">Consultation</option>
                  <option value="interior">Interior</option>
                </select>

                <button type="submit" disabled={loading}>
                  {loading ? "Sending…" : "Submit Enquiry"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {modalStatus !== "idle" && (
        <div className="popup">
          {modalStatus === "sending" && (
            <>
              <h3>Sending message…</h3>
              <p>Please wait</p>
            </>
          )}

          {modalStatus === "success" && (
            <>
              <h3>Message Sent ✅</h3>
              <p>Thank you for contacting us. We’ll get back to you shortly.</p>
              <button onClick={() => setModalStatus("idle")}>Close</button>
            </>
          )}

          {modalStatus === "error" && (
            <>
              <h3>Failed ❌</h3>
              <p>Something went wrong. Please try again.</p>
              <button onClick={() => setModalStatus("idle")}>Close</button>
            </>
          )}
        </div>
      )}
    </>
  );
}
