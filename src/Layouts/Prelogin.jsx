import React from 'react'
import { Outlet } from 'react-router-dom'
import PreloginNav from '../Navbars/PreloginNav'

function PreLogin() {
  return (
    <div>
        <h3>PreLogin layout</h3>
            <PreloginNav />
        <Outlet />
    </div>
  )
}

export default PreLogin