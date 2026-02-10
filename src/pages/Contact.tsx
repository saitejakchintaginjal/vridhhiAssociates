import "./Contact.css";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";

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

const SendIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" />
    <path
      d="M22 2L15 22L11 13L2 9L22 2Z"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

/* ---------------- COMPONENT ---------------- */

type ModalStatus = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  // const [showModal, setShowModal] = useState(false);
  const [modalStatus, setModalStatus] = useState<ModalStatus>("idle");

  // const sendEmail = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   setShowModal(true);

  //   emailjs
  //     .sendForm(
  //       "service_6v08qg8", //replace
  //       "template_f1008yn", // replace
  //       formRef.current!,
  //       "zQl56Ji0l4W0xoGgZ", // replace
  //     )
  //     .then(
  //       () => {
  //         // alert("Message sent successfully!");
  //         // setTimeout(() => setShowModal(false), 3000);
  //         formRef.current?.reset();
  //         setLoading(false);
  //       },
  //       () => {
  //         alert("Failed to send message. Try again.");
  //         setLoading(false);
  //       },
  //     );
  // };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setModalStatus("sending");

    emailjs
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
          <div className="contact-header">
            <h2>Get In Touch</h2>
            <p>
              Reach out to us for residential, commercial construction and
              waterproofing solutions.
            </p>
          </div>

          <div className="contact-grid">
            {/* ---------------- FORM ---------------- */}
            <div className="contact-form-card">
              <h3>Send Us a Message</h3>
              <p>
                Fill out the form below and we'll get back to you as soon as
                possible.
              </p>

              <form ref={formRef} onSubmit={sendEmail}>
                <div className="form-row">
                  <input name="name" placeholder="Your Name *" required />
                  <input name="phone" placeholder="Phone Number *" required />
                </div>

                <input
                  name="email"
                  placeholder="Email Address *"
                  required
                  className="emailField"
                />

                <textarea
                  name="message"
                  rows={5}
                  placeholder="Your Message *"
                  required
                />

                <button type="submit" disabled={loading}>
                  {loading ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message <SendIcon />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* ---------------- INFO ---------------- */}
            <div className="contact-info-card">
              <h3>Contact Information</h3>
              <p>Reach out to us through any of the following channels.</p>

              <div className="info-item">
                <PhoneIcon />
                <div>
                  <strong>Phone</strong>
                  <span>+91 8792076681</span>
                  <small>Contact Person: Pradeep V Dhavande</small>
                </div>
              </div>

              <div className="info-item">
                <MailIcon />
                <div>
                  <strong>Email</strong>
                  <span>vridhhiassociate@gmail.com</span>
                  <small>We'll respond within 24 hours</small>
                </div>
              </div>

              <div className="info-item">
                <MapIcon />
                <div>
                  <strong>Address</strong>
                  <span>Vridhhi Associates</span>
                  <small>
                    B-14 Marvel Artiza, Opposite Kim's, Vidya Nagar, Hubli –
                    580021
                  </small>
                </div>
              </div>

              <div className="info-item">
                <ClockIcon />
                <div>
                  <strong>Business Hours</strong>
                  <span>Mon - Sat: 10:00 AM - 8:00 PM</span>
                  <small>Sunday: Closed</small>
                </div>
              </div>

              <div className="contact-actions">
                <a href="tel:918792076681" className="btn-call">
                  Call Now
                </a>

                <a
                  href="https://wa.me/918792076681"
                  className="btn-whatsapp"
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp
                </a>
              </div>

              {/* ---------------- MAP ---------------- */}
              {/* <div className="map-wrapper">
              <iframe
                title="Vridhhi Associates Location"
                src="https://www.google.com/maps?q=Vidya%20Nagar%20Hubli&output=embed"
                loading="lazy"
              />
            </div> */}
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
