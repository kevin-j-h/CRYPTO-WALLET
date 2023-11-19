/* eslint-disable no-unused-vars */
import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'


//pages
import Website from './pages/Website';
import Login from './pages/login';
import Signup from './pages/signup'
import Watchlist from './pages/Watchlist'
import Transactions from './pages/Transactions'
import Wallet from './pages/Wallet'
import Settings from './pages/Settings'
import Dashboard from './pages/Dashboard'
import CryptoBuySell from './pages/BuySell';
import SendReceiveCrypto from './pages/Send';
import TradingViewWidget from './pages/BitcoinAnalysis';
import CryptoMarquee from './pages/CryptoMarquee';
import CryptoTable from './pages/CryptoTable';
import SearchCrypto from './pages/SearchCrypto';

const App = () => {
  return (
    
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Website />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path='/transactions' element={<Transactions />} />
        <Route path='/watchlist' element={<Watchlist />} />
        <Route path='/wallet' element={<Wallet />} />
        <Route path='/settings' element={<Settings />} />
        <Route path="/buysell" element={<CryptoBuySell />} />
        <Route path="/sendreceive" element={<SendReceiveCrypto />} />
        <Route path="/tradingview" element={<TradingViewWidget />} />
        <Route path="/marquee" element={<CryptoMarquee />} />
        <Route path="/table" element={<CryptoTable />} />
        <Route path="/searchcrypto" element={<SearchCrypto />} />
      </Routes>
    
    </BrowserRouter>
  )
}

export default App
