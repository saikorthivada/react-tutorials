import React, { Suspense } from 'react'
import { useEffect } from 'react'
import { Await, Outlet, useLoaderData, useNavigate } from 'react-router-dom';

function Products() {
  const loaderData = useLoaderData();
  useEffect(() => {
    console.log('products useffect');
  }, []);
  return (
    <div>
      <h5>Products</h5>
      <Outlet />
      <Suspense fallback={<h1>Loading post</h1>}>
        <Await resolve={loaderData.posts}>
          {
            (actualData) => <h5>{actualData.title}</h5>
          }
        </Await>
      </Suspense>
      <Suspense fallback={<h1>Loading data</h1>}>
        <Await resolve={loaderData.data}>
          {
            (actualData) => {
              return actualData?.map((res) => {
                return <p>{res.title}</p>
              })
            }
          }
        </Await>
      </Suspense>
    </div>
  )
}

export default Products