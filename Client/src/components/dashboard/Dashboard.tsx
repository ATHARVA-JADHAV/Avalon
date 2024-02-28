import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../overlay/Sidebar";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { UserAuth } from "@/context/AuthContext";


const tips = [
  'Use reusable shopping bags to reduce plastic waste.',
  'Turn off lights and unplug electronics when not in use to save energy.',
  'Walk, bike, or use public transportation instead of driving alone.',
  'Reduce water waste by fixing leaks and taking shorter showers.',
  'Buy locally produced food to reduce carbon emissions from transportation.',
  'Plant trees and support reforestation efforts to offset carbon emissions.',
  'Use energy-efficient appliances and light bulbs to save electricity.',
  'Recycle paper, plastic, glass, and metal to reduce landfill waste.',
  'Compost food scraps to reduce methane emissions from landfills.',
  'Support sustainable brands and products that prioritize environmental conservation.'
];

export const Dashboard = () => {
  const { user, logOut } = UserAuth();
  const [tipIndex, setTipIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const newIndex = Math.floor(Math.random() * tips.length);
    setTipIndex(newIndex);
  }, []);

  const LogOut = () => {
    logOut();
    navigate("/");
  };

  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-row items-end justify-end w-full">
        <Sidebar />
        <Button onClick={LogOut} className="w-32 m-2">
          Log Out
        </Button>
      </div>
      <div className="flex background flex-col">
        <Card className="w-25  m-4 h-fit p-4">{tips[tipIndex]}</Card>
        <div className="flex flex-row"><Card className="w-30 m-4 h-fit p-4"><a href='./carbon'>Carbon Emission Calculator</a></Card>
        <Card className="w-30  m-4 h-100  p-4"><a href="./energy">Energy Conservatio Analysis</a></Card>
        <Card className="w-30  m-4 h-fit p-4"><a href="./products">Product Impact Analysis</a></Card>
        <Card className="w-30  m-4 h-fit p-4"><a href="./activities">Activities</a></Card>
        <Card className="w-30  m-4 h-fit p-4"><a href="./Blogs">Blogs</a></Card>
</div>
        
        
      </div>
    </div>
  );
};
