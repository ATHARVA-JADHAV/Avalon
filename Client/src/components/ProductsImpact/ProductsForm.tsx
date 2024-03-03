import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import Sidebar from '../overlay/Sidebar';
import { GoogleGenerativeAI } from "@google/generative-ai";

const ProductImpact = () => {
  const [productName, setProductName] = useState('');
  const [aiResponse, setAiResponse] = useState('');

  const genAI = new GoogleGenerativeAI('AIzaSyAK_fEPl6Y9lWVZJYjpXmyE4MNqPWYk17Q');
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const handleChange = (e) => {
    setProductName(e.target.value);
  }

  const handleSubmit = async () => {
    const inputText = `Product ${productName} impact on the environment.remove ** and remove bold and in 80words paragraph`;
    try {
      const result = await model.generateContent(inputText);
      const text = result.response.text();
      setAiResponse(text);
    } catch (error) {
      console.error("generateContent error: ", error);
    }
  };

  return (
    <div>
      <Sidebar />
     
      <div className='w-full h-screen' >

        <div className='flex h-screen mx-10 items-center justify-center flex-col  '>
        <h1 className='text-4xl font-semibold m-2'>Product Impact Calculator</h1>
          <input className='w-40 p-4 *:flextext-center justify-center'placeholder='Enter product name' onChange={handleChange} />
          <button className='w-40 bg-gray-600 rounded-md text-white p-4 m-2' onClick={handleSubmit}>Calculate Impact</button>
          {aiResponse && (
          <div className='w-80 text-center bg-white p-4 rounded-md'>
 
            <p>{aiResponse}</p>
          </div>      )}
        </div>
  
  
      </div>
    </div>
  );
};

export default ProductImpact;
