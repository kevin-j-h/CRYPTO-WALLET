import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"

//pages
import Login from './pages/login'
import Website from './pages/website'
import Signup from './pages/signup'
import Home from './pages/Home'
const App = () => {
  return (
    <Router>


      <Routes>
        <Route path='/' element={<Website />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/home' element={<Home />} />
        </Routes>
      
    </Router>
  )
}

export default App

