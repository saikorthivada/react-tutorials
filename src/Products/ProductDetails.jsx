import React from 'react'
import { useLoaderData } from 'react-router-dom'

function ProductDetails() {
    const data = useLoaderData();
  return (
    <div>ProductDetails - {JSON.stringify(data)}</div>
  )
}

export default ProductDetails