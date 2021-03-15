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
      <div className="flex flex-col flex-1 lg:flex-row lg:flex-wrap lg:justify-center max-w-6xl mx-auto w-full mt-3">
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <div className="rounded p-3 mb-4 max-h-32 w-full lg:w-5/12 md:mx-2 flex-1"></div>
      </div>
    </AppLayout>
  );
};

export default RoomsScreen;
