const phone = "919999999999";

const FloatingButtons = () => (
  <div
    style={{
      position: "fixed",
      bottom: 20,
      right: 20,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      zIndex: 999,
    }}
  >
    <a href={`https://wa.me/${phone}`}>
      <img
        width="50"
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
      />
    </a>

    <a href={`tel:${phone}`}>
      <img
        width="50"
        src="https://upload.wikimedia.org/wikipedia/commons/8/8c/Phone_font_awesome.svg"
      />
    </a>
  </div>
);

export default FloatingButtons;
