import { useTheme } from 'next-themes';
import Image from 'next/image';
import NextLink from 'next/link';
import React, { useEffect, useState } from 'react';

interface ChatAsideProps {
  isAsideOpen: boolean;
  handleCloseHamburger: () => void;
}

const ChatAside: React.FC<ChatAsideProps> = ({
  isAsideOpen,
  handleCloseHamburger,
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
    <aside
      className={`bg-white dark:bg-gray-800 flex flex-col z-10 text-black dark:text-white shadow-xl h-full w-64 transition-transform duration-300 absolute transform-gpu top-0 left-0  ${
        !isAsideOpen ? '-translate-x-64' : ''
      }`}
    >
      <div className="bg-gray-50 dark:bg-gray-900 flex items-center justify-between py-3 px-4 h-18">
        <h1 className="font-bold text-2xl">Chatix 3.0</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-7 h-7 cursor-pointer"
          onClick={handleCloseHamburger}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
      <div className="flex flex-col flex-1 px-4 py-2 overflow-auto">
        <h3 className="font-semibold text-lg mb-2">Connected Users</h3>
        <div className="flex flex-col">
          <div className="flex items-center justify-start mb-3 ">
            <Image
              className="rounded-full"
              src="/perfil.png"
              width={45}
              height={45}
            />
            <strong className="ml-2 truncate">
              {/* Max nick length 20 */}
              Rafael Pignatarooooo
            </strong>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 dark:bg-gray-900 flex items-center justify-center h-18 px-6 py-5  font-bold">
        <NextLink href="/rooms">
          <a className="bg-purple-300 dark:bg-purple-500 flex items-center  px-3 py-1 rounded shadow-md font-semibold mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-full w-4 mr-1"
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
        <button
          className="bg-purple-300 dark:bg-purple-500 px-3 py-1 flex items-center rounded shadow-md font-semibold"
          onClick={switchTheme}
        >
          {theme === 'light' ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-full w-5 mr-1"
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
              className="h-full w-5 mr-1"
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
      </div>
    </aside>
  );
};
export default ChatAside;
