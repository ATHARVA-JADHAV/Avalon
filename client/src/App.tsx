import Router from "./Router";
import { BrowserRouter, } from "react-router-dom";


export default function App() {
  return (
    <div className="bg-black"> 
<BrowserRouter>
          <Router />
        </BrowserRouter>
    </div>
  )
}
