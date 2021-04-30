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
import { RoomCard } from './elements/RoomCard';

interface RoomsScreenProps {}

export const RoomsScreen = ({}: RoomsScreenProps) => {
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
              children={<FiSearch color="gray.300" />}
            />
            <Input placeholder="Search for rooms" bg="gray.800" border="0" />
          </InputGroup>
        </Flex>
        <Button ml="4" text="Create room" Icon={FiPlus} />
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
      </SimpleGrid>
    </AppLayout>
  );
};
