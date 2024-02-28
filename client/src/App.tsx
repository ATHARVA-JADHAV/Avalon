// import Router from "./Router";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import Activities from "./components/activity/Activities";
// import Sidebar from "./components/overlay/Sidebar";

export default function App() {
  return (
    <>
      <AuthContextProvider>
        <BrowserRouter>
          {/* <Router /> */}
          {/* <Sidebar */}
          <Activities />
        </BrowserRouter>
      </AuthContextProvider>
    </>
  );
}
