import {
  Box,
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
  VStack,
} from '@chakra-ui/react';
import React, { useRef } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import Button from '../Button';
import { CustomInput } from '../Form/CustomInput';

type CreateRoomFormData = {
  name: string;
  password: string;
};

interface CreateRoomModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CreateRoomModal = ({ isOpen, onClose }: CreateRoomModalProps) => {
  const initialRef = useRef();

  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  const handleCreateRoom: SubmitHandler<CreateRoomFormData> = async values => {
    return new Promise(resolve =>
      setTimeout(() => {
        console.log(values);
        resolve(values);
      }, 1000)
    );
  };

  return (
    <Modal
      isCentered
      initialFocusRef={initialRef}
      isOpen={isOpen}
      onClose={onClose}
      size="lg"
    >
      <ModalOverlay />
      <ModalContent bg="gray.900">
        <ModalHeader>Create a room</ModalHeader>
        <ModalCloseButton
          _hover={{
            color: 'red.500',
          }}
        />
        <Box as="form" onSubmit={handleSubmit(handleCreateRoom)}>
          <ModalBody>
            <VStack spacing="6">
              <CustomInput
                name="name"
                label="Room name"
                placeholder="The room name"
                isRequired={true}
                error={errors.name}
                {...register('name')}
              />
              <CustomInput
                type="password"
                name="password"
                label="Room password"
                placeholder="The room password"
                helperText="Leave blank if the room is public"
                error={errors.password}
                {...register('password')}
              />
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button
              size="lg"
              text="Create"
              isLoading={formState.isSubmitting}
            />
          </ModalFooter>
        </Box>
      </ModalContent>
    </Modal>
  );
};
