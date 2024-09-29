import React from 'react';
import '../Styles/About.css';
const About = () => {
    return (
        <div className='aboutinfo'>
            <h1>Welcome to Foodies!</h1>
            <ul className='aboutpoints'>
                <li><strong>Tailwind CSS:</strong> Ensures a seamless and efficient design for a visually appealing user interface.</li>
                <li><strong>Swiggy API:</strong> Provides an extensive list of restaurants to explore.</li>
                <li><strong>Geolocation:</strong> Allows instant access to nearby restaurants based on your current location.</li>
                <li><strong>Custom Hooks:</strong> Improves code readability, modularity, and maintainability, making development effortless.</li>
                <li><strong>Redux Toolkit:</strong> Enhances data management with efficient state management and smooth data flow.</li>
                <li><strong>OpenWeather API:</strong> Enables discovery of restaurants based on latitude and longitude of various locations, offering diverse choices wherever you are.</li>
            </ul>
        </div>
    );
};

export default About;
