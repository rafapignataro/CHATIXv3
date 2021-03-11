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
      className={`flex flex-col bg-gray-200 text-black dark:text-white dark:bg-gray-700 shadow-xl h-full w-64 transition-transform duration-300 absolute transform-gpu top-0 left-0  ${
        !isAsideOpen ? '-translate-x-64' : ''
      }`}
    >
      <div className="flex items-center justify-between py-3 px-4 h-18">
        <h1 className="font-bold text-2xl">Chatix 3.0</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-7 h-7 cursor-pointer"
          onClick={handleCloseHamburger}
        >
          <path
            fill-rule="evenodd"
            d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <div className="flex flex-col flex-1 px-4 py-2 bg-gray-200 dark:bg-gray-800 overflow-auto">
        <h3 className="font-semibold text-lg">Connected Users</h3>
        <div className="flex flex-col">
          <div className="flex items-center justify-start my-3 ">
            <Image
              className="rounded-full border3"
              src="/perfil.png"
              width={45}
              height={45}
            />
            <strong className="ml-2 truncate">
              {/* Max nick length 20 */}
              Rafael Pignatarooooo
            </strong>
          </div>
          <div className="flex items-center justify-start my-3 ">
            <Image
              className="rounded-full border3"
              src="/perfil.png"
              width={45}
              height={45}
            />
            <strong className="ml-2 truncate">
              {/* Max nick length 20 */}
              Rafael Pignatarooooo
            </strong>
          </div>
          <div className="flex items-center justify-start my-3 ">
            <Image
              className="rounded-full border3"
              src="/perfil.png"
              width={45}
              height={45}
            />
            <strong className="ml-2 truncate">
              {/* Max nick length 20 */}
              Rafael Pignatarooooo
            </strong>
          </div>
          <div className="flex items-center justify-start my-3 ">
            <Image
              className="rounded-full border3"
              src="/perfil.png"
              width={45}
              height={45}
            />
            <strong className="ml-2  truncate">
              {/* Max nick length 20 */}
              Rafael Pignatarooooo
            </strong>
          </div>
          <div className="flex items-center justify-start my-3 ">
            <Image
              className="rounded-full border3"
              src="/perfil.png"
              width={45}
              height={45}
            />
            <strong className="ml-2  truncate">
              {/* Max nick length 20 */}
              Rafael Pignatarooooo
            </strong>
          </div>
          <div className="flex items-center justify-start my-3 ">
            <Image
              className="rounded-full border3"
              src="/perfil.png"
              width={45}
              height={45}
            />
            <strong className="ml-2  truncate">
              {/* Max nick length 20 */}
              Rafael Pignatarooooo
            </strong>
          </div>
          <div className="flex items-center justify-start my-3 ">
            <Image
              className="rounded-full border3"
              src="/perfil.png"
              width={45}
              height={45}
            />
            <strong className="ml-2  truncate">
              {/* Max nick length 20 */}
              Rafael Pignatarooooo
            </strong>
          </div>
          <div className="flex items-center justify-start my-3 ">
            <Image
              className="rounded-full border3"
              src="/perfil.png"
              width={45}
              height={45}
            />
            <strong className="ml-2  truncate">
              {/* Max nick length 20 */}
              Rafael Pignatarooooo
            </strong>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center h-18 px-6 py-5  font-bold">
        <NextLink href="/rooms">
          <a className="bg-purple-300 dark:bg-purple-500 px-3 py-1 rounded shadow-md font-semibold mr-2">
            Rooms
          </a>
        </NextLink>
        <button
          className="bg-purple-300 dark:bg-purple-500 px-3 py-1 rounded shadow-md font-semibold"
          onClick={switchTheme}
        >
          {theme}
        </button>
      </div>
    </aside>
  );
};
export default ChatAside;
