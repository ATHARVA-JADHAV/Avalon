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

import React, { useState } from "react";
import { Button } from "../ui/button";
import "./carbonem.css";

const CarbonEmissionForm = () => {
  const [formData, setFormData] = useState({
    car: "",
    dateBought: "",
    lastServicingDate: "",
    kmstravelled: "",
  });

  const [carbonEmission, setCarbonEmission] = useState<number | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Perform calculations for carbon emission here
    // For now, let's just set a placeholder value
    setCarbonEmission(10); // Set a placeholder value

  };

  return (
    <div className="main">
      <div className="bg">
        <div className="form-element">
          <p className="text">Carbon Emission Calculator</p>

          <form className="form">
            <label htmlFor="car">Car</label>
            <select id="car" name="car" onChange={handleCarChange}>
              <option value="">Select a car</option>

          <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="car">Car</label>
            <select
              id="car"
              name="car"
              value={formData.car}
              onChange={handleChange}
            >

              <option value="Creta">Creta</option>
              <option value="i20">i20</option>
              <option value="swift">Swift</option>
              <option value="wagonR">WagonR</option>
            </select>


            <label htmlFor="dateBought">Date-Bought</label>
            <input
              type="date"
              id="dateBought"
              name="dateBought"
              value={formData.dateBought}
              onChange={handleChange}
            />

            <label htmlFor="lastServicingDate">Last Servicing Date</label>
            <input
              type="date"
              id="lastServicingDate"
              name="lastServicingDate"
              value={formData.lastServicingDate}
              onChange={handleChange}
            />

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

            <input
              type="text"
              id="kmstravelled"
              name="kmstravelled"
              value={formData.kmstravelled}
              onChange={handleChange}
            />
            <Button className="m-2 bg-grey text-black" type="submit">
              Calculate{" "}
            </Button>
          </form>
          {carbonEmission !== null && (
            <div className="result">
              <p>Carbon Emission Rate: {<CarbonEmissionForm />}kg</p>

            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CarbonEmissionForm;
