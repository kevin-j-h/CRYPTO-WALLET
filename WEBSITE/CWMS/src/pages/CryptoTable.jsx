/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';

const CryptoTable = () => {
  useEffect(() => {
    // Check if the TradingView widget script has already been injected
    if (!document.getElementById('tradingview-widget-script')) {
      const script = document.createElement('script');
      script.id = 'tradingview-widget-script';
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-screener.js';
      script.async = true;
      script.innerHTML = JSON.stringify({
        "width": "100%",
        "height": 490,
        "defaultColumn": "overview",
        "screener_type": "crypto_mkt",
        "displayCurrency": "USD",
        "colorTheme": "dark",
        "locale": "in"
      });
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="tradingview-widget-container">
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a href="https://in.tradingview.com/" rel="noopener nofollow noreferrer" target="_blank">
        </a>
      </div>
    </div>
  );
};

export default CryptoTable;

