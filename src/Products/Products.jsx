import React from 'react'
import { Form, useSubmit } from 'react-router-dom'

function Products() {

  const submit = useSubmit();
  const clickHadler = () => {
    const formData = new FormData();
    const name = "sai kumar";
    const email = "saikumar@gmail.com";
    formData.append("name", name);
    formData.append("email", email);

    submit(formData, { method: 'get', action: `/confirmation`})
  }
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
            <button type='button' onClick={() => clickHadler()}>Submit</button>
          </div>
       </Form>
    </div>
  )
}

export default Products