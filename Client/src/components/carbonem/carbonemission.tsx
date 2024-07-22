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
        <div className="form-element ">
          <p className="pl-1 text flex flex-row items-center gap-x-64 md:gap-x-40 lg:gap-x-72">
            CO2- Emission Calculator
            <img
              src="https://img.icons8.com/ios/452/co2.png"
              alt="co2"
              className=" pl-0 h-10 w-10"
            />
          </p>
          <form className="form flex flex-col" onSubmit={handleSubmit}>
            <label htmlFor="car">Car</label>
            <select
              id="car"
              name="car"
              value={formData.car}
              onChange={handleChange}
            >
              <option value="">Select a car</option>
              <option value="Creta">Creta</option>
              <option value="i20">i20</option>
              <option value="swift">Swift</option>
              <option value="wagonR">WagonR</option>
            </select>

            <label htmlFor="dateBought">Date Bought</label>
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

            <label htmlFor="kmstravelled">Kms Travelled</label>
            <input
              type="text"
              id="kmstravelled"
              name="kmstravelled"
              value={formData.kmstravelled}
              onChange={handleChange}
            />
            <Button className="m-2 bg-grey text-black" type="submit">
              Calculate
            </Button>
          </form>

          {carbonEmission !== null && (
            <div className="result">
              <p>Carbon Emission Rate: {carbonEmission} kg</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CarbonEmissionForm;
