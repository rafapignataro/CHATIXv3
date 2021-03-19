import React, { ButtonHTMLAttributes, HTMLProps, MouseEvent, MouseEventHandler } from 'react';
import { IconContext } from 'react-icons/lib';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  hFull?: boolean;
  Icon: React.ComponentType;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  text,
  Icon,
  onClick,
  hFull,
  ...props
}) => {
  return (
    <button
      {...props}
      className={`flex items-center justify-between bg-purple-600 hover:bg-purple-500 py-2 px-3 rounded text-white hover:bg-purple-500 focus:outline-none ${
        hFull && 'h-full'
      }`}
      onClick={onClick}
    >
      {Icon && (
        <IconContext.Provider value={{ className: `h-full w-5` }}>
          <Icon />
        </IconContext.Provider>
      )}
      {text && <p className="hidden md:block md:ml-2">{text}</p>}
    </button>
  );
};
export default Button;
