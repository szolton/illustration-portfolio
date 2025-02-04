import React, { useState } from 'react';
import '../assets/style.css';
import 'tailwindcss/tailwind.css';
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

// Importing images
import paramoreBag from '../assets/images/APPAREL/paramore-bag.png';
import mockup from '../assets/images/APPAREL/mockup.png';
import puppiesMixer from '../assets/images/APPAREL/puppies mixer.png';
import lovinLifeFest from '../assets/images/APPAREL/lovin-life-fest.png';
import lovinLifeCollage from '../assets/images/APPAREL/Lovin_Life_Photo_Collage.png';
import clevelandBaseball from '../assets/images/APPAREL/cleveland-baseball.png';
import paramoreCleMockup from '../assets/images/APPAREL/paramore-cle-mockup.png';
import homecomingFootball from '../assets/images/APPAREL/homecoming-football-stadium.png';
import steelVengeance from '../assets/images/APPAREL/STEEVE.png';
import kentStateBag from '../assets/images/APPAREL/0d98ae77-212b-42c0-9c00-17eb2dc24491_rw_1920.png';
import akronBag from '../assets/images/APPAREL/3a1fbe17-b07b-4966-9ebc-a9d01fe4e5fb_rw_1920.png';
import akronChineseNewYear from '../assets/images/APPAREL/uakronshirts.png';
import paramoreDetroit from '../assets/images/APPAREL/paramore detroit 2-01.png';
import avocados from '../assets/images/APPAREL/avocados.png';
import uaGreekLifeCollage from '../assets/images/APPAREL/UA Greek Life Collage Shirts 2023 VC-02.png';
import runningOutOfTime from '../assets/images/APPAREL/running out of time-01.png';
import cedarPointCollage from '../assets/images/APPAREL/cp poster 2 copy.png';
import iowaFootballStadium from '../assets/images/APPAREL/iowa.jpg';
import houseSticker from '../assets/images/APPAREL/house-sticker.png';
import houseDrawing from '../assets/images/APPAREL/tote.jpg';
import illustratedCollage from '../assets/images/APPAREL/e1869b4f-92c1-4e96-baa4-0ba88ad8fd78_rw_1920.png';
import fallHouseSticker from '../assets/images/APPAREL/pike-halloween.png';
import pumpkinIllustration from '../assets/images/APPAREL/pumpkin-halloween.png';
import gammaPhiWatercolor from '../assets/images/APPAREL/gamma phi watercolor copy.png';
import indyBarCrawl from '../assets/images/APPAREL/indy bar crawl.png';
import sigmaKappa from '../assets/images/APPAREL/sigma kappa.png';
import paramoreWork from '../assets/images/APPAREL/paramore-work.png';

// FullScreenImage component
const FullScreenImage = ({ src, onClose, prevImage, nextImage }) => {
  React.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      } else if (event.key === 'ArrowLeft') {
        prevImage();
      } else if (event.key === 'ArrowRight') {
        nextImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, prevImage, nextImage]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <button
        className="absolute top-4 right-4 text-white text-3xl bg-black p-2 rounded-full focus:outline-none"
        onClick={onClose}
        aria-label="Close"
      >
        &times;
      </button>
      <img
        src={src}
        className="max-w-full max-h-full object-contain"
        alt="Full screen"
        aria-label="Full screen view"
      />
      <button
        className="absolute top-1/2 left-4 text-white text-3xl bg-black p-2 rounded-full focus:outline-none"
        onClick={prevImage}
        aria-label="Previous image"
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button
        className="absolute top-1/2 right-4 text-white text-3xl bg-black p-2 rounded-full focus:outline-none"
        onClick={nextImage}
        aria-label="Next image"
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};

