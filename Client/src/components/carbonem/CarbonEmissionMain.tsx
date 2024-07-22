import Sidebar from "../overlay/Sidebar";
import CarbonEmissionForm from "./carbonemission";
Sidebar;

const CarbonEmissionMain = () => {
  return (
    <div className="flex  overflow-hidden flex-col  items-center justify-center bg-[url('/src/components/Homepage/background.jpg')] bg-cover h-screen bg-center">
      <Sidebar />
      <CarbonEmissionForm />
    </div>
  );
};

export default CarbonEmissionMain;
