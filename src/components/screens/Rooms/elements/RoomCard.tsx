import { Avatar, AvatarGroup, Flex, HStack, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';

import { getRandom } from '../../../../utils/getRandom';
import { getRandomAvatar } from '../../../../utils/getRandomAvatar';

const titles = [
  'This is a possible title',
  'Talking about everything in this room',
  'talking about family',
  'talking about technology',
  'I dont know what to put here',
  'How can technology effect the world and the people?',
  'Is Tesla going to the mars in next year or it will never go?',
  'Is Tesla going to the mars in next year or it will never go? Is Tesla going to the mars in next year or it will never go? ',
];

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
        <Flex align="center" mb="4">
          <Avatar
            name="Rafael Pignataro"
            src={getRandomAvatar()}
            borderColor="gray.700"
            borderWidth="3px"
            mr="2"
            size="lg"
          />
          <Flex direction="column" width="100%" overflow="hidden">
            <Text fontWeight="semibold" lineHeight="1" mb="2" isTruncated>
              {titles[getRandom(titles.length)]}
            </Text>
            <HStack spacing="1">
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
