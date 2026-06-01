import SolutionTxlPage from "@components/it-solution/SolutionTxlPage";
import { getSolution } from "../../data/solutionsTxl/registry";

export default function RfidDataCenter() {
  return <SolutionTxlPage {...getSolution("rfid-data-center")} />;
}
