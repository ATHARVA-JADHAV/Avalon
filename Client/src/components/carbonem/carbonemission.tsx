<<<<<<< Updated upstream
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
=======
import { useState, FormEvent } from "react";
import "./carbonem.css";

const CarbonEmission = () => {
  const [carbonEmission, setCarbonEmission] = useState<number | null>(null);

  const handleCalculate = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const carModel = (document.getElementById("car") as HTMLSelectElement)
      .value;
    const purchaseYear = (
      document.getElementById("purchaseYear") as HTMLInputElement
    ).value;
    const serviceYear = (
      document.getElementById("serviceYear") as HTMLInputElement
    ).value;
    const distance = (document.getElementById("distance") as HTMLInputElement)
      .value;

    try {
      const response = await fetch("http://localhost:3001/calculate_emission", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          car_model: carModel,
          purchase_year: purchaseYear,
          service_year: serviceYear,
          distance: distance,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setCarbonEmission(data.total_emission);
    } catch (error) {
      console.error("Error:", error);
      // Handle error here, e.g., show an error message to the user
    }
>>>>>>> Stashed changes
  };

  return (
    <div className="main">
      <div className="bg">
        <div className="form-element">
          <p className="text">Carbon Emission Calculator</p>
<<<<<<< Updated upstream
          <form className="form" onSubmit={handleSubmit}>
=======
          <form className="form" onSubmit={handleCalculate}>
>>>>>>> Stashed changes
            <label htmlFor="car">Car</label>
            <select id="car" name="car" value={formData.car} onChange={handleChange}>
              <option value="Creta">Creta</option>
              <option value="i20">i20</option>
              <option value="swift">Swift</option>
              <option value="wagonR">WagonR</option>
            </select>
<<<<<<< Updated upstream
            <label htmlFor="dateBought">Date-Bought</label>
            <input type="date" id="dateBought" name="dateBought" value={formData.dateBought} onChange={handleChange} />
            <label htmlFor="lastServicingDate">Last Servicing Date</label>
            <input type="date" id="lastServicingDate" name="lastServicingDate" value={formData.lastServicingDate} onChange={handleChange} />
            <label htmlFor="kmstravelled">KMs Travelled</label>
            <input type="text" id="kmstravelled" name="kmstravelled" value={formData.kmstravelled} onChange={handleChange} />
            <Button className="m-2 bg-grey text-black" type="submit">Calculate </Button>
=======
            <label htmlFor="purchaseYear">Purchase Year</label>
            <input type="text" id="purchaseYear" name="purchaseYear" />
            <label htmlFor="serviceYear">Service Year</label>
            <input type="text" id="serviceYear" name="serviceYear" />
            <label htmlFor="distance">Distance</label>
            <input type="text" id="distance" name="distance" />
            <button type="submit" id="button">
              Calculate
            </button>
>>>>>>> Stashed changes
          </form>
          {carbonEmission !== null && (
            <div className="result">
              <p>Carbon Emission Rate: {<CarbonEmission />}kg</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CarbonEmission;
