import { Route, Routes } from "react-router-dom";
import "./App.css";
import AuthenticationPage from "./components/authentication/AuthenticationPage";
import { Dashboard } from "./components/dashboard/Dashboard";
import Energyinfo from "./components/Energyconservation/Energyinfo";
import Homepage from "./components/Homepage/Homepage";
import ProductsImpact from "./components/ProductsImpact/ProductsImpact";

import Blog from "./components/Blogs/Blogpage";
import CarbonEmissionMain from "./components/carbonem/CarbonEmissionMain";
CarbonEmissionMain


export default function Router(){
  return (
      <Routes>
        
        <Route path="/energy" element={<Energyinfo/>}/>
<Route path="/auth" element={<AuthenticationPage/>}/>
<Route path="/dashboard" element={<Dashboard/>}/>
<Route path="/" element={<Homepage/>}/>
<Route path="/products" element={<ProductsImpact/>}/>

<Route path="/carbon" element={<CarbonEmissionMain/>}/>
<Route path="/blogs" element={<Blog/>}/>

      </Routes>
  );
};