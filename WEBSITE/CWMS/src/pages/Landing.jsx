import React from 'react'
import { useNavigate } from 'react-router-dom'

const Landing = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/login')
    }
  return (
    <div>
      <div>
        <h1>Welcome to cryptox</h1>
        <h6>Your secure wallet.</h6>
        <div>
            <button onClick={handleClick}>Learn more.</button>
        </div>
      </div>
    </div>
  )
}

export default Landing
