// Prefixes public asset paths with the app base path (PUBLIC_URL),
// so they resolve correctly on GitHub Pages project sites (e.g. /Wedding/).
// Absolute URLs (http/https) are returned unchanged.
export const asset = (p) =>
  /^https?:\/\//.test(p) ? p : `${process.env.PUBLIC_URL}${p}`;