import Image from 'next/image';
import React, { ChangeEvent, useEffect, useState } from 'react';

interface ChatHeaderProps {
  title: string;
  handleHamburgerChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({
  title,
  handleHamburgerChange,
}) => {
  return (
    <header className="bg-gray-50 dark:bg-gray-900 text-black dark:text-white dark:bg-gray-700 py-3 px-6 h-18">
      <div className="flex items-center">
        <div className="mr-3">
          <label
            className="flex items-center flex-col cursor-pointer w-8"
            htmlFor="hamburgerMenuButton"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <input
            id="hamburgerMenuButton"
            className="hidden"
            type="checkbox"
            onChange={handleHamburgerChange}
          />
        </div>
        <h2 className="text-xl font-semibold">{title}</h2>
        <div className="flex ml-auto items-center">
          <h1 className="text-2xl font-semibold mr-2">Rafix</h1>
          <Image
            className="rounded-full"
            src="/perfil.png"
            width={32}
            height={32}
          />
        </div>
      </div>
    </header>
  );
};
export default ChatHeader;
