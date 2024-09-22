import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Navbar from './components/navbar/Navbar';
import Products from './pages/products/Products';
import Details from './pages/products/details/Details';

function App() {
  return (
    <div className='App'>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='' element={<Login />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='products' element={<Products />}>
            <Route index element={<Details />} />
            <Route path=':label' element={<Details />}/>
            {/* <Route path='1' element={<Choclate />} />
            <Route path='2' element={<Milk />} />
            <Route path='3' element={<Ghee />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
