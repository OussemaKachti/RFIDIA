import SolutionTxlPage from "@components/it-solution/SolutionTxlPage";
import { getSolution } from "../../data/solutionsTxl/registry";

export default function RfidGovernment() {
  return <SolutionTxlPage {...getSolution("rfid-government")} />;
}
