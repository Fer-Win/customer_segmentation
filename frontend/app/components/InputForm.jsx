
import React, { useState } from 'react';
import axios from 'axios';
const clusterDescriptions = [
  "Low spenders with a few purchases",
  "High spenders with frequent purchases",
   "Medium spenders with occasional purchases",
    "Low spenders with frequent small purchases",
    "Medium spenders with many purchases"
];
const InputForm = ({ setPrediction }) => {
    const [showClusters, setShowClusters] = useState(false);
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
      <button type="submit" className="bg-lime-300 text-black py-2 px-4 rounded-md hover:bg-lime-100">Predict Cluster</button>
      <button onClick={(e) => {
        e.preventDefault();
        setShowClusters(!showClusters)
      }} className="bg-lime-300 ml-10 text-black font-medium py-2 px-4 rounded-md hover:bg-lime-100">
        {showClusters ? 'Hide all Clusters' : 'Show all Clusters'}
      </button>
      { showClusters && (
        <div className='flex flex-col mt-10 gap-3 text-lg'>
          {clusterDescriptions.map((cluster, index) => (
            <div key={index} className='font-mono'>
                <span className='text-xl font-mono text-lime-100'>Cluster {index} :</span>
                <div>{cluster}</div>
            </div>
          ))}
        </div>
      )}
    </form>
    
  );
};

export default InputForm;
