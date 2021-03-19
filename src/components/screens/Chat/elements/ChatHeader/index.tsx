import NextLink from 'next/link';
import React, { MouseEvent, useEffect, useState } from 'react';

interface ChatHeaderProps {
  title: string;
  handleHamburgerMenu: (event: MouseEvent<HTMLButtonElement>) => void;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({
  title,
  handleHamburgerMenu,
}) => {
  return (
    <header className="bg-gray-50 dark:bg-gray-900 border-b-2 border-gray-200 dark:border-gray-800 py-3 px-4 md:px-6 h-18 ">
      <div className="flex items-center max-w-6xl mx-auto">
        <NextLink href="/rooms">
          <a className="flex flex-col items-center justify-center text-xs mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-full w-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
          </a>
        </NextLink>
        <h2 className="text-xl">{title}</h2>
        <div className="flex ml-auto items-center">
          <div className="flex items-center justify-center">
            {/* <button
              className="flex flex-col items-center justify-center text-xs text-purple-400 hover:text-purple-500"
              onClick={switchTheme}
            >
              {theme === 'light' ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-4 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              )}
              {theme === 'light' ? 'Dark' : 'Light'}
            </button> */}
            <button
              className="flex flex-col items-center justify-center font-semibold text-xs text-purple-400 hover:text-purple-500"
              onClick={handleHamburgerMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-full w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              Users
            </button>
          </div>
          {/* <Image
            className="rounded-full "
            src="/perfil.png"
            width={32}
            height={32}
            alt="User logo"
          /> */}
        </div>
      </div>
    </header>
  );
};
export default ChatHeader;
