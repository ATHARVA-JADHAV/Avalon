import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/Homepage/Homepage";
import Dashboard from "./components/dashboard/Dashboard";
import Energyinfo from "./components/Energyconservation/Energyinfo";
import AuthenticationPage from "./components/authentication/AuthenticationPage";
import ProductsImpact from "./components/ProductsImpact/ProductsImpact";
import Blog from "./components/Blogs/Blogpage";
import Activities from "./components/activity/Activities";
import CarbonEmissionMain from "./components/carbonem/CarbonEmissionMain";

// import Sidebar from "./components/overlay/Sidebar";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/energy" element={<Energyinfo />} />
        <Route path="/auth" element={<AuthenticationPage />} />
        <Route path="/products" element={<ProductsImpact />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/carbon" element={<CarbonEmissionMain />} />
      </Routes>
    </Router>
  );
}
