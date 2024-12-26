import React from 'react'
import { Form } from 'react-router-dom'

function Products() {
  return (
    <div>
       <Form method='post'>
          <div>
            <input type={'email'} name="email" placeholder="Enter email"/>
          </div>
          <div>
            <input type={'text'} name="name" placeholder="Enter Name"/>
          </div>
          <div>
            <button type='submit'>Submit</button>
          </div>
       </Form>
    </div>
  )
}

export default Products