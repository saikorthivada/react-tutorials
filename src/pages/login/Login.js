import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../App';

function Login() {

    const {login} = useContext(AuthContext);

    const navigate = useNavigate();
    const navigateToRegister = () => {
        console.log('clicked');
        navigate('/register');
    }

    const loginAndNavigate = () => {
        login();
        navigate('/products');
    }
    return (
        <div>
            <button className='btn btn-primary' onClick={() => navigateToRegister()}>Navigate to register</button>
            &nbsp;
            <button className='btn btn-primary' onClick={() => loginAndNavigate()}>Login and navigate to products</button>
        </div>
    )
}

export default Login