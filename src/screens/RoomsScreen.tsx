import React from 'react';

import ChatHeader from '../shared/components/ChatHeader';
import Room from '../shared/components/Room';

interface RoomsScreenProps {}

const RoomsScreen: React.FC<RoomsScreenProps> = ({}) => {
  return (
    <div className="flex flex-1 flex-col h-screen text-black dark:text-white">
      <ChatHeader title="Rooms" />
      <div className="flex flex-col flex-wrap md:flex-row md:justify-around pt-4 px-6 ">
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
    </div>
  );
};
export default RoomsScreen;
