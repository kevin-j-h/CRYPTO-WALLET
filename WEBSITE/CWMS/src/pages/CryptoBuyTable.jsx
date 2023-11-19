/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import '../styles/crypto.css';

const CryptoBuyTable = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.livecoinwatch.com/static/lcw-widget.js';
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div class="livecoinwatch-widget-container">
      <div
        class="livecoinwatch-widget-3"
        lcw-base="USD"
        lcw-d-head="true"
        lcw-d-name="true"
        lcw-d-code="true"
        lcw-d-icon="true"
        lcw-color-tx="#000000"
        lcw-color-bg="#ffffff"
        lcw-border-w="20"
        style={{ width: '100%' }}
      ></div>    </div>
  );
};

export default CryptoBuyTable;
