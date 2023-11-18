import React from 'react'
import  {Link} from 'react-router-dom'
const website = () => {
  return (
    <div>
<h1>Website</h1>
<Link to="/login">
        <button>Login</button>
      </Link>
    </div>
  )
}

export default website
