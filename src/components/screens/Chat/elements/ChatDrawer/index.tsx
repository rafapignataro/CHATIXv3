import React from 'react';
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useBreakpointValue,
  DrawerCloseButton,
  Text,
} from '@chakra-ui/react';
import { useChatDrawer } from '../../contexts/ChatDrawerContext';

interface ChatDrawerProps {}

export const ChatDrawer: React.FC<ChatDrawerProps> = ({}) => {
  const { isOpen, onClose } = useChatDrawer();

  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent bg="gray.800" p="4">
          <DrawerCloseButton mt="6" />
          <DrawerHeader>Room 1459</DrawerHeader>
          <DrawerBody>
            <Text>Hey bro</Text>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};
