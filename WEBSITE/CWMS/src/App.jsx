/* eslint-disable no-unused-vars */
import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'


//pages
import Website from './pages/website';
import Login from './pages/login';
import Signup from './pages/signup'
import Home from './pages/Home'
import Watchlist from './pages/Watchlist'
import Transactions from './pages/Transactions'
import Wallet from './pages/Wallet'
import Settings from './pages/Settings'
import Dash from './pages/dash'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Website />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/dash" element={<Dash />}/>
        <Route path='/transactions' element={<Transactions />} />
        <Route path='/watchlist' element={<Watchlist />} />
        <Route path='/wallet' element={<Wallet />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/home' element={<Home />} />
        
      </Routes>
    
    </BrowserRouter>
  )
}

export default App
