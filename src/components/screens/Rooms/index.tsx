import {
  Flex,
  Grid,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
} from '@chakra-ui/react';
import React from 'react';
import { FiPlus, FiSearch } from 'react-icons/fi';

import AppLayout from '../../layouts/AppLayout/AppLayout';
import Button from '../../shared/Button';
import { useCreateRoomModal } from '../Chat/contexts/CreateRoomModalContext';
import { RoomCard } from './elements/RoomCard';

interface RoomsScreenProps {}

export const RoomsScreen = ({}: RoomsScreenProps) => {
  const { onOpen } = useCreateRoomModal();
  return (
    <AppLayout title="Rooms">
      <Flex
        align="center"
        justify="space-between"
        mx="auto"
        w="100%"
        maxW={1280}
      >
        <Flex as="form" align="center">
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<FiSearch color="gray.800" />}
            />
            <Input
              placeholder="Search for rooms"
              bg="gray.800"
              focusBorderColor="red.500"
              border="2px"
              borderColor="transparent"
              _hover={{
                borderColor: 'red.500',
              }}
            />
          </InputGroup>
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
