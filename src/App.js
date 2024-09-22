import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/Navbar';
import { lazy, Suspense } from 'react';

const Login = lazy(() => import('./pages/login/Login'));
const Register = lazy(() => import('./pages/register/Register'));
const Products = lazy(() => import('./pages/products/Products'));
const Details = lazy(() => import('./pages/products/details/Details'));

function App() {
  return (
    <div className='App'>
      <Suspense fallback={<h1>Loading</h1>}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='' element={<Login />} />
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
          <Route path='products' element={<Products />}>
              <Route index element={<Details />} />
              <Route path=':id' element={<Details />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
