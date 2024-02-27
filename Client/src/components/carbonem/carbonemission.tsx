import React, { useState } from "react";
import "./carbonem.css";

interface FormData {
  carType: string;
  dateBought: string;
  lastServiceDate: string;
  kmsTravelled: string;
}

const EnergyForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    carType: "",
    dateBought: "",
    lastServiceDate: "",
    kmsTravelled: "",
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you can process the form data (e.g., send it to an API, calculate energy savings)
    console.log(formData);
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div>
      <div className="fixed background top-0 left-0 w-full h-screen flex items-center justify-center bg-opacity-50">
        <form
          onSubmit={handleSubmit}
          className="p-10 rounded-lg bg-white shadow-lg"
        >
          <h1 className="font-bold text-xl mr-2 mb-2">Enter the Car Details</h1>
          <div className="grid w-full gap-2">
            <label htmlFor="carType" className="text-black">
              Car Type
            </label>
            <select
              id="carType"
              name="carType"
              value={formData.carType}
              onChange={handleChange}
              className="w-full border-gray-300 text-black rounded-md"
            >
              <option value="">Select Car Type</option>
              <option value="WagonR">WagonR</option>
              <option value="i20">i20</option>
              <option value="Swift">Swift</option>
              <option value="Creta">Creta</option>
            </select>

            <label htmlFor="dateBought" className="text-black">
              Date Bought
            </label>
            <input
              type="date"
              id="dateBought"
              name="dateBought"
              value={formData.dateBought}
              onChange={handleChange}
              className="w-full border-gray-300 text-black rounded-md"
            />

            <label htmlFor="lastServiceDate" className="text-black">
              Last Service Date
            </label>
            <input
              type="date"
              id="lastServiceDate"
              name="lastServiceDate"
              value={formData.lastServiceDate}
              onChange={handleChange}
              className="w-full border-gray-300 text-black rounded-md"
            />

            <label htmlFor="kmsTravelled" className="text-black">
              Kilometers Travelled
            </label>
            <input
              type="number"
              id="kmsTravelled"
              name="kmsTravelled"
              value={formData.kmsTravelled}
              onChange={handleChange}
              className="w-full border-gray-300 text-black rounded-md"
            />

            <button
              type="submit"
              className="bg-blue-500 m-2 text-white px-4 py-2"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EnergyForm;
