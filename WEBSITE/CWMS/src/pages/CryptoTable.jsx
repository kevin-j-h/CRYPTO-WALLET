/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';

const LiveCoinWatchWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.livecoinwatch.com/static/lcw-widget.js';
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
