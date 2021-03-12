import React from 'react';

import ChatHeader from '../shared/components/ChatHeader';
import Room from '../shared/components/Room';

interface RoomsScreenProps {}

const RoomsScreen: React.FC<RoomsScreenProps> = ({}) => {
  return (
    <div className="flex flex-1 flex-col h-screen">
      <ChatHeader title="Rooms" />
      <div className="flex flex-col pt-4 px-6 md:mx-auto w-full max-w-5xl">
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
