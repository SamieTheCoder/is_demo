/**
 * Icon set. Authored rather than pulled from a library because the project has
 * no icon dependency and these are the only four glyphs the page needs.
 *
 * One geometry for all of them: 24x24 viewBox, 2.25 stroke, round caps and
 * joins, no fills. Keeping those constant is what makes them read as a family
 * instead of clip art. `currentColor` so each call site controls colour.
 */

interface IconProps {
  size?: number;
  className?: string;
}

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2.25,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  focusable: false,
};

export function IconCheck({ size = 16, className = "" }: IconProps) {
  return (
    <svg {...base} width={size} height={size} className={className}>
      <path d="M4 12.5l5 5L20 6.5" />
    </svg>
  );
}

export function IconCross({ size = 16, className = "" }: IconProps) {
  return (
    <svg {...base} width={size} height={size} className={className}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export function IconArrowRight({ size = 16, className = "" }: IconProps) {
  return (
    <svg {...base} width={size} height={size} className={className}>
      <path d="M4 12h15M13 6l6 6-6 6" />
    </svg>
  );
}

export function IconPlay({ size = 20, className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden
      focusable={false}
      className={className}
    >
      <path d="M9 6.5v11a1 1 0 0 0 1.5.87l9-5.5a1 1 0 0 0 0-1.74l-9-5.5A1 1 0 0 0 9 6.5z" />
    </svg>
  );
}
