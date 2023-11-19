/* eslint-disable no-unused-vars */
import React from "react";
import CryptoWidget from "./CryptoMarquee";
import LiveCoinWatchWidget from "./CryptoTable";

const SearchCrypto = () => {
    return <div id="searchcrypto">
        <CryptoWidget />
        <LiveCoinWatchWidget />
        </div>;
};

export default SearchCrypto;