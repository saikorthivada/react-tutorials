import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, Link, NavLink, RouterProvider } from 'react-router-dom';
import Login from './Login/Login';
import Register from './Register/Register';
import PreLogin from './Layouts/Prelogin';
import PostLogin from './Layouts/Postlogin';
import Dashboard from './Dashboard/Dashboard';
import Products from './Products/Products';

const formAction = async ({request}) => {
  const formData = await request.formData();
  const name = formData.get('name');
  const email = formData.get('email');

  console.log(name, email);
  const errors = {};
  if (!name) errors.name ="Name is required";
  if (!email) errors.email = "Email is required";

  if (Object.keys(errors)?.length) {
    return {
      errors
    }
  }
  return {
    success: true
  }
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
        action: formAction
      }
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
