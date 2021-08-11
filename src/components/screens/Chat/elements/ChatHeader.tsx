import { Box, Flex, Heading } from '@chakra-ui/react';
import { IconButton } from '../../../shared/IconButton';
import NextLink from 'next/link';
import React, { MouseEvent, useEffect, useState } from 'react';
import Button from '../../../shared/Button';
import { FiHome, FiInfo } from 'react-icons/fi';
import { useChatDrawer } from '../contexts/ChatDrawerContext';

interface ChatHeaderProps {
  title: string;
}

export const ChatHeader = ({ title }: ChatHeaderProps) => {
  const { onOpen } = useChatDrawer();

  return (
    <Box as="header" h="16" borderBottomWidth="2px" borderColor="gray.800">
      <Flex
        align="center"
        justify="space-between"
        h="100%"
        w="100%"
        maxW={1280}
        mx="auto"
        py="2"
        px={['4', '4', '6']}
      >
        <Flex align="center">
          <NextLink href="/rooms" passHref>
            <a>
              <IconButton
                aria-label="Return to home link"
                icon={<FiHome />}
                size="md"
                fontSize="24"
              />
            </a>
          </NextLink>
          <Heading ml="2" as="h1" size="lg" color="gray.200">
            Room 1354
          </Heading>
        </Flex>
        <IconButton
          aria-label="Group info"
          icon={<FiInfo />}
          size="md"
          fontSize="24"
          onClick={onOpen}
        />
      </Flex>
    </Box>
  );
};
