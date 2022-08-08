import logo from './logo.svg';
import './App.css';
import { Cart } from './components/Cart';
import { Home } from './components/Home';

function App() {
  return (
    <div className="App">
      <Cart/>
      <Home/>
    </div>
  );
}

export default App;
