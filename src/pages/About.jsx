import React from 'react';
import MultiplePizzas from '../assets/multiplePizzas.jpg'; // make sure to add extension if needed
import '../styles/About.css'; // ensure this file exists and styles are defined

function About() {
  return (
    <div className='about'>
      <div
        className='aboutTop'
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className='aboutBottom'>
        <h1>ABOUT US</h1>
        <p>
          Welcome to Pizza Store! We make delicious hand-crafted pizzas using
          fresh ingredients and lots of love. Whether you’re a fan of
          Margherita, Pepperoni, or experimental fusion flavors, we’ve got you
          covered. Our mission is simple: serve hot, fresh, and flavorful pizzas
          that bring joy to every bite 🍕.
        </p>
      </div>
    </div>
  );
}

export default About;
