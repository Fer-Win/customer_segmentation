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
    <div>
      <h2>Cluster {clusterId} Details</h2>
      <p>{clusterDescriptions[clusterId]}</p>
    </div>
  );
};

export default ClusterDetails;
