import Sidebar from "../overlay/Sidebar";
import { Card } from "../ui/card";


export const Dashboard = () => {
  return (
    <div className="h-screen w-full">
      <div className="">
        <Sidebar />
      </div>
      <Card className="w-fit h-fit"> Hello</Card>
    </div>
  );
};
