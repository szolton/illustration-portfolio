import React from 'react';
import { Link } from 'react-router-dom';
import resumePdf from '../assets/images/Zolton_resume.pdf';

const Header = () => (
  <header className="nav-header bg-custom-turquoise text-white py-6 custom-header md: pb-1">
    <div className="w-full flex flex-col md:flex-row justify-between items-center">
      <Link to="/" className="order-1 md:order-2 mx-auto md:mx-0 md:mr-auto mb-2 md:mb-0">
        <h1 className="text-center md:text-left text-7xl md:text-8xl" style={{ fontFamily: 'Bebas Neue' }}>
          Stephanie Zolton
        </h1>
      </Link>
      <nav className="w-full md:w-auto order-2 md:order-2">
        <ul className="grid grid-cols-2 gap-2 md:flex md:flex-row md:space-x-8 items-center justify-center md:justify-end w-full text-md md:text-base">
          <li className="col-span-1 flex-1 mr-1 md:flex-none text-center text-xl pl-4">
            <Link to="/Illustrations" className="hover:text-gray-600">ILLUSTRATIONS</Link>
          </li>
          <li className="col-span-1 flex-1 md:flex-none text-center text-xl">
            <Link to="/WebDesign" className="hover:text-gray-600">WEB DESIGN</Link>
          </li>
          <li className="col-span-1 flex-1 md:flex-none text-center text-xl">
            <Link to="/About" className="hover:text-gray-600">ABOUT</Link>
          </li>
          <li className="col-span-1 flex-1 md:flex-none text-center text-xl pr-4">
            <Link to={resumePdf} target='_blank' className="hover:text-gray-600">RESUME</Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
