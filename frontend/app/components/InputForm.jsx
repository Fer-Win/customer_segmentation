
import React, { useState } from 'react';
import axios from 'axios';

const InputForm = ({ setPrediction }) => {
  const [formData, setFormData] = useState({
    NumPurchases: '',
    TotalQuantity: '',
    TotalSpending: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/predict', formData);
      setPrediction(response.data.cluster);
    } catch (error) {
      console.error('Error predicting cluster:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
      <div className="mb-4">
        <label className="block mb-2">Number of Purchases:</label>
        <input type="number" name="NumPurchases" value={formData.NumPurchases} onChange={handleChange} required className="w-full py-2 px-3 border rounded-md text-black" />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Total Quantity:</label>
        <input type="number" name="TotalQuantity" value={formData.TotalQuantity} onChange={handleChange} required className="w-full py-2 px-3 border rounded-md text-black" />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Total Spending:</label>
        <input type="number" name="TotalSpending" value={formData.TotalSpending} onChange={handleChange} required className="w-full py-2 px-3 border rounded-md text-black" />
      </div>
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Predict Cluster</button>
    </form>
  );
};

export default InputForm;
