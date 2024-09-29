import React from 'react';
import { Link } from 'react-router-dom';
import items from '../image/itemsimage.jpg';
import '../Styles/MenuCard.css';

const MenuCard = () => {
  return (
    <div className='menu-card'>
      <img src={items} alt="Empty cart" className="menu-card-img" />
      <p>Your Cart Is Empty</p>
      
        <Link to="/restaurants">
          <button className="menu-card-button">See your nearby Restaurants</button>
        </Link>
      
    </div>
  );
};

export default MenuCard;

