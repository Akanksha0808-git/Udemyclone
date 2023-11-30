// Carousel2.js
import React, { useState } from 'react';
// CardCarousel.js
import { cardData } from './StaticData';
const cardsPerPage = 3;
import './Carousels.css'; // Make sure to import your CSS file

const Carousel2 = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextCards = () => {
    setActiveIndex((prevIndex) => (prevIndex + cardsPerPage) % cardData.length);
  };

  const prevCards = () => {
    setActiveIndex((prevIndex) => (prevIndex - cardsPerPage + cardData.length) % cardData.length);
  };

  const visibleCards = cardData.slice(activeIndex, activeIndex + cardsPerPage);

  return (
    <div className="card-carousel">
      <button className="carousel-btn prev-btn" onClick={prevCards} disabled={activeIndex === 0}>
        Previous
      </button>
      <div className="cards-container">
        {visibleCards.map((card, index) => (
          <div key={index} className="card">
            <img src={card.image} alt={card.title} />
            <div className="card-content">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-btn next-btn" onClick={nextCards} disabled={activeIndex + cardsPerPage >= cardData.length}>
        Next
      </button>
    </div>
  );
};

export default Carousel2;
