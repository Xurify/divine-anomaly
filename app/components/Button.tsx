import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  className = '', 
  type = 'button' 
}) => {
  return (
    <button 
      type={type}
      onClick={onClick}
      className={`border border-[#b4a577] text-[#f5eac9] hover:bg-[#f5eac913] transition duration-300 cursor-pointer py-2.5 px-10 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button; 