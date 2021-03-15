import React, { HTMLProps, MouseEvent, MouseEventHandler } from 'react';

interface ButtonProps {
  text?: string;
  // onClick(): MouseEvent<HTMLButtonElement, MouseEvent>;
  onClick?(): void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  text,
  onClick,
  ...props
}) => {
  return (
    <button
      className="flex items-center justify-between bg-purple-600 hover:bg-purple-500 py-2 px-3 rounded text-white hover:bg-purple-500 focus:outline-none"
      onClick={onClick}
      {...props}
    >
      {children}
      {text && <p className={`${children ? 'hidden md:block' : ''}`}>{text}</p>}
    </button>
  );
};
export default Button;
