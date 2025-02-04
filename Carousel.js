import React, { useState } from 'react';
import CarouselControls from './CarouselControls'; // Ensure the path is correct based on your file structure

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative">
      <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
      <CarouselControls prevImage={prevImage} nextImage={nextImage} />
    </div>
  );
};

export default Carousel;
