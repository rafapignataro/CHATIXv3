import React from 'react';
import { FaPlus, FaSearch } from 'react-icons/fa';

import AppLayout from '../../layouts/AppLayout/AppLayout';
import Button from '../../shared/Button';
import { InputBarForm } from '../../shared/InputBarForm';
import Room from './elements/Room';

interface RoomsScreenProps {}

export const RoomsScreen: React.FC<RoomsScreenProps> = ({}) => {
  return (
    <AppLayout title="Rooms">
      <div className="flex items-center justify-between w-full mx-auto max-w-6xl">
        <InputBarForm
          placeholder="Search for rooms"
          Icon={FaSearch}
          handleSubmit={() => {}}
        />
        <div className="ml-3">
          <Button text="Create room" Icon={FaPlus} />
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
