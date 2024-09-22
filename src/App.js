import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/Navbar';
import { createContext, lazy, Suspense, useState } from 'react';
import ProtectedRoute from './components/protected/ProtectedRoute';

const Login = lazy(() => import('./pages/login/Login'));
const Register = lazy(() => import('./pages/register/Register'));
const Products = lazy(() => import('./pages/products/Products'));
const Details = lazy(() => import('./pages/products/details/Details'));

export const AuthContext = createContext();
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      <div className='App'>
        <Suspense fallback={<h1>Loading</h1>}>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path='' element={<Login />} />
              <Route path='login' element={<Login />} />
              <Route path='register' element={<Register />} />
              <Route path='products' element={<ProtectedRoute>
                <Products />
              </ProtectedRoute>}>
                <Route index element={<ProtectedRoute>
                  <Details />
                </ProtectedRoute>} />
                <Route path=':id' element={<ProtectedRoute>
                  <Details />
                </ProtectedRoute>} />
              </Route>
            </Routes>
          </BrowserRouter>
        </Suspense>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
