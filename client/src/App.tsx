import Router from "./Router";
import { BrowserRouter } from "react-router-dom";
<<<<<<< Updated upstream
// import EnergyForm from "./components/Energyconservation/Energyform";
// import CarbonEmissionForm from "./components/carbonem/carbonemission";
import Activities from "./components/activity/Activities";
=======
import { AuthContextProvider } from "./context/AuthContext";
import Sidebar from "./components/overlay/Sidebar";


>>>>>>> Stashed changes

export default function App() {
  return (
    <>
       <AuthContextProvider>  
    
        <BrowserRouter>
        <Router />
<<<<<<< Updated upstream
        {/* <EnergyForm /> */}
        <Activities />
        {/* <CarbonEmissionForm></CarbonEmissionForm> */}
      </BrowserRouter>
=======

      </BrowserRouter></AuthContextProvider>

>>>>>>> Stashed changes
    </>
  );
}
