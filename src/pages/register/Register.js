import React from 'react'
import { useNavigate } from 'react-router-dom'

function Register() {
    const navigate = useNavigate();
    const navigateToLogin = () => {
        navigate('/login');
    }
  return (
    <div>
        <button className='btn btn-primary' onClick={() => navigateToLogin()}>Navigate to Login</button>
    </div>
  )
}

export default Register