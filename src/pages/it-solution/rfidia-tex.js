import SolutionTxlPage from "@components/it-solution/SolutionTxlPage";
import { getSolution } from "../../data/solutionsTxl/registry";

export default function RfidiaTex() {
  return <SolutionTxlPage {...getSolution("rfidia-tex")} />;
}
