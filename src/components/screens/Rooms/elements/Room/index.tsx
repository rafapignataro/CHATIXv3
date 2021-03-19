import NextLink from 'next/link';
import React from 'react';

import getRandom from '../../../../../utils/getRandom';

interface RoomProps {}

const Room: React.FC<RoomProps> = ({}) => {
  return (
    <div className="flex flex-col justify-between bg-gray-100 dark:bg-gray-800 rounded p-3 mb-2  w-full h-full">
      <div className="flex items-center justify-between mb-6">
        <h3 className="lg:text-xl truncate mr-8">
          Falando sobre x, y e
          zdddddddddddddddddddddddddddddddddddddddddedededeedededededed
        </h3>
        <div className="flex items-center justify-between">
          <p className="md:text-2xl font-semibold">12</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-4 h-4 md:w-5 md:h-5 ml-1"
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
          <a className="bg-purple-600 hover:bg-purple-500 rounded py-1 px-4 font-semibold text-white text-lg">
            Join
          </a>
        </NextLink>
      </div>
    </div>
  );
};
export default Room;
