import { Flex } from '@chakra-ui/react';
import React, { ReactNode, useEffect, useRef, useState } from 'react';

import { Message } from '../../interfaces/Message';
import { ChatMessage } from '../ChatMessage';

interface ChatMainProps {
  messages: Message[];
}

const USERNAME = 'Rafael 1';

export const ChatMain = ({ messages }: ChatMainProps) => {
  const bottomRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    bottomRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  useEffect(() => scrollToBottom(), [messages]);

  return (
    <Flex
      as="main"
      flex="1"
      w="100%"
      py="4"
      overflow="auto"
      position="relative"
    >
      <Flex
        direction="column"
        w="100%"
        maxW={1280}
        mx="auto"
        position="absolute"
        px={['4', '4', '6']}
      >
        {messages &&
          messages.map((message, index) => (
            <ChatMessage
              key={index}
              message={message}
              isAuthor={message.author === USERNAME}
            />
          ))}
        <div ref={bottomRef}></div>
      </Flex>
    </Flex>
  );
};
