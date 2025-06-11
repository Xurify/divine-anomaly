"use client";

import React, { useState } from 'react';
import Button from './Button';

interface HamburgerMenuProps {
  children: React.ReactNode;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button 
        onClick={toggleMenu}
        className="sm:hidden flex flex-col justify-center items-center w-10 h-10"
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-0.5 bg-[#f5eac9] mb-1.5 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-[#f5eac9] mb-1.5 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-[#f5eac9] transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>
      <div 
        className={`absolute right-0 top-12 w-48 bg-[#1a1a1a] border border-[#b4a577] shadow-lg rounded-md overflow-hidden transition-all duration-300 z-50 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="py-2 px-3 flex flex-col gap-2">
          {children}
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu; 