import React from 'react'
import { Link } from 'react-router-dom';
import homelogo from '../image/Navlogo2.png'
import '../Styles/Home.css'
import Favfood from './Favfood'
import TopRestaurents from './TopRestaurents'
// import BestVisitingPlaces from './BestVisitingPlaces'
const Home = () => {
  return (
    <div className='container'>
    <div className='home-card'>
      <ul className='Home-items'>
        <li><h1>Satisfy Your Tastes</h1></li>
        <li><p className='middle_p'>Order Now-visit the Best food and drinks Nearest Restaurent</p></li>
        <li><Link to="/restaurants"><button>Explore your near Restaurants</button></Link></li>
        
      </ul>
      <div id="navlogo">
        <img src={homelogo} alt="NavBarLogo" />
      </div>
    </div>
    <hr />
    <Favfood/>
    <hr />
    <TopRestaurents/>
    <hr />
    {/* <BestVisitingPlaces/> */}
    </div>

  )
}

export default Home
