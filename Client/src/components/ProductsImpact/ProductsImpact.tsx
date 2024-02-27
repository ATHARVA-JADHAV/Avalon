import React, { useState } from "react";
import Sidebar from "../overlay/Sidebar";
import EnergyForm from "./ProductsForm";



const Energyinfo = () => {
  const [formData, setFormData] = useState<any>({});
  const [showData, setShowData] = useState(false);

  const handleFormData = (data: any) => {
    setFormData(data);
    setShowData(true);
  };

  return (
    <div className="background h-screen  w-full">
      <Sidebar />
      <EnergyForm onSubmit={handleFormData} />
      {showData && (
        <div className=" top-0 left-0 w-full h-screen flex items-center justify-center bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h1 className="font-bold text-xl mb-2">Form Data</h1>
            <p>Appliance Name: {formData.productsName}</p>

          </div>
        </div>
      )}
    </div>
  );
};

export default Energyinfo;
