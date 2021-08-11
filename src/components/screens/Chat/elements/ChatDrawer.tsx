import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  DrawerCloseButton,
  VStack,
} from '@chakra-ui/react';
import { useChatDrawer } from '../contexts/ChatDrawerContext';
import { ConnectedUser } from './ConnectedUser';

interface ChatDrawerProps {}

export const ChatDrawer: React.FC<ChatDrawerProps> = ({}) => {
  const { isOpen, onClose } = useChatDrawer();

  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent bg="gray.900" p="4">
          <DrawerCloseButton
            mt="6"
            _hover={{
              color: 'red.500',
              bg: 'gray.800',
            }}
          />
          <DrawerHeader>Connected Users</DrawerHeader>
          <DrawerBody>
            <VStack spacing="4" align="flex-start">
              <ConnectedUser name="Rafael Pignataro" />
              <ConnectedUser name="Lucas Zillig" />
              <ConnectedUser name="Vinicius Junqueira" />
              <ConnectedUser name="Luiz Fernando" />
              <ConnectedUser name="Lucas Cortez" />
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};
