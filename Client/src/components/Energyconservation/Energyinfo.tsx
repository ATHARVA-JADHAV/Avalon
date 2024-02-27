import React, { useState } from "react";
import Sidebar from "../overlay/Sidebar";
import { GoogleGenerativeAI } from "@google/generative-ai";
import EnergyForm from "./Energyform";
import { LineChart } from '@mui/x-charts/LineChart';
import "./energy.css";

const API_KEY = "AIzaSyAAO4E-Bqpu4Nr8UHwnmn7bAVxK6odumEE";
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });
const Energyinfo: React.FC = () => {
  const [formData, setFormData] = useState<any>({});
  const [aiResponse, setAiResponse] = useState<string>("");
  const [aiResponsenew, setAiResponsenew] = useState<string>("");
  const [links, setLinks] = useState<string>("");
  const [showData, setShowData] = useState(false);
  const [chartData, setChartData] = useState<{ name: string; value: number }[]>([]);

  const handleFormData = async (data: any) => {
    setFormData(data);
    setShowData(true);

    try {
      const inputText = `Offer educational content on the environmental impact of energy consumption and the benefits of energy conservation. based on Appliance ${data.appliances} for ${data.usageHours} how the impact happens when we use their green alternative give short summary of 50 words and remove **`;
      const inputLinks = `calculate the carbon emitted and energy conserved for the graph in short also show the calculations and remove **`;
      const result = await model.generateContent(inputText);
      const result2 = await model.generateContent(inputLinks);
      const text = result.response.text();
      const text2 = result2.response.text();

      setAiResponsenew(text);
      setLinks(text2);  // Set the AI response
      setChartData(calculateImpactData(data.appliances, data.usageHours)); // Calculate and set chart data
    } catch (error) {
      console.error("generateContent error: ", error);
    }
  };

  const calculateImpactData = (appliances: string, usageHours: string): { name: string; value: number }[] => {
    // Calculate the environmental impact based on the user's input
    const powerConsumption = 65; // Assuming power consumption of the appliance in watts
    const usage = parseFloat(usageHours);
    const dataPoints = [];
    for (let i = 1; i <= usage; i++) {
      const environmentalImpact = (powerConsumption * i) / 1000; // Assuming power consumption is in watts
      dataPoints.push({ name: `Hour ${i}`, value: environmentalImpact });
    }
    return dataPoints;
  };

  return (
    <div className="h-screen w-full">
      <EnergyForm onSubmit={handleFormData} setAiResponse={setAiResponse} />
      {showData && (
        <div className="flex flex-col w-full h-screen">
          <Sidebar />
          <div className="title flex w-full items-center justify-center flex-col font-bold">
            <p>Appliance Name: {formData.appliances}</p>
            <p>Usage Hours: {formData.usageHours}</p>
          </div>
          <div className="p-8">
            {aiResponse && (
              <div className="border m-4 p-4 rounded-md w-fit h-fit font-mono text-sm">
                <h1 className="text-xl">Analysis</h1>
                <p>{aiResponse}</p>
              </div>
            )}
            <div className="flex flex-row w-full">
              <div className="border m-4 p-4 rounded-md w-3/5 h-fit font-mono text-sm">
                <h1 className="text-xl">Calculations</h1>
                <p>{links}</p>
              </div>
              <div className="border m-4 p-4 rounded-md w-3/5 h-fit font-mono text-sm">



              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Energyinfo;