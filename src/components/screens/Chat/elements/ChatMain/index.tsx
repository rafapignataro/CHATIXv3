import React, { ReactNode, useEffect, useRef, useState } from 'react';

import { ChatMessage } from '../ChatMessage';

interface ChatMainProps {}

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

const USERNAME = 'Rafael 1';

export const ChatMain: React.FC<ChatMainProps> = () => {
  const [messages, setMessages] = useState([]);

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMessages(MESSAGES);
    scrollToBottom();
  }, []);

  const scrollToBottom = () => {
    bottomRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  useEffect(() => scrollToBottom(), [messages]);

  return (
    <main className="flex-1 flex pt-4 px-4 md:px-6 overflow-auto">
      <div className="flex flex-col w-full max-w-6xl mx-auto ">
        {messages &&
          messages.map((message, index) => (
            <ChatMessage
              key={index}
              message={message}
              isAuthor={message.author === USERNAME}
            />
          ))}
        <div ref={bottomRef}></div>
      </div>
    </main>
  );
};
