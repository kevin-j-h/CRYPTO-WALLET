/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const TradingViewWidget = ( { symbol } = "BINANCE:ETHUSDT" ) => {
  const [isWidgetLoaded, setIsWidgetLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      "interval": "1m",
      "width": 425,
      "isTransparent": true,
      "height": 450,
      "symbol": symbol,
      "showIntervalTabs": true,
      "displayMode": "single",
      "locale": "in",
      "colorTheme": "light"
    });
    document.body.appendChild(script);
    setIsWidgetLoaded(true);

    return () => {
      document.body.removeChild(script);
      setIsWidgetLoaded(false);
    };
  }, [symbol]);

  return isWidgetLoaded ? (
    <div className="tradingview-widget-container">
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a href="https://in.tradingview.com/" rel="noopener nofollow noreferrer" target="_blank">
        </a>
      </div>
    </div>
  ) : null;
};

TradingViewWidget.propTypes = {
  symbol: PropTypes.string.isRequired,
};

const EthAnalysis = () => {
  return (
    <div>
      <TradingViewWidget symbol="BINANCE:ETHUSDT" />
    </div>
  );
};

export default EthAnalysis;
