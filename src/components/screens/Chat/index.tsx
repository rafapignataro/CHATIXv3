import React, { ChangeEvent, MouseEvent, useEffect, useState } from 'react';

import { ChatAside } from './elements/ChatAside';
import { ChatFooter } from './elements/ChatFooter';
import { ChatHeader } from './elements/ChatHeader';
import { ChatMain } from './elements/ChatMain';
import { Message } from './interfaces/Message';

interface ChatRoomScreenProps {}

const chatRoom = {
  name: 'Group 1559',
};

export const ChatRoomScreen: React.FC<ChatRoomScreenProps> = ({}) => {
  const [isAsideOpen, setIsAsideOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {}, [messages]);

  const handleHamburgerMenu = () => {
    setIsAsideOpen(!isAsideOpen);
  };

  return (
    <div className="h-full flex flex-col">
      <ChatAside
        isAsideOpen={isAsideOpen}
        handleHamburgerMenu={handleHamburgerMenu}
      />
      <ChatHeader
        title={chatRoom.name}
        handleHamburgerMenu={handleHamburgerMenu}
      />
      <ChatMain />
      <ChatFooter handleSubmit={() => {}} />
    </div>
  );
};
