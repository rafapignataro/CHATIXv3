import React from 'react';
import { HiPlus, HiSearch } from 'react-icons/hi';

import AppLayout from '../../layouts/AppLayout/AppLayout';
import Button from '../../shared/Button';
import InputButton from '../../shared/InputButton';
import Room from './elements/Room';

interface RoomsScreenProps {}

const RoomsScreen: React.FC<RoomsScreenProps> = ({}) => {
  return (
    <AppLayout title="Rooms">
      <div className="flex items-center justify-between w-full mx-auto max-w-6xl">
        <form className="flex items-center justify-between flex-1 w-auto h-full">
          <InputButton Icon={HiSearch} placeholder="Search for rooms" />
        </form>
        <div className="ml-3">
          <Button h-full text="Create room" Icon={HiPlus} />
        </div>
      </div>
      <div className="flex-1 grid gap-3 grid-cols-1 md:grid-cols-2  lg:grid-cols-3 md:max-w-6xl w-full mt-3">
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
      </div>
    </AppLayout>
  );
};

export default RoomsScreen;
