import React from 'react'
import { Link } from 'react-router-dom'

function PostloginNav() {
  return (
    <div>
         <h3>PostloginNav</h3>
         <Link to={'/dashboard'}>Dashboard</Link>&nbsp;
         <Link to={'/products'}>Products</Link>
    </div>
  )
}

export default PostloginNav