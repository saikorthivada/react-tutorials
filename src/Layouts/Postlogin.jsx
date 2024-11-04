import React from 'react'
import { Outlet } from 'react-router-dom'
import PostloginNav from '../Navbars/PostloginNav'

function PostLogin() {
    return (
        <div>
            <h3>PostLogin</h3>
            <PostloginNav />
            <Outlet />
        </div>
    )
}

export default PostLogin