// Main Illustrations component
const Illustrations = () => {
  const [fullScreenImage, setFullScreenImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const images = [
    paramoreBag,
    mockup,
    puppiesMixer,
    lovinLifeFest,
    lovinLifeCollage,
    clevelandBaseball,
    paramoreCleMockup,
    homecomingFootball,
    steelVengeance,
    kentStateBag,
    akronBag,
    akronChineseNewYear,
    paramoreDetroit,
    avocados,
    uaGreekLifeCollage,
    runningOutOfTime,
    cedarPointCollage,
    iowaFootballStadium,
    houseSticker,
    houseDrawing,
    illustratedCollage,
    fallHouseSticker,
    pumpkinIllustration,
    gammaPhiWatercolor,
    indyBarCrawl,
    sigmaKappa,
    paramoreWork
  ];

  const handleImageClick = (src, index) => {
    setFullScreenImage(src);
    setCurrentIndex(index);
  };

  const handleCloseFullScreen = () => {
    setFullScreenImage(null);
    setCurrentIndex(null);
  };

  const handlePrevImage = () => {
    if (currentIndex > 0) {
      setFullScreenImage(images[currentIndex - 1]);
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNextImage = () => {
    if (currentIndex < images.length - 1) {
      setFullScreenImage(images[currentIndex + 1]);
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <>
      <h4 className="text-left p-5 pl-7" style={{ fontFamily: 'Alte Haas Grotesk, sans-serif', color: '#6ac9cb', fontSize: '18px' }}>
        Graphic Designer, Illustrator, and Web Designer based in Cleveland, OH.
      </h4>

      <div className="container mx-auto">
        <div className="p-5 sm:p-10">
          <h1 className="text-center mb-8" style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#6ac9cb', fontSize: '48px' }}>
            Illustrations
          </h1>
          <p className="text-center text-gray-600 mb-10">
            Designs and illustrations created using Adobe Illustrator, InDesign, Photoshop, and Fresco. Composition, typography, and creative illustration were key components in creating these designs.
          </p>

          {/* Paramore Illustrated Collage */}
          <img
            src={paramoreBag}
            className="mx-auto mb-8 max-w-full h-auto object-cover rounded shadow-md p-8 cursor-pointer"
            onClick={() => handleImageClick(paramoreBag, 0)}
            alt="Paramore bag mockup"
          />

<a
  href="#process" // Replace with the correct link or path
  className="text-blue-500 underline hover:text-blue-700"
>
  Process
</a>

          {/* Fall Out Boy and Pumpkin/Puppy Illustration */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <img
              src={mockup}
              className="mx-auto max-w-full h-full object-cover rounded shadow-md cursor-pointer"
              onClick={() => handleImageClick(mockup, 1)}
              alt="Mockup illustration"
            />
            <img
              src={puppiesMixer}
              className="mx-auto max-w-full h-full object-cover rounded shadow-md cursor-pointer"
              onClick={() => handleImageClick(puppiesMixer, 2)}
              alt="Pumpkin puppy illustration"
            />
          </div>

          {/* Lovin Life Illustrations x2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <img
              src={lovinLifeFest}
              className="mx-auto max-w-full h-full object-cover rounded shadow-md cursor-pointer"
              onClick={() => handleImageClick(lovinLifeFest, 3)}
              alt="Lovin life illustration"
            />
            <img
              src={lovinLifeCollage}
              className="mx-auto max-w-full h-full object-cover rounded shadow-md cursor-pointer"
              onClick={() => handleImageClick(lovinLifeCollage, 4)}
              alt="Lovin life collage illustration"
            />
          </div>

          {/* Cleveland Baseball, Paramore Cleveland, Homecoming Football */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <img
              src={clevelandBaseball}
              className="mx-auto max-w-full h-full object-cover rounded shadow-md cursor-pointer"
              onClick={() => handleImageClick(clevelandBaseball, 5)}
              alt="Cleveland baseball illustration"
            />
            <img
              src={paramoreCleMockup}
              className="mx-auto max-w-full h-full object-cover rounded shadow-md cursor-pointer"
              onClick={() => handleImageClick(paramoreCleMockup, 6)}
              alt="Paramore Cleveland mockup"
            />
            <img
              src={homecomingFootball}
              className="mx-auto max-w-full h-full object-cover rounded shadow-md cursor-pointer"
              onClick={() => handleImageClick(homecomingFootball, 7)}
              alt="Homecoming football illustration"
            />
          </div>

          {/* Steel Vengeance, Kent State Bag */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <img
              src={steelVengeance}
              className="mx-auto max-w-full h-full object-cover rounded shadow-md cursor-pointer"
              onClick={() => handleImageClick(steelVengeance, 8)}
              alt="Steel vengeance illustration"
            />
            <img
              src={kentStateBag}
              className="mx-auto max-w-full h-full object-cover rounded shadow-md cursor-pointer"
              onClick={() => handleImageClick(kentStateBag, 9)}
              alt="Kent State bag illustration"
            />
          </div>

          {/* Akron Bag, Akron Chinese New Year */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <img
              src={akronBag}
              className="mx-auto max-w-full h-full object-cover rounded shadow-md cursor-pointer"
              onClick={() => handleImageClick(akronBag, 10)}
              alt="Akron bag illustration"
            />
            <img
              src={akronChineseNewYear}
              className="mx-auto max-w-full h-full object-cover rounded shadow-md cursor-pointer"
              onClick={() => handleImageClick(akronChineseNewYear, 11)}
              alt="Akron Chinese New Year illustration"
            />
          </div>

          {/* Paramore Detroit, Avocados */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <img
              src={paramoreDetroit}
              className="mx-auto max-w-full h-full object-cover rounded shadow-md cursor-pointer"
              onClick={() => handleImageClick(paramoreDetroit, 12)}
              alt="Paramore Detroit illustration"
            />
            <img
              src={avocados}
              className="mx-auto max-w-full h-full object-cover rounded shadow-md cursor-pointer"
              onClick={() => handleImageClick(avocados, 13)}
              alt="Avocados illustration"
            />
          </div>

          {/* Greek Life Collage, Running Out of Time */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <img
              src={uaGreekLifeCollage}
              className="mx-auto max-w-full h-full object-cover rounded shadow-md cursor-pointer"
              onClick={() => handleImageClick(uaGreekLifeCollage, 14)}
              alt="Greek Life collage illustration"
            />
            <img
              src={runningOutOfTime}
              className="mx-auto max-w-full h-full object-cover rounded shadow-md cursor-pointer"
              onClick={() => handleImageClick(runningOutOfTime, 15)}
              alt="Running out of time illustration"
            />
          </div>

          {/* Cedar Point Collage, Iowa Football Stadium */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <img
              src={cedarPointCollage}
              className="mx-auto max-w-full h-full object-cover rounded shadow-md cursor-pointer"
              onClick={() => handleImageClick(cedarPointCollage, 16)}
              alt="Cedar Point collage illustration"
            />
            <img
              src={iowaFootballStadium}
              className="mx-auto max-w-full h-full object-cover rounded shadow-md cursor-pointer"
              onClick={() => handleImageClick(iowaFootballStadium, 17)}
              alt="Iowa football stadium illustration"
            />
          </div>

          {/* House Sticker, House Drawing */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <img
              src={houseSticker}
              className="mx-auto max-w-full h-full object-cover rounded shadow-md cursor-pointer"
              onClick={() => handleImageClick(houseSticker, 18)}
              alt="House sticker illustration"
            />
            <img
              src={houseDrawing}
              className="mx-auto max-w-full h-full object-cover rounded shadow-md cursor-pointer"
              onClick={() => handleImageClick(houseDrawing, 19)}
              alt="House drawing illustration"
            />
          </div>

          {/* Illustrated Collage, Fall House Sticker */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <img
              src={illustratedCollage}
              className="mx-auto max-w-full h-full object-cover rounded shadow-md cursor-pointer"
              onClick={() => handleImageClick(illustratedCollage, 20)}
              alt="Illustrated collage"
            />
            <img
              src={fallHouseSticker}
              className="mx-auto max-w-full h-full object-cover rounded shadow-md cursor-pointer"
              onClick={() => handleImageClick(fallHouseSticker, 21)}
              alt="Fall house sticker"
            />
          </div>

          {/* Pumpkin Illustration, Gamma Phi Watercolor */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <img
              src={pumpkinIllustration}
              className="mx-auto max-w-full h-full object-cover rounded shadow-md cursor-pointer"
              onClick={() => handleImageClick(pumpkinIllustration, 22)}
              alt="Pumpkin illustration"
            />
            <img
              src={gammaPhiWatercolor}
              className="mx-auto max-w-full h-full object-cover rounded shadow-md cursor-pointer"
              onClick={() => handleImageClick(gammaPhiWatercolor, 23)}
              alt="Gamma Phi watercolor illustration"
            />
          </div>

          {/* Indy Bar Crawl, Sigma Kappa */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <img
              src={indyBarCrawl}
              className="mx-auto max-w-full h-full object-cover rounded shadow-md cursor-pointer"
              onClick={() => handleImageClick(indyBarCrawl, 24)}
              alt="Indy bar crawl illustration"
            />
            <img
              src={sigmaKappa}
              className="mx-auto max-w-full h-full object-cover rounded shadow-md cursor-pointer"
              onClick={() => handleImageClick(sigmaKappa, 25)}
              alt="Sigma Kappa illustration"
            />
          </div>
        </div>
      </div>

      {fullScreenImage && (
        <FullScreenImage
          src={fullScreenImage}
          onClose={handleCloseFullScreen}
          prevImage={handlePrevImage}
          nextImage={handleNextImage}
        />
      )}
    </>
  );
};

export default Illustrations;
