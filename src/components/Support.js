import React from 'react';
import '../Styles/Support.css';

const Support = () => {
  return (
    <div className="support-container">
      <h1 className="support-title">Support</h1>
      
      <section className="support-section help-section">
        <h2 className="section-title">How Can We Help You?</h2>
        <p className="section-description">
          At <strong>MealDash</strong>, we strive to provide a seamless and satisfying experience for all your food delivery needs. If you have any questions, issues, or require assistance, our dedicated support team is here to help.
        </p>
      </section>

      <section className="support-section contact-section">
        <h3 className="section-subtitle"> Contact Us</h3>
        <p className="section-description">
          For more personalized support, feel free to reach out via the following methods:
        </p>
        <ul className="section-list">
          <li><strong>Email:</strong> mahammadatheek17@gmail.com</li>
          <li><strong>Phone:</strong> +91 7981250043 </li>
          <li><strong>Social Media:</strong> DM us on Facebook, Instagram, or Twitter</li>
        </ul>
      </section>
      <p>At <strong>MealDash</strong>, your satisfaction is our priority. We're always here to ensure you have the best food delivery experience possible!</p>
    </div>
  );
}

export default Support;

