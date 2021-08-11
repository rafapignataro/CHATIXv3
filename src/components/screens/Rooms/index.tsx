import {
  Flex,
  Grid,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
  useDisclosure,
  Spinner,
} from '@chakra-ui/react';
import React from 'react';
import { FiPlus, FiSearch } from 'react-icons/fi';
import { signIn, signOut, useSession } from 'next-auth/client';

import AppLayout from '../../layouts/AppLayout/AppLayout';
import Button from '../../shared/Button';
import { CustomInput } from '../../shared/Form/CustomInput';
import { CreateRoomModal } from '../../shared/modals/CreateRoomModal';
import { RoomCard } from './elements/RoomCard';
import { debounce } from '../../../utils/debounce';
import { SubmitHandler, useForm } from 'react-hook-form';

interface handleSearchFormData {
  text: string;
}

interface RoomsScreenProps {}

export const RoomsScreen = ({}: RoomsScreenProps) => {
  const { onOpen, isOpen, onClose } = useDisclosure();
  const { register, handleSubmit, formState } = useForm();
  const handleSearchFormSubmit: SubmitHandler<handleSearchFormData> = async ({
    text,
  }) => {
    return new Promise(resolve => setTimeout(() => resolve(text), 1200));
  };

  return (
    <AppLayout title="Rooms">
      <CreateRoomModal isOpen={isOpen} onClose={onClose} />
      <Flex
        align="center"
        justify="space-between"
        mx="auto"
        w="100%"
        maxW={1280}
      >
        <Flex
          as="form"
          align="center"
          onSubmit={handleSubmit(handleSearchFormSubmit)}
        >
          <CustomInput
            name="search"
            placeholder="Search"
            Icon={FiSearch}
            {...register('text')}
            mr="4"
          />
          {formState.isSubmitting && <Spinner color="red.500" />}
        </Flex>

        <Button ml="4" text="Create room" Icon={FiPlus} onClick={onOpen} />
      </Flex>
      <SimpleGrid
        columns={[1, 1, 2, 3]}
        spacing="4"
        my="3"
        w="100%"
        maxW={1280}
      >
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
      </SimpleGrid>
    </AppLayout>
  );
};
