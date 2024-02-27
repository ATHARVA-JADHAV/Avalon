import React, { useState } from "react";
import Sidebar from "../overlay/Sidebar";
import EnergyForm from "./Energyform";

import "./energy.css";

const Energyinfo = () => {
  const [formData, setFormData] = useState<any>({});
  const [aiResponse, setAiResponse] = useState<string>(""); // State for AI response
  const [showData, setShowData] = useState(false);

  const handleFormData = (data: any) => {
    setFormData(data);
    setShowData(true);
  };

  return (
    <div className="background h-screen w-full">
      <EnergyForm onSubmit={handleFormData} setAiResponse={setAiResponse} /> {/* Pass setAiResponse as prop */}
      {showData && (
        
        <div className="flex flex-col w-full h-screen">
           <Sidebar />
          <div className="title flex w-full justify-center flex-col font-bold *:flex-col"><p>Appliance Name: {formData.appliances}</p>
            <p>Usage Hours: {formData.usageHours}</p></div>
          <div className="bg-white p-8 shadow-lg">
            <h1 className="font-bold text-xl mb-2">Form Data</h1>
            <p>Appliance Name: {formData.appliances}</p>
            <p>Usage Hours: {formData.usageHours}</p>
            {aiResponse && ( // Display AI response if available
              <div>
                <h2>AI Response:</h2>
                <p>{aiResponse}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Energyinfo;
