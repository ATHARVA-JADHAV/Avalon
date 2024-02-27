import { Route, Routes } from "react-router-dom";
import "./App.css";
import AuthenticationPage from "./components/authentication/AuthenticationPage";
import { Dashboard } from "./components/dashboard/Dashboard";
import Energyinfo from "./components/Energyconservation/Energyinfo";


export default function Router(){
  return (

      <Routes>
        <Route path="/energy" element={<Energyinfo/>}/>
<Route path="/auth" element={<AuthenticationPage/>}/>
<Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>

  );
};