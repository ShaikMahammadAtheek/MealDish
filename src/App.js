import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopRestaurents from './components/TopRestaurents';
import RestaurantDetails from './components/RestaurantDetails';
import MenuCard from './components/MenuCard';
import Support from './components/Support';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/support" element={<Support/>} />
          <Route path="/restaurants" element={<TopRestaurents />} />
          <Route path="/restaurant/:id" element={<RestaurantDetails />} />
          <Route path='cart' element={<MenuCard/>}/>
          
          {/* Add more routes here as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

