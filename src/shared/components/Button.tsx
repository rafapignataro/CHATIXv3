import React, { HTMLProps } from 'react';

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  text?: string;
}

const Button: React.FC<ButtonProps> = ({ children, text, ...props }) => {
  return (
    <button
      className="bg-purple-600 hover:bg-purple-500 py-2 px-3 rounded text-white hover:bg-purple-500 flex items-center justify-between"
      {...props}
    >
      {children}
      {text && <p className={`${children ? 'hidden md:block' : ''}`}>{text}</p>}
    </button>
  );
};
export default Button;
