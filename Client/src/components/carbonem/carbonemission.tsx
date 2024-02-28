import { useState, FormEvent } from 'react';
import './carbonem.css';
import Sidebar from '../overlay/Sidebar';


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

  return (
    <div className="main">
     
      <div className="bg">
        
        <div className="form-element flex flex-col items-center">
          
          <p className="text text-xl font-semibold m-4 ">Carbon Emission Calculator</p>
          <Sidebar/>
          <form className="form" onSubmit={handleCalculate}>
            <label htmlFor="car">Car</label>
            <select id="car" name="car">
              <option value="Creta">Creta</option>
              <option value="i20">i20</option>
              <option value="swift">Swift</option>
              <option value="wagonR">WagonR</option>
            </select>
            <label htmlFor="purchaseYear">Purchase Year</label>
            <input type="text" id="purchaseYear" name="purchaseYear" />
            <label htmlFor="serviceYear">Service Year</label>
            <input type="text" id="serviceYear" name="serviceYear" />
            <label htmlFor="distance">Distance</label>
            <input type="text" id="distance" name="distance" />
            <button type="submit" id="button">
              Calculate
            </button>
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