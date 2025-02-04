import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCaretLeft, faSquareCaretRight } from '@fortawesome/free-solid-svg-icons';

const CarouselControls = ({ prevImage, nextImage }) => (
  <>
    <button className="absolute top-1/2 left-4" onClick={prevImage}>
      <FontAwesomeIcon icon={faSquareCaretLeft} />
    </button>
    <button className="absolute top-1/2 right-4" onClick={nextImage}>
      <FontAwesomeIcon icon={faSquareCaretRight} />
    </button>
  </>
);

export default CarouselControls;
