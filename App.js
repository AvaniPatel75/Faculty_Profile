import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './Home';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <Navbar />

      
      <Home />
    </div>
  );
}


export default App;
