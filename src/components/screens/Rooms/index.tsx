import {
  Flex,
  Grid,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { FiPlus, FiSearch } from 'react-icons/fi';

import AppLayout from '../../layouts/AppLayout/AppLayout';
import Button from '../../shared/Button';
import { CreateRoomModal } from '../../shared/modals/CreateRoomModal';
import { RoomCard } from './elements/RoomCard';

interface RoomsScreenProps {}

export const RoomsScreen = ({}: RoomsScreenProps) => {
  const { onOpen, isOpen, onClose } = useDisclosure();
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
        <Flex as="form" align="center">
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<FiSearch color="gray.800" />}
            />
            <Input
              placeholder="Search"
              bg="gray.800"
              focusBorderColor="gray.700"
              border="2px"
              borderColor="transparent"
              _hover={{
                borderColor: 'gray.700',
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
