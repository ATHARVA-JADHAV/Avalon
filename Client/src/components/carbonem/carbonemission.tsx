<<<<<<< Updated upstream
import { useState, FormEvent } from 'react';
import './carbonem.css';

const CarbonEmissionForm = () => {
  const [carbonEmission, setCarbonEmission] = useState<number | null>(null);

  const handleCalculate = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const carModel = (document.getElementById('car') as HTMLSelectElement).value;
    const purchaseYear = (document.getElementById('purchaseYear') as HTMLInputElement).value;
    const serviceYear = (document.getElementById('serviceYear') as HTMLInputElement).value;
    const distance = (document.getElementById('distance') as HTMLInputElement).value;

    try {
      const response = await fetch('http://localhost:3001/calculate_emission', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          car_model: carModel,
          purchase_year: purchaseYear,
          service_year: serviceYear,
          distance: distance
        })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setCarbonEmission(data.total_emission);
    } catch (error) {
      console.error('Error:', error);
      // Handle error here, e.g., show an error message to the user
    }
  };

=======
import { Button } from "../ui/button";
import "./carbonem.css";


export const CarbonEmissionForm = () => {
>>>>>>> Stashed changes
  return (
    <div className="main rounded-lg">
      <div className="bg">
        <div className="form-elemen t">
          <p className="text">Carbon Emission Calculator</p>
<<<<<<< Updated upstream
          <form className="form" onSubmit={handleCalculate}>
=======
          <form className="form ">
>>>>>>> Stashed changes
            <label htmlFor="car">Car</label>
            <select id="car" name="car">
              <option value="Creta">Creta</option>
              <option value="i20">i20</option>
              <option value="swift">Swift</option>
              <option value="wagonR">WagonR</option>
            </select>
<<<<<<< Updated upstream
            <label htmlFor="purchaseYear">Purchase Year</label>
            <input type="text" id="purchaseYear" name="purchaseYear" />
            <label htmlFor="serviceYear">Service Year</label>
            <input type="text" id="serviceYear" name="serviceYear" />
            <label htmlFor="distance">Distance</label>
            <input type="text" id="distance" name="distance" />
            <button type="submit" id="button">
              Calculate
            </button>
=======
            <label htmlFor="dateBought">Date-Bought</label>
            <input type="date" id="dateBought" name="dateBought" />
            <label htmlFor="lastServicingDate">Last Servicing Date</label>
            <input
              type="date"
              id="lastServicingDate"
              name="lastServicingDate"
            />
            <label htmlFor="kmstravelled">KMs Travelled</label>
            <input type="text" id="kmstravelled" name="kmstravelled" />
<Button className="m-2 bg-grey text-black">Calculate </Button>
>>>>>>> Stashed changes
          </form>
          {carbonEmission && (
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
