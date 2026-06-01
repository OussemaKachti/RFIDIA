/**
 * RFIDIA — Helpers for building a typed payload for <SolutionTxlPage />.
 *
 * Each solution data file calls:
 *   buildSolution(theme, heroImage, copy)
 * and exports the resulting payload, which is then spread as props on
 * the generic <SolutionTxlPage {...payload} />.
 */

/**
 * Build a coherent accent palette from three brand colors.
 *  @param {string} primary    - main accent (hex)
 *  @param {string} secondary  - lighter accent for highlights/glows
 *  @param {string} dark       - deep tone for CTAs and bold text
 */
export function makeTheme(primary, secondary, dark) {
  return {
    primary,
    secondary,
    dark,
    softTint: hexToRgba(primary, 0.08),
    glow: hexToRgba(secondary, 0.35),
  };
}

/** Bundle theme + asset + multilingual copy as the page's props. */
export function buildSolution(theme, heroImage, copy) {
  return { theme, heroImage, copy };
}

/* ---------- internal ---------- */
function hexToRgba(hex, alpha) {
  const h = hex.replace("#", "");
  const v =
    h.length === 3
      ? h
          .split("")
          .map((c) => c + c)
          .join("")
      : h;
  const r = parseInt(v.substring(0, 2), 16);
  const g = parseInt(v.substring(2, 4), 16);
  const b = parseInt(v.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
