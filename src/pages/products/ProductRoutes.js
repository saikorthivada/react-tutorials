import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Details from './details/Details'

function ProductRoutes() {
    return (
        <Routes>
            <Route index element={<Details />} />
            <Route path=':id' element={<Details />} />
        </Routes>
    )
}

export default ProductRoutes