import { useCallback, useEffect, useState } from "react";
import "./Projects.css";
import useInView from "../hooks/useInView";

type Project = {
  type: string;
  location: string;
  status: "Ongoing" | "Completed";
  /** first image is the main render; extra images (site photos) fill the side column */
  images: string[];
};

const projects: Project[] = [
  {
    type: "Residential",
    location: "Sulla Road, Hubli",
    status: "Ongoing",
    images: ["/projects/project2.jpg"],
  },
  {
    type: "Residential",
    location: "Sangoli Rayanna Nagar, Hubli",
    status: "Completed",
    images: ["/projects/project3.jpg"],
  },
  {
    type: "Residential",
    location: "Kuberapuram, Hubli",
    status: "Completed",
    images: ["/projects/project4.webp"],
  },
];

/* design portfolio: every project render, opened full size in a lightbox */
const gallery = [
  { src: "/projects/project1.webp", alt: "Vridhhi Associates elevation design" },
  { src: "/projects/design-1.jpg", alt: "Modern two-storey elevation with glass balcony" },
  { src: "/projects/design-2.jpg", alt: "Contemporary two-storey elevation with open staircase" },
  { src: "/projects/design-3.jpg", alt: "Single-storey elevation with lit jaali panel" },
  ...projects.map((p) => ({
    src: p.images[0],
    alt: `Residential project - ${p.location}`,
  })),
];

export default function Projects() {
  const { ref, inView } = useInView<HTMLDivElement>(0.12);
  const { ref: galRef, inView: galInView } = useInView<HTMLDivElement>(0.12);
  const [open, setOpen] = useState<number | null>(null);

  const step = useCallback(
    (dir: number) =>
      setOpen((i) =>
        i === null ? i : (i + dir + gallery.length) % gallery.length,
      ),
    [],
  );

  useEffect(() => {
    if (open === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, step]);

  return (
    <>
      <section id="projects" className="section-light">
        <div className="container">
          <div className="pro-heading">
            <span className="pro-eyebrow">Our Projects</span>
            <h2>From design to reality</h2>
            <p>
              Selected construction and renovation works delivered with
              precision across Hubli.
            </p>
          </div>

          <div
            ref={ref}
            className={`pj-grid reveal-grid ${inView ? "in-view" : ""}`}
          >
            {projects.map((p, i) => (
              <article
                key={p.images[0]}
                className="pj"
                style={{ "--i": i } as React.CSSProperties}
              >
                <div
                  className={`pj-media ${p.images.length > 1 ? "multi" : ""}`}
                >
                  {p.images.map((src, n) => (
                    <figure key={src} className={n === 0 ? "main" : ""}>
                      <img
                        src={src}
                        alt={`Residential project - ${p.location}`}
                        loading="lazy"
                        decoding="async"
                      />
                      <figcaption className={n === 0 ? "d" : ""}>
                        {n === 0 ? p.type : "On Site"}
                      </figcaption>
                    </figure>
                  ))}
                </div>

                <div className="pj-info">
                  <div>
                    <h3>{p.location}</h3>
                    <p>{p.type} project</p>
                  </div>
                  <span
                    className={`pj-status ${
                      p.status === "Completed" ? "done" : "going"
                    }`}
                  >
                    {p.status}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pj-gallery-section">
        <div className="container">
          <div className="pro-heading">
            <span className="pro-eyebrow">Design Gallery</span>
            <h2>Spaces designed to be lived in</h2>
            <p>Tap any design to see it up close.</p>
          </div>

          <div
            ref={galRef}
            className={`pj-gal reveal-grid ${galInView ? "in-view" : ""}`}
          >
            {gallery.map((g, i) => (
              <button
                key={g.src}
                type="button"
                style={{ "--i": i } as React.CSSProperties}
                onClick={() => setOpen(i)}
                aria-label={`View ${g.alt} full size`}
              >
                <img src={g.src} alt={g.alt} loading="lazy" decoding="async" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {open !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Design preview"
          onClick={() => setOpen(null)}
        >
          <button
            type="button"
            className="lb-close"
            aria-label="Close"
            onClick={() => setOpen(null)}
          >
            ×
          </button>
          <button
            type="button"
            className="lb-nav prev"
            aria-label="Previous design"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
          >
            ‹
          </button>
          <img
            src={gallery[open].src}
            alt={gallery[open].alt}
            onClick={(e) => e.stopPropagation()}
          />
          <button
            type="button"
            className="lb-nav next"
            aria-label="Next design"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
