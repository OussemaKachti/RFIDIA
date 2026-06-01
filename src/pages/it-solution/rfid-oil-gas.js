import SolutionTxlPage from "@components/it-solution/SolutionTxlPage";
import { getSolution } from "../../data/solutionsTxl/registry";

export default function RfidOilGas() {
  const payload = getSolution("rfid-oil-gas") || {};
  // Ensure the oil & gas hero image is explicitly set for this page
  payload.heroImage = payload.heroImage || "/a_rfidia/z_rfid/rfid11.png";
  return <SolutionTxlPage {...payload} />;
}
