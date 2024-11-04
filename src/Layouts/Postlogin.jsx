import React from 'react'
import { Outlet } from 'react-router-dom'

function PostLogin() {
    return (
        <div>
            <h3>PostLogin</h3>
            <Outlet />
        </div>
    )
}

export default PostLogin