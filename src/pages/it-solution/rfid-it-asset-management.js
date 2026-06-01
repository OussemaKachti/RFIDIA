import SolutionTxlPage from "@components/it-solution/SolutionTxlPage";
import { getSolution } from "../../data/solutionsTxl/registry";

export default function RfidItAssetManagement() {
  return <SolutionTxlPage {...getSolution("rfid-it-asset-management")} />;
}
