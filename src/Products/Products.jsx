import React, { Fragment } from 'react'
import { useState } from 'react'
import { Form, useActionData, useSubmit } from 'react-router-dom'

function Products() {
  const submit = useSubmit();
  const actionData = useActionData();
  const [formState, setFormSate] = useState({
    name: '',
    email: ''
  });

  const clickHandler = () => {
    console.log(formState);
    const formData = new FormData();
    formData.append('name', formState.name);
    formData.append('email', formState.email);
    
    submit(formData, {method: 'post', action: '/products'})
  }
  return (
    <div>
        <Form method='post'>
          <div>
            {
              actionData?.errors && <Fragment>
                <div>
                  {
                    Object.entries(actionData.errors).map(([key, message]) => <p key={key}>{message}</p>)
                  }
                </div>
              </Fragment>
            }
          </div>
          <div>
            <input name='name' placeholder='enter name' value={formState.name} onChange={(event) => setFormSate({
              ...formState,
              name: event.target.value
            })}/>
          </div>
          <div>
            <input name='email' placeholder='enter email' value={formState.email} onChange={(event) => setFormSate({
              ...formState,
              email: event.target.value
            })}/>
          </div>
          <div>
            <button type='button' onClick={() => clickHandler()}>Submit</button>
          </div>
        </Form>
    </div>
  )
}

export default Products