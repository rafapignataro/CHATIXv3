import { Avatar, Flex, Text } from '@chakra-ui/react';

interface ConnectedUserProps {
  name: string;
}

export const ConnectedUser = ({ name }: ConnectedUserProps) => {
  return (
    <Flex align="center">
      <Avatar name={name} size="md" />
      <Text ml="2">{name}</Text>
    </Flex>
  );
};
