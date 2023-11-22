import React from 'react'
import { useNavigate } from 'react-router-dom'

const Landing = () => {
    const navigate = useNavigate();
    const handleUserClick = () => {
        navigate('/login')
    }
    const handleAdminClick = () => {
      navigate('/adminlogin')
  }
  return (
    <div>
      <div>
        <h1>Welcome to cryptox</h1>
        <h6>Your secure wallet.</h6>
        <div>
            <button onClick={handleUserClick}>User </button>
            <button onClick={handleAdminClick}>Admin </button>
        </div>
      </div>
    </div>
  )
}

export default Landing
