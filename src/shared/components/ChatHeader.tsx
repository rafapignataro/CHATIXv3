import { useTheme } from 'next-themes';
import Image from 'next/image';
import NextLink from 'next/link';
import React, { ChangeEvent, useEffect, useState } from 'react';

interface ChatHeaderProps {
  title: string;
  handleHamburgerChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({
  title,
  handleHamburgerChange,
}) => {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const switchTheme = () => {
    if (isMounted) {
      setTheme(theme === 'light' ? 'dark' : 'light');
    }
  };

  return (
    <header className="bg-gray-50 dark:bg-gray-900 border-b-2 border-gray-200 dark:border-gray-800 py-3 px-4 md:px-6 h-18 ">
      <div className="flex items-center max-w-6xl mx-auto">
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
              className="h-8 w-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
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
        <h2 className="text-xl">{title}</h2>
        <div className="flex ml-auto items-center">
          <div className="flex items-center justify-center mx-5 ">
            <button
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
            </button>
            <NextLink href="/rooms">
              <a className="flex flex-col items-center justify-center text-xs ml-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-full w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
                Rooms
              </a>
            </NextLink>
          </div>
          <Image
            className="rounded-full "
            src="/perfil.png"
            width={32}
            height={32}
            alt="User logo"
          />
        </div>
      </div>
    </header>
  );
};
export default ChatHeader;
