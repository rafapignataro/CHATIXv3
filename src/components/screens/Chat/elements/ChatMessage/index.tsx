import { Avatar, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

import { Message } from '../../interfaces/Message';

interface ChatMessageProps {
  message: Message;
  isAuthor: boolean;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({
  message,
  isAuthor,
}) => {
  if (!isAuthor) {
    return (
      <Flex mb="4" w="100%" justify="flex-start">
        <Flex maxW="75%">
          <Flex mr="2">
            <Avatar name={message.author} size="sm" />
          </Flex>
          <Flex direction="column" justify="flex-end">
            <Text fontSize="xs">
              {message.author} - {message.date}
            </Text>
            <Flex
              bg="gray.800"
              fontSize="sm"
              p="2"
              borderRadius="md"
              borderTopLeftRadius="0"
            >
              {message.content}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    );
  }

  return (
    <Flex mb="4" justify="flex-end">
      <Flex maxW="75%">
        <Flex direction="column" align="flex-end">
          <Text fontSize="xs">{message.date} - You</Text>
          <Flex
            bg="gray.700"
            fontSize="sm"
            p="2"
            borderRadius="md"
            borderTopRightRadius="0"
          >
            {message.content}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
