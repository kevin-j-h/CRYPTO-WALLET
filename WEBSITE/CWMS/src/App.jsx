import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"

//pages
import Website from './pages/login'
import Signup from './pages/signup'
const App = () => {
  return (
    <Router>


      <Routes>
        <Route path='/' element={<Website />} />
        <Route path='/signup' element={<Signup />} />
        </Routes>
      
    </Router>
  )
}

export default App

