import { Box, Flex } from '@chakra-ui/react';
import React, { ChangeEvent, MouseEvent, useEffect, useState } from 'react';
import { ChatDrawerProvider } from './contexts/ChatDrawerContext';

import { ChatFooter } from './elements/ChatFooter';
import { ChatHeader } from './elements/ChatHeader';
import { ChatMain } from './elements/ChatMain';
import { Message } from './interfaces/Message';

interface ChatRoomScreenProps {}

const MESSAGES = [
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

export const ChatRoomScreen = ({}: ChatRoomScreenProps) => {
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
      0: 'Rafael Pignataro',
      1: 'Lucas Zillig',
      2: 'Vinicius Junqueira',
      3: 'Leonardo Lopes',
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
    <ChatDrawerProvider>
      <ChatHeader title={chatRoom.name} />
      <ChatMain messages={messages} />
      <ChatFooter handleSubmit={handleNewMessageSent} />
    </ChatDrawerProvider>
  );
};
