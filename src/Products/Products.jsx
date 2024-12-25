import React from 'react'
import { useEffect } from 'react'
import { Outlet, useLoaderData, useNavigate } from 'react-router-dom';

function Products() {

  const loaderData = useLoaderData();
  // console.log(loaderData, "current value");
  const navigate = useNavigate();
  useEffect(() => {
    // console.log('inside products');
    // fetch('https://jsonplaceholder.typicode.com/todos').then(res => {
    //   res.json().then((response) => {
    //     console.log(response);
    //   })
    // })
  }, []);
  return (
    <div>
      <h5>Products</h5>
      <Outlet />
      {
        loaderData?.map((item) => {
          return <div key={item.id}>
            <button onClick={() => navigate(`/products/${item.id}`)}>{item.title}</button>
          </div>
        })
      }

    </div>
  )
}

export default Products