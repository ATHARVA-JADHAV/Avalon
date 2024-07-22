import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../overlay/Sidebar";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { UserAuth } from "@/context/AuthContext";

const Reminder = ({ text }: { text: string }) => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  return (
    <li className="flex items-center">
      <input
        type="checkbox"
        className="form-checkbox h-5 w-5 mr-2 text-blue-600"
        checked={checked}
        onChange={handleCheckboxChange}
      />
      <span>{text}</span>
    </li>
  );
};

const tips = [
  "Use reusable shopping bags to reduce plastic waste.",
  "Turn off lights and unplug electronics when not in use to save energy.",
  "Walk, bike, or use public transportation instead of driving alone.",
  "Reduce water waste by fixing leaks and taking shorter showers.",
  "Buy locally produced food to reduce carbon emissions from transportation.",
  "Plant trees and support reforestation efforts to offset carbon emissions.",
  "Use energy-efficient appliances and light bulbs to save electricity.",
  "Recycle paper, plastic, glass, and metal to reduce landfill waste.",
  "Compost food scraps to reduce methane emissions from landfills.",
  "Support sustainable brands and products that prioritize environmental conservation.",
];

const Dashboard = () => {
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
    <div className="h-screen bg-[url('/src/components/Homepage/background.jpg')] flex flex-col">
      <div className="flex flex-row items-end justify-end w-full">
        <Sidebar />
        <Button onClick={LogOut} className="w-32 m-2">
          Log Out
        </Button>
      </div>
      <div className="flex flex-col items-center ">
        <h1 className="m-4 text-4xl font-sans text-white font-bold">
          🌱Dashboard
        </h1>
        <Card className="w-fit m-4 h-fit border-none p-4">
          {tips[tipIndex]}
        </Card>
        <div className="flex items-center justify-center ">
          <Card className="w-fit font-sans bg-slate-400 font-bold text-2xl flex gap-2 items-center justify-center m-4 h-24 p-8 ">
            <a href="./carbon">Carbon Emission Calculator</a>
          </Card>
          <Card className="w-fit  flex font-sans  bg-slate-400 font-bold text-2xl  m-4 items-center justify-center h-24 p-4">
            <a href="./energy">Energy Conservation Analysis</a>
          </Card>
          <Card className="w-fit m-4 flex  bg-slate-400 font-sans font-bold text-2xl items-center justify-center h-24 p-4">
            <a href="./products">Product Impact Analysis</a>
          </Card>

          <Card className="w-40 m-4 flex bg-slate-400  font-sans font-bold text-2xl items-center justify-center h-24 p-4">
            <a href="./Blogs">Blogs</a>
          </Card>
        </div>
        <div className="flex items-start ">
          <Card className="w-fit m-4 h-fit p-12">
            <h2 className="text-xl font-bold">🌵Daily Reminders</h2>
            <ul>
              <Reminder text="Turn off lights when leaving a room to save energy and reduce carbon emissions.\mn" />
              <Reminder text="Recycle paper, plastic, glass, and metal to reduce landfill waste." />
              <Reminder text="Use a reusable water bottle to cut down on single-use plastic waste." />
              <Reminder text="Take shorter showers to conserve water and energy." />
              <Reminder text="Choose locally sourced produce to support sustainable agriculture and reduce transportation emissions." />
              <Reminder text="Opt for electronic statements and bills to reduce paper usage and save trees." />
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
