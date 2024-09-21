import React from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {

    const navigate = useNavigate();
    const navigateToRegister = () => {
        console.log('clicked');
        navigate('/register');
    }
    return (
        <div>
            <button className='btn btn-primary' onClick={() => navigateToRegister()}>Navigate to register</button>
        </div>
    )
}

export default Login