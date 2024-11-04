import React from 'react'
import { Outlet } from 'react-router-dom'

function PreLogin() {
  return (
    <div>
        <h3>PreLogin</h3>
        <Outlet />
    </div>
  )
}

export default PreLogin