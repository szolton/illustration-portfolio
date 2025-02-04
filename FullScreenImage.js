import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import '../assets/style.css'; // Ensure this path is correct

const FullScreenImage = ({ src, onClose, prevImage, nextImage }) => {
  useEffect(() => {
    const handleKeydown = (e) => {
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          prevImage();
          break;
        case 'ArrowRight':
          nextImage();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeydown);
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [onClose, prevImage, nextImage]);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
      onClick={onClose} // Close on overlay click
    >
      <button
        className="absolute top-4 right-4 text-white text-3xl"
        onClick={(e) => {
          e.stopPropagation(); // Prevent event bubbling
          onClose();
        }}
      >
        <FontAwesomeIcon icon={faTimes} />
      </button>
      <img
        src={src}
        className="max-w-full max-h-full object-contain"
        alt="Full screen"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image
      />
      <button
        className="absolute top-1/2 left-4 text-white text-3xl transform -translate-y-1/2"
        onClick={(e) => {
          e.stopPropagation(); // Prevent event bubbling
          prevImage();
        }}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button
        className="absolute top-1/2 right-4 text-white text-3xl transform -translate-y-1/2"
        onClick={(e) => {
          e.stopPropagation(); // Prevent event bubbling
          nextImage();
        }}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};

export default FullScreenImage;
