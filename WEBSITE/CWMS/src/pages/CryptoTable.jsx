/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import '../styles/crypto.css'; // Make sure to replace 'your-stylesheet.css' with the actual name of your stylesheet

const LiveCoinWatchWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.cryptohopper.com/widgets/js/script';
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      className="livecoinwatch-widget-3"
      lcw-base="USD"
      lcw-d-head={true}
      lcw-d-name={true}
      lcw-d-code={true}
      lcw-d-icon={true}
      lcw-color-tx="#ffffff"
      lcw-color-bg="#1f2434"
      lcw-border-w="1"
    ></div>
  );
};

export default LiveCoinWatchWidget;
