/* eslint-disable no-unused-vars */
import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"

//pages
import Login from './pages/login'
import Website from './pages/website'
import Signup from './pages/signup'
import Home from './pages/Home'
import Watchlist from './pages/Watchlist'
import Transactions from './pages/Transactions'
import Wallet from './pages/Wallet'
import Settings from './pages/Settings'

const App = () => {
  return (
    <Router>


      <Routes>
        <Route path='/' element={<Website />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/transactions' element={<Transactions />} />
        <Route path='/watchlist' element={<Watchlist />} />
        <Route path='/wallet' element={<Wallet />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/home' element={<Home />} />

        </Routes>
      
    </Router>
  )
}

export default App

