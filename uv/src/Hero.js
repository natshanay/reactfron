import React from 'react';
import './Hero.css';
import img from './samuele-errico-piccarini-FMbWFDiVRPs-unsplash.jpg';

const Hero = () => {
  return (
    <div className="home__container">
      <img
        className="home__image"
        src={img}
        alt="Hero"
      />
      <div className="hero__text">
        <h1>Discover the Best Cars</h1>
        <p>Your journey to the perfect ride starts here.</p>
      </div>
    </div>
  );
};

export default Hero;
