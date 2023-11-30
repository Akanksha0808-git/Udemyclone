// Carousel2.js
import React, { useState } from 'react';
// CardCarousel.js
import { cardData } from './StaticData';
const cardsPerPage = 3;
import './Carousels.css'; // Make sure to import your CSS file

const Carousel2 = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextCards = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % cardData.length);
  };
  

  const prevCards = () => {
    setActiveIndex((prevIndex) => (prevIndex - cardsPerPage + cardData.length) % cardData.length);
  };

//   const visibleCards = [
//     cardData[(activeIndex - 1 + cardData.length) % cardData.length],
//     ...cardData.slice(activeIndex, activeIndex + cardsPerPage),
//   ];
const visibleCards = [
    cardData[activeIndex],
    cardData[(activeIndex + 1) % cardData.length],
    cardData[(activeIndex + 2) % cardData.length],
    cardData[(activeIndex + 3) % cardData.length],
  ];

  return (
    <div className="card-carousel">
      <button className="carousel-btn prev-btn" onClick={prevCards} disabled={activeIndex === 0}>
        Previous
      </button>
      <div className="cards-container">
        {visibleCards.map((card, index) => (
          <div key={index} className="card">
            {/* <img src={card.image} alt={card.title} /> */}
            <div className="card-content">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <div className="quote-icon">''</div>
              <p>{card.quote}</p>
              <div className="author-badge">{card.author}</div>
              <hr />
              <div className="play-button">
                <i className="fa fa-play-circle" /> {card.playButtonText}
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-btn next-btn" onClick={nextCards} style={{ display: activeIndex < cardData.length - 4 ? 'block' : 'none' }}>
        Next
      </button>
    </div>
  );
};

export default Carousel2;
