import SolutionTxlPage from "@components/it-solution/SolutionTxlPage";
import { getSolution } from "../../data/solutionsTxl/registry";

export default function RfidRetail() {
  const payload = getSolution("rfid-retail") || {};
  // Ensure the retail hero image is explicitly set for this page
  payload.heroImage = payload.heroImage || "/a_rfidia/z_rfid/retail.png";
  return <SolutionTxlPage {...payload} />;
}
