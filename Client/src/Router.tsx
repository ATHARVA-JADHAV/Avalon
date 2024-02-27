import { Route, Routes } from "react-router-dom";
import "./App.css";
import AuthenticationPage from "./components/authentication/AuthenticationPage";
import { Dashboard } from "./components/dashboard/Dashboard";
import Energyinfo from "./components/Energyconservation/Energyinfo";
import Homepage from "./components/Homepage/Homepage";



export default function Router(){
  return (

      <Routes>
        <Route path="/energy" element={<Energyinfo/>}/>
<Route path="/auth" element={<AuthenticationPage/>}/>
<Route path="/dashboard" element={<Dashboard/>}/>
<Route path="/home" element={<Homepage/>}/>
      </Routes>

  );
};