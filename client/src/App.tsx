import Router from "./Router";
import { BrowserRouter } from "react-router-dom";
import EnergyForm from "./components/Energyconservation/Energyform";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Router />
        <EnergyForm />
      </BrowserRouter>
    </>
  );
}
