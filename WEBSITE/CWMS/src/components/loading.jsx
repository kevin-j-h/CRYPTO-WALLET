import React from 'react';
import '../styles/Loading.css'; // Ensure correct path to your CSS file

const Loading = () => {
  return (
    <div className="loading-container" style={{backgroundColor:'black'}}>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
