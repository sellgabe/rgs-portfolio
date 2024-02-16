import React, { useState } from 'react';
import HamburgerIcon from '../assets/hamburgericon.svg';
import CloseIcon from '../assets/closeicon.svg';

const Navbar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleHomeClick = (event) => {
    event.preventDefault();
    scrollToTop();
    setShowMobileNav(false);
  };

  return (
    <nav className="w-full h-auto flex items-center justify-between py-7 px-14 z-50 fixed top-0 left-0 right-0 bg-white">
      <h1
        className="font-bold text-xl text-neutral-700 cursor-pointer"
        onClick={handleHomeClick}
      >
        rgs.<span className="text-blue-500">dev</span>
      </h1>
      <ul className="flex gap-4 list-none font-semibold text-neutral-700 max-lg:hidden text-lg">
        <li className="hover:text-blue-500">
          <a href="" onClick={handleHomeClick}>
            Home
          </a>
        </li>
        <li className="hover:text-blue-500">
          <a href="#about">About</a>
        </li>
        <li className="hover:text-blue-500">
          <a href="#projects">Projects</a>
        </li>
        <li className="hover:text-blue-500">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="hidden max-lg:block cursor-pointer">
        <img
          src={HamburgerIcon}
          alt="hamburger icon"
          onClick={() => setShowMobileNav((prevState) => !prevState)}
          className="hamburger-icon"
        />
      </div>
      <div
        className={`bg-white  flex flex-col w-full fixed h-full top-0 transition-all duration-500  ${
          showMobileNav ? 'left-0' : '-left-full'
        }`}
      >
        <div className="flex justify-end py-7 px-14">
          <img
            src={CloseIcon}
            alt="close icon"
            onClick={() => setShowMobileNav((prevState) => !prevState)}
            className="cursor-pointer"
          />
        </div>
        <div className="h-full w-full flex justify-center items-center">
          <ul className="text-center text-[30px] font-medium flex flex-col gap-6">
            <li className="hover:text-blue-500">
              <a href="" onClick={handleHomeClick}>
                Home
              </a>
            </li>
            <li
              className="hover:text-blue-500"
              onClick={() => setShowMobileNav((prevState) => !prevState)}
            >
              <a href="#about">About</a>
            </li>
            <li
              className="hover:text-blue-500"
              onClick={() => setShowMobileNav((prevState) => !prevState)}
            >
              <a href="#projects">Projects</a>
            </li>
            <li
              className="hover:text-blue-500"
              onClick={() => setShowMobileNav((prevState) => !prevState)}
            >
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
