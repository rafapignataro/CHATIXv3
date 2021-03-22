import NextLink from 'next/link';
import React from 'react';
import { FaUsers } from 'react-icons/fa';

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
          <p className="md:text-xl font-semibold">12</p>
          <FaUsers className="h-full w-5 ml-1" />
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
