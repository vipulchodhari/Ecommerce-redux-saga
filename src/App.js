import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { Cart } from './components/Cart';

import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { NotFound } from './components/NotFound';

function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
