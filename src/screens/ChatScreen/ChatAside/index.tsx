import React, { MouseEvent, useEffect, useState } from 'react';

import ConnectedUser from '../ConnectedUser';

interface ChatAsideProps {
  isAsideOpen: boolean;
  handleHamburgerMenu: (event: MouseEvent<SVGSVGElement>) => void;
}

const ChatAside: React.FC<ChatAsideProps> = ({
  isAsideOpen,
  handleHamburgerMenu,
}) => {
  return (
    <aside
      className={`bg-white dark:bg-gray-900 flex flex-col z-10 shadow-xl h-full w-64 transition-transform duration-300 absolute transform-gpu top-0 left-0  ${
        !isAsideOpen ? '-translate-x-64' : ''
      }`}
    >
      <div className="bg-gray-50 dark:bg-gray-900 flex items-center justify-between py-3 px-4 h-18">
        <h1 className="text-lg mb-1">Connected Users</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-7 h-7 cursor-pointer"
          onClick={handleHamburgerMenu}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
      <div className="flex flex-col flex-1 px-4 py-2 w-full overflow-auto">
        <div className="flex flex-col ">
          <ConnectedUser />
          <ConnectedUser />
          <ConnectedUser />
          <ConnectedUser />
          <ConnectedUser />
        </div>
      </div>
    </aside>
  );
};
export default ChatAside;
