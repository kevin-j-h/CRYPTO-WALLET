/* eslint-disable no-unused-vars */
import React from "react";
import CryptoWidget from "./CryptoMarquee";
import BitcoinAnalysis from "./BitcoinAnalysis";
import EthAnalysis from "./EthAnalysis";
import DogeAnalysis from "./DogeAnalysis";
import LiveCoinWatchWidget from "./CryptoTable";

const SearchCrypto = () => {
    return <div id="searchcrypto">
        <CryptoWidget />
        <LiveCoinWatchWidget />
        <BitcoinAnalysis />
        <EthAnalysis />
        <DogeAnalysis />
        </div>;
};

export default SearchCrypto;