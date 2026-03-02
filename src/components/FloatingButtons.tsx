import { FaWhatsapp, FaPhoneAlt, FaInstagram } from "react-icons/fa";
import "./FloatingButtons.css";

export default function FloatingButtons() {
  return (
    <div className="floating-container">
      {/* WhatsApp */}
      <a
        href="https://wa.me/918792076681"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn whatsapp"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={22} />
      </a>

      {/* Call */}
      <a
        href="tel:+918792076681"
        className="floating-btn call"
        aria-label="Call Now"
      >
        <FaPhoneAlt size={20} />
      </a>

      {/* Instagram */}
      <a
        href="https://instagram.com/vridhhiassociates?igsh=MTUyOTIzOWOwZGdzMQ=="
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn instagram"
        aria-label="Visit Instagram"
      >
        <FaInstagram size={22} />
      </a>
    </div>
  );
}
