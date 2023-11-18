import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"

//pages
import Login from './pages/login'
import Website from './pages/website'
import Signup from './pages/signup'
const App = () => {
  return (
    <Router>


      <Routes>
        <Route path='/' element={<Website />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        </Routes>
      
    </Router>
  )
}

export default App

