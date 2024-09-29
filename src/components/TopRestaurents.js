


import React from 'react';
import top1 from '../image/top1.avif'
import top2 from '../image/top2.avif'
import top3 from '../image/top3.avif'
import top4 from '../image/top4.avif'
import top5 from '../image/top5.avif'
import top6 from '../image/top6.avif'
import top7 from '../image/top7.avif'
import top8 from '../image/top8.avif'
import top9 from '../image/top9.avif'
import top10 from '../image/top10.avif'
import top11 from '../image/top11.avif'
import top12 from '../image/top12.avif'
import top13 from '../image/top13.avif'
import top14 from '../image/top14.avif'
import top15 from '../image/top15.avif'
import top16 from '../image/top16.avif'
import top17 from '../image/top17.avif'
import top18 from '../image/top18.avif'
import top19 from '../image/top19.avif'
import top20 from '../image/top20.avif'
import top21 from '../image/top21.avif'
import top22 from '../image/top22.avif'
import top23 from '../image/top23.avif'
import top24 from '../image/top24.avif'
import '../Styles/TopRestaurents.css';  // Import the CSS for this component
import { Link } from 'react-router-dom';

const TopRestaurents = () => {
  
    const restaurants = [
        { id: 1, name: 'Pizza Pizza', rating: 4.6, time: '65-70 mins', location: 'Prasia Road', type: 'Momos, Chinese', image: top1 },
        { id: 2, name: 'Mocktail...', rating: 2.9, time: '55-60 mins', location: 'Mohan Nagar', type: 'Snacks, Chinese', image: top2 },
        { id: 3, name: 'Hakka Noodles', rating: 4.1, time: '55-60 mins', location: 'Railway Station', type: 'North Indian, South Indian', image: top3 },
        { id: 4, name: 'Sev Mixture', rating: 3.4, time: '70-75 mins', location: 'Chhindwara City', type: 'Snacks, Pizzas, Fast Food', image: top4 },
        { id: 5, name: 'Chicken Manchuria...', rating: 4.2, time: '50-55 mins', location: 'Chhindwara Locality', type: 'North Indian, South Indian', image: top5 },
        { id: 6, name: 'Butter Paneer', rating: 4.2, time: '50-55 mins', location: 'Chhindwara City', type: 'Snacks, Beverages, Desserts', image: top6 },
        { id: 7, name: 'Cheese Pasta', rating: 3.3, time: '55-60 mins', location: 'Ganesh Chowk', type: 'Chinese, Pizzas', image: top7 },
        { id: 8, name: 'Shaahi Paneer', rating: 4.3, time: '65-70 mins', location: 'Prasia Road', type: 'Pizzas, Burgers, Beverages', image: top8 },
        { id: 9, name: 'Butter Naan', rating: 4.5, time: '40-45 mins', location: 'Downtown Area', type: 'Chinese, Thai', image: top9 },
        { id: 10, name: 'Biryani', rating: 4.0, time: '50-55 mins', location: 'Mall Road', type: 'Pizzas, Fast Food', image: top10 },
        { id: 11, name: 'Kesar Pista Kulfi', rating: 4.3, time: '45-50 mins', location: 'High Street', type: 'North Indian, Tandoor', image: top11 },
        { id: 12, name: 'Cakes', rating: 3.8, time: '30-35 mins', location: 'Market Square', type: 'Coffees, Beverages', image: top12 },
        { id: 13, name: 'Hakka Noodles', rating: 4.7, time: '60-65 mins', location: 'City Center', type: 'Biryani, North Indian', image: top13 },
        { id: 14, name: 'Rajma Roti', rating: 4.1, time: '40-45 mins', location: 'Main Street', type: 'Burgers, Fast Food', image: top14 },
        { id: 15, name: 'Subway', rating: 3.9, time: '35-40 mins', location: 'Highway Plaza', type: 'Sandwiches, Salads', image: top15 },
        { id: 16, name: 'Waffle', rating: 4.0, time: '55-60 mins', location: 'Central Park', type: 'Pizzas, Italian', image: top16 },
        { id: 17, name: 'Sharma Dhaba', rating: 4.6, time: '45-50 mins', location: 'Outer Ring Road', type: 'North Indian, Tandoor', image: top17 },
        { id: 18, name: 'Shakes World', rating: 4.8, time: '20-25 mins', location: 'City Square', type: 'Desserts, Ice Cream', image: top18 },
        { id: 19, name: 'Rolls', rating: 4.2, time: '55-60 mins', location: 'Lake View Area', type: 'Chinese, Thai', image: top19 },
        { id: 20, name: 'Darjeeling Momos', rating: 4.4, time: '50-55 mins', location: 'Tech Park', type: 'Indian, Continental', image: top20 },
        { id: 21, name: 'BBQ Nation', rating: 4.9, time: '70-75 mins', location: 'Airport Road', type: 'BBQ, Grill', image: top21 },
        { id: 22, name: 'The Chocolate Cake', rating: 4.0, time: '60-65 mins', location: 'Uptown Area', type: 'Indian, South Indian', image: top22 },
        { id: 23, name: '', rating: 4.1, time: '55-60 mins', location: 'Beachside Avenue', type: 'Seafood, Chinese', image: top23 },
        { id: 24, name: 'Wraps', rating: 4.2, time: '40-45 mins', location: 'City Market', type: 'Mexican, Tex-Mex', image: top24 }
    ];
    

  return (
    <div className='topres'>
        <h1> Top Restaurants with online food delivery in Bangalore</h1>
    <div className="restaurant-grid">
      {restaurants.map((restaurant) => (
        <div className="restaurant-card" key={restaurant.id}>
          <Link to={`/restaurant/${restaurant.id}`}>
          <img src={restaurant.image}alt={restaurant.name} className="restaurant-image" />
          <h3>{restaurant.name}</h3>
          <p>Rating: {restaurant.rating} • {restaurant.time}</p>
          <p>{restaurant.type}</p>
          <p>{restaurant.location}</p>
          </Link>
        </div>
      ))}
    </div>
    </div>
  );
}

export default TopRestaurents;










