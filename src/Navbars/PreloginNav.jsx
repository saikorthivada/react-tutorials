import React from 'react'
import { Link } from 'react-router-dom'

function PreloginNav() {
    return (
        <div>
            <h3>PreloginNav</h3>
            <Link to={'/login'}>Login</Link>
            &nbsp;
            <Link to={'/register'}>Register</Link>
        </div>
    )
}

export default PreloginNav