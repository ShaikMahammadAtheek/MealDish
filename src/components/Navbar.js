// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../Styles/Navbar.css';
// import logo from '../image/Screenshot 2024-09-17 152201.png';
// import cart from '../image/card.jpeg';

// const Navbar = () => {
//   return (
//     <div className='card'>
//       <div>
//         <img src={logo} className='logo' alt="Website_Logo" />
//       </div>

//       <input type="checkbox" id="menu-toggle" />
//       <div className='menu'>
//         <label htmlFor="menu-toggle" className='hamburger'>
//           <span></span>
//           <span></span>
//           <span></span>
//         </label>
//         <ul className='links'>
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/restaurants">Restaurants</Link></li>
//           <li><Link to="/about">About</Link></li>
//           <li><Link to="/contact">Contact</Link></li>
//           <li><Link to="/cart"><img src={cart} alt="Add item to Cart" /></Link></li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Navbar;


import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css';
// import logo from '../image/Screenshot 2024-09-17 152201.png';
import cart from '../image/card.jpeg';
import logo1 from '../image/navlogo.png'

const Navbar = () => {
  return (
    <div className='card'>
      <div>
        <img src={logo1} className='logo' alt="Website_Logo" />
      </div>

      <div className='menu'>
        {/* Hidden checkbox */}
        <input type="checkbox" id="menu-toggle" className="menu-toggle" />
        <label className="hamburger" htmlFor="menu-toggle">
          <span></span>
          <span></span>
          <span></span>
        </label>

        <ul className='links'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/restaurants">Restaurants</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/support">Support</Link></li>
          <li><Link to="/cart"><img src={cart} alt="Add item to Cart" /></Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;









// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../Styles/Navbar.css';  // Link to the correct CSS file
// import logo from '../image/Screenshot 2024-09-17 152201.png';  // Use your actual logo path
// import cart from '../image/card.jpeg';  // Use your actual cart image path

// const Navbar = () => {
//   return (
//     <nav className='navbar'>
//       <div className='logo'>
//         <img src={logo} alt="Website Logo" />
//       </div>

//       <div className='menu'>
//         <div className='hamburger'>
//           <span></span>
//           <span></span>
//           <span></span>
//         </div>
//         <ul className='nav-links'>
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/restaurants">Restaurants</Link></li>
//           <li><Link to="/about">About</Link></li>
//           <li><Link to="/contact">Contact</Link></li>
//           <li><Link to="/cart"><img src={cart} alt="Add item to Cart" /></Link></li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
