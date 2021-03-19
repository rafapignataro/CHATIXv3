import React, { ChangeEvent, MouseEvent, useState } from 'react';

import ChatAside from './elements/ChatAside';
import ChatFooter from './elements/ChatFooter';
import ChatHeader from './elements/ChatHeader';
import ChatMain from './elements/ChatMain';

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

  const handleHamburgerMenu = () => {
    console.log('pipi');
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
      <ChatMain messages={messages} />
      <ChatFooter />
    </div>
  );
};
export default ChatRoomScreen;
