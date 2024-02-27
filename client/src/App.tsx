import Router from "./Router";
import { BrowserRouter } from "react-router-dom";
// import EnergyForm from "./components/Energyconservation/Energyform";
import CarbonEmissionForm from "./components/carbonem/carbonemission";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Router />
        {/* <EnergyForm /> */}
        <CarbonEmissionForm></CarbonEmissionForm>
      </BrowserRouter>
    </>
  );
}
