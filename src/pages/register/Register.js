import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function Register() {
    const navigate = useNavigate();
    const location = useLocation();
    const navigateToLogin = () => {
        navigate('/login');
    }
  return (
    <div>
      <p>{location?.state?.isAuthorized}</p>
        <button className='btn btn-primary' onClick={() => navigateToLogin()}>Navigate to Login</button>
    </div>
  )
}

export default Register