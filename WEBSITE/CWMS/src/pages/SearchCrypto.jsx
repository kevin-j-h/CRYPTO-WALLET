/* eslint-disable no-unused-vars */
import React from "react";
import CryptoTable from "./CryptoTable";
import CryptoWidget from "./CryptoMarquee";
import BitcoinAnalysis from "./BitcoinAnalysis";
import EthAnalysis from "./EthAnalysis";
import DogeAnalysis from "./DogeAnalysis";

const SearchCrypto = () => {
    return <div id="searchcrypto">
        <CryptoTable />
        <CryptoWidget />
        <BitcoinAnalysis />
        <EthAnalysis />
        <DogeAnalysis />
        </div>;
};

export default SearchCrypto;