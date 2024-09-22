import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
    const getActiveStyles = ({ isActive }) => {
        return {
            "color": isActive ? 'red' : 'blue'
        }
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <div className="navbar-brand">React router tutorials</div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to={'/login'} style={getActiveStyles}>
                                {
                                    ({ isActive }) => {
                                        return isActive ? <strong>Login</strong> : <span>Login</span>
                                    }
                                }
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={'/register'} state={{isAuthorized: 'sai'}} style={getActiveStyles}>
                                {
                                    ({ isActive }) => {
                                        return isActive ? <strong>Register</strong> : <span>Register</span>
                                    }
                                }
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to={'/products'} style={getActiveStyles}>
                                {
                                    ({ isActive }) => {
                                        return isActive ? <strong>Products</strong> : <span>Products</span>
                                    }
                                }
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar