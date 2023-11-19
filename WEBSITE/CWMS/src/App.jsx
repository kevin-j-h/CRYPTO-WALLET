import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'


//pages
import Website from './pages/website';
import Login from './pages/login';
import Signup from './pages/signup'
import Dash from './pages/dash'





const App = () => {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Website />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/dash" element={<Dash />}/>
        
      </Routes>
    
    </BrowserRouter>
  )
}

export default App
