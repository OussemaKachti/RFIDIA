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
};

export function getSolution(slug) {
  return SOLUTIONS[slug];
}

export default SOLUTIONS;
