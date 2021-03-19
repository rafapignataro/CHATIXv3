import React, { InputHTMLAttributes } from 'react';

import Button from '../Button';

interface InputButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  buttonText?: string;
  placeholder: string;
  Icon: React.ComponentType;
}

const InputButton: React.FC<InputButtonProps> = ({
  Icon,
  buttonText,
  placeholder,
  ...props
}) => {
  return (
    <div className="flex flex-1 items-center bg-gray-100 dark:bg-gray-800 rounded h-full">
      <input
        type="text"
        placeholder={placeholder}
        className="bg-gray-100 dark:bg-gray-800 rounded flex-1 px-4 focus:outline-none"
        {...props}
      />
      <Button Icon={Icon} hFull text={buttonText && buttonText} />
    </div>
  );
};
export default InputButton;
