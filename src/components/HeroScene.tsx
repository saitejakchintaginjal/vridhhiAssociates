import "./HeroScene.css";

/**
 * Decorative background: a blueprint grid drifting across the hero and a
 * modern home that sketches itself line by line, then warms up with colour
 * and lit windows before the drawing resets. Purely visual.
 */
export default function HeroScene() {
  const p = { pathLength: 1 }; // lets every shape use the same dash length

  return (
    <div className="hero-scene" aria-hidden="true">
      <div className="hero-grid" />

      <svg
        className="hero-house-svg"
        viewBox="0 0 600 400"
        preserveAspectRatio="xMidYMax meet"
        fill="none"
      >
        {/* sun + drifting clouds (always moving) */}
        <g className="h-sun">
          <circle cx="540" cy="64" r="20" className="h-sun-core" />
          <g className="h-rays">
            {Array.from({ length: 12 }, (_, i) => (
              <line
                key={i}
                x1="540"
                y1="30"
                x2="540"
                y2="38"
                transform={`rotate(${i * 30} 540 64)`}
              />
            ))}
          </g>
        </g>
        <g className="h-cloud c1">
          <path d="M60 70 h70 a14 14 0 0 0 -8 -26 a20 20 0 0 0 -38 -6 a16 16 0 0 0 -24 32z" />
        </g>
        <g className="h-cloud c2">
          <path d="M280 40 h54 a11 11 0 0 0 -6 -20 a15 15 0 0 0 -30 -4 a12 12 0 0 0 -18 24z" />
        </g>

        <g className="house">
          {/* warm colour fills, revealed after the sketch */}
          <g className="h-fills">
            <rect x="120" y="250" width="300" height="130" className="f-wall" />
            <rect x="200" y="140" width="280" height="110" className="f-wall2" />
            <rect x="158" y="308" width="46" height="72" className="f-wood" />
            <rect x="250" y="285" width="110" height="62" className="f-glass" />
            <rect x="232" y="168" width="130" height="58" className="f-glass" />
            <rect x="392" y="168" width="56" height="58" className="f-glass" />
            <rect x="440" y="335" width="100" height="45" className="f-wall" />
            <circle cx="70" cy="300" r="34" className="f-leaf" />
          </g>

          {/* ground */}
          <line x1="30" y1="380" x2="590" y2="380" className="ln d1" {...p} />

          {/* structure */}
          <rect x="120" y="250" width="300" height="130" className="ln d1" {...p} />
          <rect x="200" y="140" width="280" height="110" className="ln d2" {...p} />
          <line x1="108" y1="250" x2="432" y2="250" className="ln bold d2" {...p} />

          {/* roof slab + parapet + terrace railing */}
          <rect x="190" y="128" width="300" height="12" className="ln bold d3" {...p} />
          <line x1="200" y1="116" x2="480" y2="116" className="ln d3" {...p} />
          <path d="M120 250 V232 H200 V250" className="ln d3" {...p} />

          {/* door, windows */}
          <rect x="158" y="308" width="46" height="72" className="ln d4" {...p} />
          <circle cx="196" cy="346" r="2.5" className="ln d4" {...p} />
          <rect x="250" y="285" width="110" height="62" className="ln d4" {...p} />
          <line x1="305" y1="285" x2="305" y2="347" className="ln d4" {...p} />
          <rect x="232" y="168" width="130" height="58" className="ln d4" {...p} />
          <line x1="297" y1="168" x2="297" y2="226" className="ln d4" {...p} />
          <rect x="392" y="168" width="56" height="58" className="ln d4" {...p} />

          {/* compound wall, tree, dimension line */}
          <rect x="440" y="335" width="100" height="45" className="ln d5" {...p} />
          <line x1="70" y1="380" x2="70" y2="332" className="ln d5" {...p} />
          <circle cx="70" cy="300" r="34" className="ln d5" {...p} />
          <path d="M200 92 H480 M200 86 V98 M480 86 V98" className="ln dim d5" {...p} />
          <text x="340" y="84" className="h-dim" textAnchor="middle">
            40 ft
          </text>

          {/* windows light up at the end */}
          <g className="h-glow">
            <rect x="250" y="285" width="110" height="62" />
            <rect x="232" y="168" width="130" height="58" />
            <rect x="392" y="168" width="56" height="58" />
          </g>
        </g>
      </svg>
    </div>
  );
}
