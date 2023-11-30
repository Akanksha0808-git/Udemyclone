import React, { useState, useEffect } from 'react';
import "./Carousels.css";

const Carousel1 = () => {
  const images = [
    
   
    'https://img-b.udemycdn.com/notices/home_carousel_slide/image/5bef67d5-1f8e-4323-a648-dc4779739cd8.jpg',
    'https://img-b.udemycdn.com/notices/home_carousel_slide/image/1a871a12-4289-4d90-90e8-641d10a73f69.jpg'
    // Add more image file names as needed
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Auto slide every 3 seconds (adjust the interval as needed)

    return () => {
      clearInterval(interval); // Clear the interval when the component unmounts
    };
  }, [currentIndex]);

  return (
    <div className="carousel-container">
        {/* <div>hello box</div> */}
      <div className="carousel">
        <div>
        <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="carousel-image" />
        </div>
        <button onClick={prevSlide} className="carousel-control left">&lt;</button>
        <button onClick={nextSlide} className="carousel-control right">&gt;</button>
      </div>
    </div>
  );
};

export default Carousel1;
