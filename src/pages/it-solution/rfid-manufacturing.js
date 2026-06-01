import SolutionTxlPage from "@components/it-solution/SolutionTxlPage";
import { getSolution } from "../../data/solutionsTxl/registry";

export default function RfidManufacturing() {
  return <SolutionTxlPage {...getSolution("rfid-manufacturing")} />;
}
