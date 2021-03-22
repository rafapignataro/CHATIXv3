import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
}

const Input: React.FC<InputProps> = ({ placeholder, ...props }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      {...props}
      className="bg-gray-200 dark:bg-gray-800 rounded h-12 w-full px-3 mb-3 focus:outline-none focus:ring-2 focus:ring-purple-600"
    />
  );
};
export default Input;
