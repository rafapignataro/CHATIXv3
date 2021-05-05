import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Switch,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useRef } from 'react';
import { useCreateRoomModal } from '../../screens/Chat/contexts/CreateRoomModalContext';

import Button from '../Button';

interface CreateRoomModalProps {}

export const CreateRoomModal = ({}: CreateRoomModalProps) => {
  const { isOpen, onClose } = useCreateRoomModal();
  console.log('Modal', isOpen);
  const initialRef = useRef();

  return (
    <Modal
      isCentered
      initialFocusRef={initialRef}
      isOpen={isOpen}
      onClose={onClose}
      size="lg"
    >
      <ModalOverlay />
      <ModalContent bg="gray.800">
        <ModalHeader>Create a room</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl isRequired mb="4">
            <FormLabel>Room name</FormLabel>
            <Input placeholder="Type your room name" />
          </FormControl>
          <FormControl mb="4">
            <FormLabel>Password</FormLabel>
            <Input placeholder="Type your room name" />
            <FormHelperText color="gray.300">
              Leave blank for public room.
            </FormHelperText>
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button text="Create" w="100%" />
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
