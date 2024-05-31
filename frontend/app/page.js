'use client'
import React, { useState } from 'react';
import InputForm from './components/InputForm';
import ClusterDetails from './components/ClusterDetails';

const Home = () => {
  const [prediction, setPrediction] = useState(null);

  return (
    <div>
      <h1>Customer Clustering</h1>
      <InputForm setPrediction={setPrediction} />
      {prediction !== null && (
        <div>
          <h2>Predicted Cluster: {prediction}</h2>
          <ClusterDetails clusterId={prediction} />
        </div>
      )}
    </div>
  );
};

export default Home;
