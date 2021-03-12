import NextLink from 'next/link';
import React from 'react';

import getRandom from '../utils/getRandom';

interface RoomProps {}

const Room: React.FC<RoomProps> = ({}) => {
  return (
    <div className="bg-white dark:bg-gray-700 rounded p-3 mb-3 md:mx-1 shadow-md md:flex-initial max-h-32 max-w-full md:w-96">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-semibold truncate mr-8">
          Falando sobre x, y e zdddddddddddddddddddddddddddddddddddddddd
        </h3>
        <div className="flex items-center justify-between">
          <p className="text-2xl font-bold ">12</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 h-5 ml-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        </div>
      </div>
      <div className="flex justify-end">
        <NextLink href={`/room?id=${getRandom(3000)}`}>
          <a className="bg-purple-500 hover:bg-purple-400 rounded py-1 px-4 font-bold text-white text-xl">
            Join
          </a>
        </NextLink>
      </div>
    </div>
  );
};
export default Room;
