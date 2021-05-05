import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  Link,
  Text,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';
import { FaUsers } from 'react-icons/fa';

import getRandom from '../../../../utils/getRandom';

interface RoomCardProps {}

export const RoomCard = ({}: RoomCardProps) => {
  return (
    <NextLink href={'/room'}>
      <Flex
        as="a"
        direction="column"
        justify="space-between"
        borderWidth="2px"
        borderColor="transparent"
        borderRadius="md"
        bg="gray.800"
        px="4"
        py="2"
        cursor="pointer"
        _hover={{
          borderColor: 'red.500',
        }}
      >
        <Flex>
          <Avatar
            src="https://bit.ly/dan-abramov"
            borderColor="red.500"
            borderWidth="2px"
            mr="2"
          />
          <Flex direction="column" flex="1">
            <Heading
              as="h3"
              mb="1"
              fontSize="md"
              fontWeight="regular"
              isTruncated
            >
              Falando sobre x, y e
              zdddddddddddddddddddddddddddddddddddddddddedededeedededededed
            </Heading>
            <HStack spacing="1" mb="4">
              <Text bg="gray.700" fontSize="small" borderRadius="md" px="2">
                Portuguese
              </Text>
              <Text bg="gray.700" fontSize="small" borderRadius="md" px="2">
                Food
              </Text>
            </HStack>
          </Flex>
        </Flex>

        <AvatarGroup size="sm" spacing="-1" max={6}>
          <Avatar
            name="Vinicius Junqueira"
            borderColor="gray.800"
            src="https://bit.ly/dan-abramov"
          />
          <Avatar
            ml="-2"
            borderColor="gray.800"
            name="Lucas Zillig"
            src="https://bit.ly/tioluwani-kolawole"
          />
          <Avatar
            ml="-2"
            borderColor="gray.800"
            name="Anderson Junqueira"
            src="https://bit.ly/ryan-florence"
          />
          <Avatar
            ml="-2"
            borderColor="gray.800"
            name="Anderson Junqueira"
            src="https://bit.ly/ryan-florence"
          />
          <Avatar
            ml="-2"
            borderColor="gray.800"
            name="Anderson Junqueira"
            src="https://bit.ly/ryan-florence"
          />
          <Avatar
            ml="-2"
            borderColor="gray.800"
            name="Anderson Junqueira"
            src="https://bit.ly/ryan-florence"
          />
          <Avatar
            ml="-2"
            borderColor="gray.800"
            name="Anderson Junqueira"
            src="https://bit.ly/ryan-florence"
          />
          <Avatar
            ml="-2"
            borderColor="gray.800"
            name="Anderson Junqueira"
            src="https://bit.ly/ryan-florence"
          />
          <Avatar />
        </AvatarGroup>
      </Flex>
    </NextLink>
  );
};
