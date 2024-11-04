import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, Link, NavLink, RouterProvider } from 'react-router-dom';
import Login from './Login/Login';
import Register from './Register/Register';

const router = createBrowserRouter([
  {
    path: '',
    element: <Login />
  },
  {
    path: 'login',
    element: <Login />
  },
  {
    path: 'register',
    element: <Register />
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
