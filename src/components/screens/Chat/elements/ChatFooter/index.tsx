import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import React, { FormEvent, useState } from 'react';
import { FiEdit3, FiSend } from 'react-icons/fi';
import { IconButton } from '../../../../shared/IconButton';

import { InputBarForm } from '../../../../shared/InputBarForm';

interface ChatFooterProps {
  handleSubmit: (text: string) => void;
}

export const ChatFooter: React.FC<ChatFooterProps> = ({ handleSubmit }) => {
  return (
    <Box as="footer" h="16" borderTopWidth="2px" borderColor="gray.800">
      <Flex
        as="form"
        align="center"
        justify="space-between"
        h="100%"
        w="100%"
        maxW={1280}
        mx="auto"
        py="2"
        px={['4', '4', '6']}
      >
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<FiEdit3 color="gray.300" />}
          />
          <Input placeholder="Type your message" bg="gray.800" border="0" />
        </InputGroup>
        <IconButton
          aria-label="Group info"
          icon={<FiSend />}
          size="md"
          fontSize="24"
          ml="2"
        />
      </Flex>
    </Box>
  );
};
