import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { activeLinks } from './PreloginNav'

function PostloginNav() {
  return (
    <div>
         <h3>PostloginNav</h3>
         <NavLink to={'/dashboard'} style={activeLinks}>Dashboard</NavLink>&nbsp;
         <NavLink to={'/products'} style={activeLinks}>Products</NavLink>
    </div>
  )
}

export default PostloginNav