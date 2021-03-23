import React, { ChangeEvent, MouseEvent, useEffect, useState } from 'react';

import { ChatAside } from './elements/ChatAside';
import { ChatFooter } from './elements/ChatFooter';
import { ChatHeader } from './elements/ChatHeader';
import { ChatMain } from './elements/ChatMain';
import { Message } from './interfaces/Message';

interface ChatRoomScreenProps {}

const MESSAGES = [
  {
    author: 'Rafael 1',
    date: '13:59pm',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius consequatur quam aut et necessitatibus sapiente reiciendis officiis suscipit odio, illo eligendi mollitia, iusto ut nisi a. Laborum mollitia odit facere officia quo fuga quidem magnam praesentium odio, sint ab delectus!',
    img_url: null,
  },
  {
    author: 'Rafael 2',
    date: '11:33pm',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident recusandae reprehenderit sequi in aperiam ad!',
    img_url: null,
  },
  {
    author: 'Rafael 2',
    date: '11:33pm',
    content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    img_url: '/perfil.png',
  },
  {
    author: 'Rafael 1',
    date: '11:33pm',
    content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    img_url: null,
  },
  {
    author: 'Rafael 2',
    date: '11:33pm',
    content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    img_url: null,
  },
  {
    author: 'Rafael 1',
    date: '11:33pm',
    content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    img_url: '/perfil.png',
  },
  {
    author: 'Rafael 2',
    date: '11:33pm',
    content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    img_url: '/perfil.png',
  },
  {
    author: 'Rafael 1',
    date: '11:33pm',
    content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    img_url: null,
  },
  {
    author: 'Rafael 2',
    date: '11:33pm',
    content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    img_url: null,
  },
  {
    author: 'Rafael 1',
    date: '11:33pm',
    content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    img_url: '/perfil.png',
  },
  {
    author: 'Rafael 1',
    date: '11:33pm',
    content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    img_url: '/perfil.png',
  },
  {
    author: 'Rafael 1',
    date: '11:33pm',
    content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    img_url: '/perfil.png',
  },
  {
    author: 'Rafael 1',
    date: '11:33pm',
    content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    img_url: '/perfil.png',
  },
  {
    author: 'Rafael 2',
    date: '11:33pm',
    content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    img_url: null,
  },
  {
    author: 'Rafael 2',
    date: '11:33pm',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente provident accusamus consequatur adipisci ea sit similique minima ipsam dolores odit corrupti in dicta repudiandae eos consequuntur odio laboriosam autem natus soluta ab, molestiae ex vitae quis. Voluptate, reiciendis!',
    img_url: null,
  },
];

const chatRoom = {
  name: 'Group 1559',
};

export const ChatRoomScreen: React.FC<ChatRoomScreenProps> = ({}) => {
  const [isAsideOpen, setIsAsideOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    setMessages(MESSAGES);
  }, []);

  const handleHamburgerMenu = () => {
    setIsAsideOpen(!isAsideOpen);
  };

  const handleNewMessageSent = (text: string) => {
    const authors = {
      0: 'Rafael 1',
      1: 'Rafael 2',
    };

    const currentDate = new Date();
    const hours = currentDate.getHours() === 0 ? '00' : currentDate.getHours();
    const minutes =
      currentDate.getMinutes() < 10
        ? `0${currentDate.getMinutes()}`
        : currentDate.getMinutes();

    const date = `${hours}:${minutes}`;

    setMessages([
      ...messages,
      {
        author: authors[Math.floor(Math.random() * Math.floor(2))],
        date,
        content: text,
      },
    ]);
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
      <ChatFooter handleSubmit={handleNewMessageSent} />
    </div>
  );
};
