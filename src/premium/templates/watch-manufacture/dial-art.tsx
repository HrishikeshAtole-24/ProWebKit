import type { Reference } from "./content";

/**
 * Vector portrait of a watch head, drawn from a reference's colours and
 * complication. Hands sit at 10:10, as in every watch advertisement since
 * the 1950s. Small seconds and the tourbillon cage genuinely turn.
 *
 * `uid` keeps gradient ids unique when several dials share a page.
 */
export function DialArt({
  uid,
  art,
  complication,
  className,
}: {
  uid: string;
  art: Reference["art"];
  complication: Reference["complication"];
  className?: string;
}) {
  const id = (name: string) => `${uid}-${name}`;
  const url = (name: string) => `url(#${id(name)})`;
  const sub = complication !== "time";
  // Positions covered by a complication lose their applied index.
  const hidden = new Set<number>(
    complication === "perpetual" ? [3, 6, 9] : complication === "time" ? [] : [6],
  );

  const hand = (length: number, width: number, angle: number) => (
    <polygon
      points={`0,${width * 1.4} ${width / 2},0 0,${-length} ${-width / 2},0`}
      fill={art.hands}
      transform={`rotate(${angle})`}
    />
  );

  const subdial = (cx: number, cy: number, r: number, angle: number, spin?: boolean) => (
    <g transform={`translate(${cx} ${cy})`}>
      <circle r={r} fill="black" opacity={0.08} />
      <circle r={r} fill="none" stroke={art.print} strokeOpacity={0.55} strokeWidth={0.8} />
      {Array.from({ length: 30 }, (_, i) => (
        <line
          key={i}
          y1={-r + 2}
          y2={-r + (i % 5 === 0 ? 7 : 4)}
          stroke={art.print}
          strokeWidth={i % 5 === 0 ? 1.1 : 0.6}
          transform={`rotate(${i * 12})`}
        />
      ))}
      <g className={spin ? "pm-spin pm-origin" : undefined}>
        <g transform={`rotate(${angle})`}>
          <line y1={4} y2={-r + 5} stroke={art.hands} strokeWidth={1.4} />
          <rect x={-r} y={-r} width={r * 2} height={r * 2} fill="none" />
        </g>
      </g>
      <circle r={2.2} fill={art.hands} />
    </g>
  );

  return (
    <svg viewBox="-215 -215 430 430" className={className} role="img" aria-label="Watch dial illustration">
      <defs>
        <radialGradient id={id("dial")} cx="50%" cy="30%" r="75%">
          <stop offset="0%" stopColor={art.dial[0]} />
          <stop offset="100%" stopColor={art.dial[1]} />
        </radialGradient>
        <linearGradient id={id("metal")} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={art.metal[0]} />
          <stop offset="45%" stopColor={art.metal[1]} />
          <stop offset="70%" stopColor={art.metal[0]} />
          <stop offset="100%" stopColor={art.metal[1]} />
        </linearGradient>
        <linearGradient id={id("bezel")} x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={art.metal[0]} />
          <stop offset="50%" stopColor={art.metal[1]} />
          <stop offset="100%" stopColor={art.metal[0]} />
        </linearGradient>
        <linearGradient id={id("glass")} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="white" stopOpacity={0.28} />
          <stop offset="40%" stopColor="white" stopOpacity={0.04} />
          <stop offset="100%" stopColor="white" stopOpacity={0} />
        </linearGradient>
        <clipPath id={id("clip")}>
          <circle r={168} />
        </clipPath>
      </defs>

      {/* Crown and case */}
      <rect x={186} y={-16} width={20} height={32} rx={4} fill={url("metal")} />
      <circle r={196} fill={url("metal")} />
      <circle r={184} fill={url("bezel")} />
      <circle r={172} fill={url("metal")} />
      <circle r={168} fill={url("dial")} />

      <g clipPath={url("clip")}>
        {/* Sunburst brushing */}
        <g stroke="white" strokeOpacity={0.06} strokeWidth={0.6}>
          {Array.from({ length: 180 }, (_, i) => (
            <line key={i} y2={-170} transform={`rotate(${i * 2})`} />
          ))}
        </g>
      </g>

      {/* Minute track */}
      <circle r={158} fill="none" stroke={art.print} strokeOpacity={0.6} strokeWidth={0.8} />
      {Array.from({ length: 60 }, (_, i) => (
        <line
          key={i}
          y1={-158}
          y2={i % 5 === 0 ? -148 : -152}
          stroke={art.print}
          strokeWidth={i % 5 === 0 ? 1.6 : 0.8}
          transform={`rotate(${i * 6})`}
        />
      ))}

      {/* Applied indices */}
      {Array.from({ length: 12 }, (_, i) =>
        hidden.has(i) ? null : (
          <g key={i} transform={`rotate(${i * 30})`}>
            {(i === 0 ? [-6, 6] : [0]).map((dx) => (
              <rect
                key={dx}
                x={dx - 3.5}
                y={-142}
                width={7}
                height={i % 3 === 0 ? 30 : 24}
                rx={1}
                fill={url("metal")}
                stroke="black"
                strokeOpacity={0.25}
                strokeWidth={0.5}
              />
            ))}
          </g>
        ),
      )}

      {/* Printing */}
      <text
        y={-78}
        textAnchor="middle"
        fill={art.print}
        fontSize={19}
        letterSpacing={5}
        style={{ fontFamily: "var(--pm-font-display), Georgia, serif" }}
      >
        VALDÈRE
      </text>
      <text
        y={-63}
        textAnchor="middle"
        fill={art.print}
        fontSize={5.5}
        letterSpacing={2.6}
        style={{ fontFamily: "var(--pm-font-body), sans-serif" }}
      >
        LE BRASSUS
      </text>
      {!sub && (
        <text
          y={70}
          textAnchor="middle"
          fill={art.print}
          fontSize={13}
          fontStyle="italic"
          style={{ fontFamily: "var(--pm-font-display), Georgia, serif" }}
        >
          Heure Bleue
        </text>
      )}

      {/* Complications */}
      {complication === "small-seconds" && subdial(0, 80, 38, 0, true)}
      {complication === "perpetual" && (
        <>
          {subdial(-78, 8, 32, 140)}
          {subdial(78, 8, 32, 250)}
          {subdial(0, 86, 34, 40)}
        </>
      )}
      {complication === "moonphase" && (
        <g transform="translate(0 84)">
          <path d="M -46 0 A 46 46 0 0 1 46 0 Z" fill="#1b2a55" stroke={art.print} strokeWidth={0.8} />
          <circle cx={-12} cy={-22} r={15} fill="#e9cf8e" />
          {[
            [18, -28],
            [30, -12],
            [-34, -8],
            [8, -38],
          ].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r={1.3} fill="#e9cf8e" />
          ))}
          <path d="M -46 0 A 23 23 0 0 1 -23 -8 A 23 23 0 0 1 0 0 A 23 23 0 0 1 23 -8 A 23 23 0 0 1 46 0 Z" fill={art.dial[0]} />
        </g>
      )}
      {complication === "tourbillon" && (
        <g transform="translate(0 84)">
          <circle r={48} fill="#0c0c0e" stroke={url("metal")} strokeWidth={3} />
          <g className="pm-spin pm-origin">
            <circle r={40} fill="none" stroke="#9aa0a8" strokeWidth={0.8} strokeOpacity={0.5} />
            {[0, 120, 240].map((a) => (
              <path key={a} d="M 0 0 L 0 -38 L 6 -38" stroke={url("metal")} strokeWidth={3} fill="none" transform={`rotate(${a})`} />
            ))}
            <g className="pm-spin-fast pm-origin">
              <circle r={22} fill="none" stroke="#d6d8dc" strokeWidth={2} />
              {[0, 90].map((a) => (
                <line key={a} x1={-22} x2={22} stroke="#d6d8dc" strokeWidth={1.2} transform={`rotate(${a})`} />
              ))}
            </g>
            <circle r={4} fill="#a3122b" />
          </g>
        </g>
      )}

      {/* Hands at 10:10 */}
      {hand(92, 11, -60)}
      {hand(140, 8, 60)}
      {complication === "time" && (
        <g>
          <line y1={30} y2={-150} stroke={art.hands} strokeWidth={1.2} transform="rotate(200)" />
        </g>
      )}
      <circle r={5.5} fill={url("metal")} />

      {/* Crystal reflection */}
      <path d="M -150 -60 A 160 160 0 0 1 60 -152 A 190 190 0 0 0 -150 -60 Z" fill={url("glass")} />
      <circle r={168} fill={url("glass")} opacity={0.35} />
    </svg>
  );
}
