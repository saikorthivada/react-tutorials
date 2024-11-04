import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const activeLinks = ({isActive}) => {
    if (isActive) {
        return {
            color: 'red'
        }
    }
}
function PreloginNav() {
    return (
        <div>
            <h3>PreloginNav</h3>
            <NavLink to={'/login'} style={activeLinks}>Login</NavLink>
            &nbsp;
            <NavLink to={'/register'} style={activeLinks}>Register</NavLink>
        </div>
    )
}

export default PreloginNav