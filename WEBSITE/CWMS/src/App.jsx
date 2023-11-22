/* eslint-disable no-unused-vars */
import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'


//pages
import Website from './pages/Website';
import Login from './pages/login';
import Watchlist from './pages/Watchlist'
import Transactions from './pages/Transactions'
import Wallet from './pages/Wallet'
import Settings from './pages/Settings'
import Dashboard from './pages/Dashboard'
import CryptoBuySell from './pages/BuySell';
import SendReceiveCrypto from './pages/Send';
import CryptoMarquee from './pages/CryptoMarquee';
import LiveCoinWatchWidget from './pages/CryptoTable';
import SearchCrypto from './pages/SearchCrypto';
import Landing from './pages/Landing';
import AddWatchlist from './pages/AddWatchlist'

const App = () => {
  return (
    
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Landing />}/>
        <Route path="/website" element={<Website />}/>
        <Route path="/login" element={<Login />}/>
        {/* <Route path="/signup" element={<Signup />}/> */}
        <Route path="/dashboard" element={<Dashboard />}/>
        {/* <Route path="/dash" element={<Dash />}/> */}
        <Route path='/transactions' element={<Transactions />} />
        <Route path='/watchlist' element={<Watchlist />} />
        <Route path='/wallet' element={<Wallet />} />
        <Route path='/settings' element={<Settings />} />
        <Route path="/buysell" element={<CryptoBuySell />} />
        <Route path="/sendreceive" element={<SendReceiveCrypto />} />
        <Route path="/marquee" element={<CryptoMarquee />} />
        <Route path="/live" element={<LiveCoinWatchWidget />} />
        <Route path="/searchcrypto" element={<SearchCrypto />} />
        <Route path="/watchlist/addWatchlist" element={<AddWatchlist />} />
        
      </Routes>
    
    </BrowserRouter>
  )
}

export default App
