import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import React, { FormEvent, useState } from 'react';
import {
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form';
import { FiEdit3, FiSend } from 'react-icons/fi';
import { CustomInput } from '../../../shared/Form/CustomInput';
import { IconButton } from '../../../shared/IconButton';

import { InputBarForm } from '../../../shared/InputBarForm';

interface ChatFooterProps {
  handleSubmit: any;
  fieldRegister: UseFormRegister<FieldValues>;
}

export const ChatFooter = ({
  handleSubmit,
  fieldRegister,
}: ChatFooterProps) => {
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
        onSubmit={handleSubmit}
      >
        <CustomInput
          name="message"
          placeholder="Type your text"
          Icon={FiEdit3}
          {...fieldRegister('message')}
        />
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
