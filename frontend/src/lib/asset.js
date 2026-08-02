// Prefixes public asset paths with the app base path (PUBLIC_URL),
// so they resolve correctly on GitHub Pages project sites (e.g. /Wedding/).
export const asset = (p) => `${process.env.PUBLIC_URL}${p}`;
