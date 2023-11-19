/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';

const LiveCoinWatchWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.cryptohopper.com/widgets/js/script';
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return (
<div class="cryptohopper-web-widget" data-id="1" data-chart_color="#000000" data-numcoins="100" data-realtime="on"></div>
  );
};

export default LiveCoinWatchWidget;
