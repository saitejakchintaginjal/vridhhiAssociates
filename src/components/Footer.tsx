import "./Footer.css";

const links = [
  "home",
  "about",
  "services",
  "projects",
  "contact",
  "faq",
];

const label = (l: string) =>
  l === "faq" ? "FAQ" : l.charAt(0).toUpperCase() + l.slice(1);

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h3>Vridhhi Associates</h3>
          <p>
            Construction and waterproofing company in Hubli, delivering
            residential and commercial projects with precision, durability and
            on-time execution.
          </p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul>
            {links.map((l) => (
              <li key={l}>
                <a href={`#${l}`}>{label(l)}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <ul>
            <li>
              <a href="tel:918792076681">+91 87920 76681</a>
            </li>
            <li>
              <a href="mailto:vridhhiassociate@gmail.com">
                vridhhiassociate@gmail.com
              </a>
            </li>
            <li>B-14 Marvel Artiza, Opp Kim's, Vidya Nagar, Hubli</li>
            <li>Mon – Sat · 10 AM – 8 PM</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Vridhhi Associates. All rights reserved.
      </div>
    </footer>
  );
}
