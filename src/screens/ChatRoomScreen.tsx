import React, { ChangeEvent, MouseEvent, useState } from 'react';

import ChatAside from '../shared/components/ChatAside';
import ChatFooter from '../shared/components/ChatFooter';
import ChatHeader from '../shared/components/ChatHeader';
import ChatMain from '../shared/components/ChatMain';

interface ChatRoomScreenProps {}

const messages = [
  {
    author: 'rafix',
    date: '13:59pm',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius consequatur quam aut et necessitatibus sapiente reiciendis officiis suscipit odio, illo eligendi mollitia, iusto ut nisi a. Laborum mollitia odit facere officia quo fuga quidem magnam praesentium odio, sint ab delectus!',
    img_url: null,
  },
  {
    author: 'Lucas Zillig',
    date: '11:33pm',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident recusandae reprehenderit sequi in aperiam ad!',
    img_url: null,
  },
  {
    author: 'Lucas Zillig',
    date: '11:33pm',
    content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    img_url: '/perfil.png',
  },
  {
    author: 'rafix',
    date: '11:33pm',
    content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    img_url: null,
  },
  {
    author: 'Lucas Zillig',
    date: '11:33pm',
    content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    img_url: null,
  },
  {
    author: 'rafix',
    date: '11:33pm',
    content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    img_url: '/perfil.png',
  },
  {
    author: 'Lucas Zillig',
    date: '11:33pm',
    content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    img_url: '/perfil.png',
  },
  {
    author: 'rafix',
    date: '11:33pm',
    content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    img_url: null,
  },
  {
    author: 'Lucas Zillig',
    date: '11:33pm',
    content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    img_url: null,
  },
  {
    author: 'rafix',
    date: '11:33pm',
    content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    img_url: '/perfil.png',
  },
];

const chatRoom = {
  name: 'Group 1559',
};

const ChatRoomScreen: React.FC<ChatRoomScreenProps> = ({}) => {
  const [isAsideOpen, setIsAsideOpen] = useState<boolean>(false);
  const handleHamburgerChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsAsideOpen(event.target.checked);
  };

  const handleCloseHamburger = () => {
    setIsAsideOpen(false);
  };

  return (
    <div className="flex h-screen relative">
      <ChatAside
        isAsideOpen={isAsideOpen}
        handleCloseHamburger={handleCloseHamburger}
      />
      <div className="flex flex-col flex-1 h-full">
        <ChatHeader
          title={chatRoom.name}
          handleHamburgerChange={handleHamburgerChange}
        />
        <ChatMain messages={messages} />
        <ChatFooter />
      </div>
    </div>
  );
};
export default ChatRoomScreen;
