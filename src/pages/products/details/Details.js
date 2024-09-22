import React from 'react'
import { useParams } from 'react-router-dom'

function Details() {

    const params = useParams();
    console.log(params);
  return (
    <div>Details - {params?.label}</div>
  )
}

export default Details