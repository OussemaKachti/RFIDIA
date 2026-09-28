import education from "./education";
import warehouse from "./warehouse";
import assetTracking from "./assetTracking";
import healthcare from "./healthcare";
import hospitality from "./hospitality";
import retail from "./retail";
import manufacturing from "./manufacturing";
import oilGas from "./oilGas";
import dataCenter from "./dataCenter";
import government from "./government";
import itAsset from "./itAsset";
import rfidiaTex from "./rfidiaTex";

const SOLUTIONS = {
  "solution-ecole": education,
  "solution-entrepot": warehouse,
  "solution-gestion-actifs": assetTracking,
  "solution-sante": healthcare,
  "solution-hotellerie": hospitality,
  "rfid-retail": retail,
  "rfid-manufacturing": manufacturing,
  "rfid-oil-gas": oilGas,
  "rfid-data-center": dataCenter,
  "rfid-government": government,
  "rfid-it-asset-management": itAsset,
  "rfidia-tex": rfidiaTex,
};

// Returns a copy (callers may override fields such as heroImage) tagged with its
// slug, used by <SolutionTxlPage /> to load the page's local SEO content.
export function getSolution(slug) {
  const solution = SOLUTIONS[slug];
  return solution ? { ...solution, slug } : undefined;
}

export default SOLUTIONS;
