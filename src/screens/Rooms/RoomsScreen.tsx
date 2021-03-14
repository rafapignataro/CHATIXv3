import React from 'react';

import AppFooterNav from '../../shared/components/AppFooterNav';
import AppHeader from '../../shared/components/AppHeader';
import Room from '../../shared/components/Room';

interface RoomsScreenProps {}

const RoomsScreen: React.FC<RoomsScreenProps> = ({}) => {
  return (
    <div className="h-full flex flex-col">
      <AppHeader />
      <div className="flex items-center justify-between w-full mx-auto max-w-6xl px-4 md:px-6 py-3">
        <div>
          <form>
            <input
              type="text"
              placeholder="Write your message"
              className="bg-gray-200 dark:bg-gray-800 rounded flex-1 h-10 mr-3 px-4 focus:ring-2 focus:ring-purple-500"
            />
            <button className="bg-purple-600 hover:bg-purple-500 py-2 px-3 rounded text-white hover:bg-purple-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-full w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </form>
        </div>
        <div>
          <button className="bg-purple-600 hover:bg-purple-500 py-2 px-3 rounded text-white hover:bg-purple-500">
            Create room
          </button>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:flex-wrap lg:justify-center max-w-6xl mx-auto w-full px-4 md:px-6 py-2 overflow-auto flex-1">
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <div className="rounded p-3 mb-4  max-h-32 w-full lg:w-5/12 md:mx-2"></div>
      </div>
      <AppFooterNav />
    </div>
  );
};

export default RoomsScreen;
