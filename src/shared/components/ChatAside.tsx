import Image from 'next/image';
import React, { useEffect, useState } from 'react';

interface ChatAsideProps {
  isAsideOpen: boolean;
  handleCloseHamburger: () => void;
}

const ChatAside: React.FC<ChatAsideProps> = ({
  isAsideOpen,
  handleCloseHamburger,
}) => {
  return (
    <aside
      className={`bg-white dark:bg-gray-800 flex flex-col z-10 shadow-xl h-full w-64 transition-transform duration-300 absolute transform-gpu top-0 left-0  ${
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
      <div className="bg-gray-50 dark:bg-gray-900 flex items-center justify-center h-18 px-6 py-5  font-bold"></div>
    </aside>
  );
};
export default ChatAside;
