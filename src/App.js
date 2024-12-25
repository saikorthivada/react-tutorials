import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, Link, NavLink, RouterProvider } from 'react-router-dom';
import Login from './Login/Login';
import Register from './Register/Register';
import PreLogin from './Layouts/Prelogin';
import PostLogin from './Layouts/Postlogin';
import Dashboard from './Dashboard/Dashboard';
import Products from './Products/Products';
import ProductDetails from './Products/ProductDetails';

const fetchTodos = async () => {
  const data = await fetch('https://jsonplaceholder.typicode.com/todos');
  const response = await data.json();
  // console.log(response);
  return response;
}

const fetchSpecificTodo = async ({params}) => {
  console.log(params);
  const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${params?.id}`);
  const response = await data.json();
  console.log(response);
  return response;
}
const router = createBrowserRouter([
  {
    path: '',
    element: <PreLogin />,
    children: [
      {
        path: '',
        element: <Login />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      }
    ]
  },
  {
    path: '',
    element: <PostLogin />,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />
      },
      {
        path: '/products',
        element: <Products />,
        loader: fetchTodos,
        children: [
          {
            path: ':id',
            element: <ProductDetails />,
            loader: fetchSpecificTodo
          }
        ]
      },
    ]
  }
]);
function App() {
  return (
    <div className='App'>
      <h1>Component API vs Data API's</h1>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
