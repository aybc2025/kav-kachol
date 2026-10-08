// The painted lines of an NHL rink, drawn once in rink feet (200 × 85).
const END_DOTS = [[31, 20.5], [31, 64.5], [169, 20.5], [169, 64.5]];
const NEUTRAL_DOTS = [[80, 20.5], [80, 64.5], [120, 20.5], [120, 64.5]];

export function RinkMarkings() {
  return (
    <g aria-hidden="true">
      <line x1="11" y1="5" x2="11" y2="80" stroke="var(--red)" strokeWidth=".6" />
      <line x1="189" y1="5" x2="189" y2="80" stroke="var(--red)" strokeWidth=".6" />
      <rect x="74" y="1.7" width="2.2" height="81.6" fill="var(--blue)" />
      <rect x="123.8" y="1.7" width="2.2" height="81.6" fill="var(--blue)" />
      <rect x="99" y="1.7" width="2" height="81.6" fill="var(--red)" />
      <circle cx="100" cy="42.5" r="15" fill="none" stroke="var(--blue)" strokeWidth=".6" />
      <circle cx="100" cy="42.5" r="1" fill="var(--blue)" />
      <g fill="none" stroke="var(--red)" strokeWidth=".6">
        {END_DOTS.map(([x, y]) => (
          <circle key={`c${x}${y}`} cx={x} cy={y} r="15" />
        ))}
      </g>
      <g fill="var(--red)">
        {[...END_DOTS, ...NEUTRAL_DOTS].map(([x, y]) => (
          <circle key={`d${x}${y}`} cx={x} cy={y} r="1" />
        ))}
      </g>
      <path d="M11 36.5 A6 6 0 0 1 11 48.5 Z" fill="var(--crease)" stroke="var(--red)" strokeWidth=".5" />
      <path d="M189 36.5 A6 6 0 0 0 189 48.5 Z" fill="var(--crease)" stroke="var(--red)" strokeWidth=".5" />
      <rect x="7.5" y="39.5" width="3.5" height="6" fill="none" stroke="var(--ink)" strokeWidth=".6" />
      <rect x="189" y="39.5" width="3.5" height="6" fill="none" stroke="var(--ink)" strokeWidth=".6" />
    </g>
  );
}

export const ALL_DOTS = [[100, 42.5], ...END_DOTS, ...NEUTRAL_DOTS];
