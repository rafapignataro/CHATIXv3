import React, { ReactNode, useEffect, useRef, useState } from 'react';

import { Message } from '../../interfaces/Message';
import { ChatMessage } from '../ChatMessage';

interface ChatMainProps {
  messages: Message[];
}

const USERNAME = 'Rafael 1';

export const ChatMain: React.FC<ChatMainProps> = ({ messages }) => {
  const bottomRef = useRef<HTMLDivElement>(null);

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
