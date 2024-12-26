import React from 'react'
import { useSearchParams } from 'react-router-dom'

function Confirmation() {
    const [searchParams] = useSearchParams();
  return (
    <div>Confirmation - {searchParams.get('name')} - {searchParams.get('email')}</div>
  )
}

export default Confirmation