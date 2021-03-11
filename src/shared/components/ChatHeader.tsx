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
    <header className="bg-gray-200 text-black dark:text-white dark:bg-gray-700 py-3 px-6 h-18">
      <div className="flex items-center">
        <div className="mr-3">
          <label
            className="flex items-center flex-col cursor-pointer w-8"
            htmlFor="hamburgerMenuButton"
          >
            <span className="h-1 w-8 bg-black dark:bg-white mb-1"></span>
            <span className="h-1 w-8 bg-black dark:bg-white"></span>
            <span className="h-1 w-8 bg-black dark:bg-white mt-1"></span>
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
