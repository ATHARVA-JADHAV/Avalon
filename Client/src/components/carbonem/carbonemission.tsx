import React from "react";
import { Button } from "../ui/button";
import "./carbonem.css";

export const CarbonEmissionForm = () => {
  // State to hold the selected car model
  const [selectedCar, setSelectedCar] = React.useState("");

  // Function to handle the change in the car selection dropdown
  const handleCarChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSelectedCar(event.target.value);
  };

  // Placeholder for the carbon emission calculation logic
  const calculateCarbonEmission = () => {
    // Implement your carbon emission calculation logic here
    // For demonstration, let's assume a simple calculation
    // const carbonEmission = ...;
    // return carbonEmission;
    return 0; // Placeholder return value
  };

  return (
    <div className="main rounded-lg">
      <div className="bg">
        <div className="form-element">
          <p className="text">Carbon Emission Calculator</p>
          <form className="form">
            <label htmlFor="car">Car</label>
            <select id="car" name="car" onChange={handleCarChange}>
              <option value="">Select a car</option>
              <option value="Creta">Creta</option>
              <option value="i20">i20</option>
              <option value="swift">Swift</option>
              <option value="wagonR">WagonR</option>
            </select>
            <label htmlFor="lastServicingDate">Last Servicing Date</label>
            <input
              type="date"
              id="lastServicingDate"
              name="lastServicingDate"
            />
            <label htmlFor="kmstravelled">KMs Travelled</label>
            <input type="text" id="kmstravelled" name="kmstravelled" />
            <Button
              className="m-2 bg-grey text-black"
              onClick={calculateCarbonEmission}
            >
              Calculate
            </Button>
          </form>
          {selectedCar && (
            <div className="result">
              <p>Carbon Emission Rate: {calculateCarbonEmission()} kg</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CarbonEmissionForm;
