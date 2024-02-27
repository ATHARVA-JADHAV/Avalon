import Router from "./Router";
import { BrowserRouter } from "react-router-dom";
<<<<<<< Updated upstream

=======
// import EnergyForm from "./components/Energyconservation/Energyform";
import CarbonEmissionForm from "./components/carbonem/carbonemission";
>>>>>>> Stashed changes

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Router />
<<<<<<< Updated upstream

=======
        {/* <EnergyForm /> */}
        <CarbonEmissionForm></CarbonEmissionForm>
>>>>>>> Stashed changes
      </BrowserRouter>
    </>
  );
}
