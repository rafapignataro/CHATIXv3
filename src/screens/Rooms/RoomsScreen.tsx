import React from 'react';
import { HiPlus, HiSearch } from 'react-icons/hi';

import Button from '../../shared/components/Button';
import Room from '../../shared/components/Room';
import AppLayout from '../../shared/layouts/AppLayout/AppLayout';

interface RoomsScreenProps {}

const RoomsScreen: React.FC<RoomsScreenProps> = ({}) => {
  return (
    <AppLayout>
      <div className="flex items-center justify-between w-full mx-auto max-w-6xl">
        <form className="flex items-center justify-between flex-1 w-auto h-full">
          <div className="flex flex-1 items-center bg-gray-200 dark:bg-gray-800 rounded h-full">
            <input
              type="text"
              placeholder="Search for rooms"
              className="bg-gray-200 dark:bg-gray-800 rounded flex-1 px-4 focus:ring-0"
            />
            <Button>
              <HiSearch className="h-full w-5" />
            </Button>
          </div>
        </form>
        <div className="ml-3" style={{ height: '100%' }}>
          <Button text="Create room">
            <HiPlus className="h-full w-6" />
          </Button>
        </div>
      </div>
      <div className="flex-1 grid gap-2 grid-cols-1 md:grid-cols-2  lg:grid-cols-3 md:max-w-6xl w-full mt-3">
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />

        <Room />

        <Room />

        <Room />

        <Room />

        <Room />

        {/* <div className="rounded p-3 mb-2 shadow-md flex-grow w-full h-28 lg:h-36 md:mx-1 lg:mx-2 md:w-5/12 lg:w-1/4"></div> */}
      </div>
    </AppLayout>
  );
};

export default RoomsScreen;
