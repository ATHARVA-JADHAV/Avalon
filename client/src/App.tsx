import Router from "./Router";
import { BrowserRouter } from "react-router-dom";
import { CarbonEmissionForm } from "./components/carbonem/carbonemission";

export default function App() {
  return (
    <div className="bg-black">
      <BrowserRouter>
        <Router />
        <CarbonEmissionForm />
      </BrowserRouter>
    </div>
  );
}
