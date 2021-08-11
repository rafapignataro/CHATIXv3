import { Box, Flex } from '@chakra-ui/react';
import React, { ChangeEvent, MouseEvent, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import firebase from '../../../services/firebase';

import { ChatDrawerProvider } from './contexts/ChatDrawerContext';
import { ChatDrawer } from './elements/ChatDrawer';
import { ChatFooter } from './elements/ChatFooter';
import { ChatHeader } from './elements/ChatHeader';
import { ChatMain } from './elements/ChatMain';
import { Message } from './interfaces/Message';

interface ChatRoomScreenProps {}

interface HandleNewMessageData {
  message: string;
}

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
  const [messages, setMessages] = useState<Message[]>([]);

  const messagesRef = firebase.firestore().collection('messages');

  useEffect(() => {
    (async function () {
      messagesRef.onSnapshot(query =>
        query.forEach(doc => {
          console.log('--------');
          console.log(doc.data());
        })
      );
    })();
  }, []);

  const { register, handleSubmit, formState, reset } = useForm();

  const handleNewMessage: SubmitHandler<HandleNewMessageData> =
    async values => {
      const user = { name: 'Rafael Pignataro' };
      const currentDate = new Date();
      const hours =
        currentDate.getHours() === 0 ? '00' : currentDate.getHours();
      const minutes =
        currentDate.getMinutes() < 10
          ? `0${currentDate.getMinutes()}`
          : currentDate.getMinutes();

      const date = `${hours}:${minutes}`;

      setMessages([
        ...messages,
        {
          author: user.name,
          date,
          content: values.message,
        },
      ]);

      reset();
    };

  return (
    <ChatDrawerProvider>
      <ChatDrawer />
      <ChatHeader title={chatRoom.name} />
      <ChatMain messages={messages} />
      <ChatFooter
        handleSubmit={handleSubmit(handleNewMessage)}
        fieldRegister={register}
      />
    </ChatDrawerProvider>
  );
};
