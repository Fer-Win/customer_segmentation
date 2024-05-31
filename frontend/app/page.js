'use client'
import React, { useState } from 'react';
import InputForm from './components/InputForm';
import ClusterDetails from './components/ClusterDetails';

const clusterDescriptions = [
  "Low spenders with a few purchases",
  "High spenders with frequent purchases",
  "Medium spenders with occasional purchases",
  "Low spenders with frequent small purchases",
  "Medium spenders with many purchases"
];

const Home = () => {
  const [prediction, setPrediction] = useState(null);
  

  return (
    <div>
      <h1 className=' mt-10 my-10 text-3xl font-mono text-lime-100 font-bold text-center'>Customer Clustering</h1>
      <InputForm setPrediction={setPrediction} />
      {prediction !== null && (
        <div className='text-center mt-20'>
          <h2><span className='text-lime-100 text-lg font-medium'>Predicted Cluster:</span> Cluster {prediction}</h2>
          <ClusterDetails clusterId={prediction} />
        </div>
      )}
    </div>
  );
};

export default Home;
