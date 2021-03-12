import React from 'react';

import ChatHeader from '../shared/components/ChatHeader';
import Room from '../shared/components/Room';

interface RoomsScreenProps {}

const RoomsScreen: React.FC<RoomsScreenProps> = ({}) => {
  return (
    <div className="flex flex-1 flex-col h-screen">
      <ChatHeader title="Rooms" />
      <div className="flex flex-col lg:flex-row lg:flex-wrap lg:justify-center max-w-6xl mx-auto w-full px-4 md:px-6 py-4 overflow-auto">
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
    </div>
  );
};
export default RoomsScreen;
