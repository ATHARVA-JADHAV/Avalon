import React, { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { GoogleGenerativeAI } from "@google/generative-ai";
import "./energy.css";

const API_KEY = "AIzaSyAAO4E-Bqpu4Nr8UHwnmn7bAVxK6odumEE";
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

const EnergyForm: React.FC<{ onSubmit: (data: any) => void; setAiResponse: (response: string) => void }> = ({ onSubmit, setAiResponse }) => {
  const [formData, setFormData] = useState({
    usageHours: "",
    appliances: "",
  });

  const [isVisible, setIsVisible] = useState(true);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsVisible(false);
    const { appliances, usageHours } = formData;
    if (!appliances || !usageHours) {
      return;
    }

    try {
      const inputText = `Appliance ${appliances} for ${usageHours} hours give output :impact of the user's electricity consumption in terms of CO2 emissions or equivalent environmental metrics.give short summary of 50 words and remove ** 
`;

      const result = await model.generateContent(inputText);
      const text = result.response.text();

      setAiResponse(text); // Set the AI response
      onSubmit(formData);
      setIsVisible(false);
    } catch (error) {
      console.error("generateContent error: ", error);
    }
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div>
      <div className="fixed background top-0 left-0 w-full h-screen flex items-center justify-center bg-opacity-50">
        <form onSubmit={handleSubmit} className="p-10 rounded-lg bg-white shadow-lg">
          <h1 className="font-bold text-xl mr-2 mb-2">Enter the Details </h1>
          <div className="grid w-full gap-2">
            <label htmlFor="appliances" className="text-black">
              Enter The Appliance Name
            </label>
            <Textarea
              id="appliances"
              placeholder="Please enter the appliance name"
              name="appliances"
              value={formData.appliances}
              onChange={handleChange}
              className="w-full border-gray-300 resize-none text-black rounded-md"
            />
            <label htmlFor="usageHours" className="text-black">
              Enter The Time
            </label>
            <Textarea
              id="usageHours"
              placeholder="Please enter the usage hours"
              name="usageHours"
              value={formData.usageHours}
              onChange={handleChange}
              className="w-full border-gray-300 resize-none text-black   rounded-md"
            />
            <Button
              type="submit"
              className="bg-blue-500 m-2 text-white px-4 py-2"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EnergyForm;
