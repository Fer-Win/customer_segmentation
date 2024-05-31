import React from 'react';

const clusterDescriptions = {
  0: "Low spenders with a few purchases",
  1: "High spenders with frequent purchases",
  2: "Medium spenders with occasional purchases",
  3: "Low spenders with frequent small purchases",
  4: "Medium spenders with many purchases"
};

const ClusterDetails = ({ clusterId }) => {
  return (
    <div className='mt-10'>
      <h2 className='text-xl font-mono'>Customer belongs to the segment where customers are:</h2>
      <p className='text-lime-200 font-sans italic text-2xl'>{clusterDescriptions[clusterId]}</p>
    </div>
  );
};

export default ClusterDetails;
