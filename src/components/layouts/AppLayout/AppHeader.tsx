import { Avatar, Box, Flex, Icon, Text } from '@chakra-ui/react';
import React from 'react';

import { DiSenchatouch } from 'react-icons/di';

interface AppHeaderProps {}

const AppHeader = ({}: AppHeaderProps) => {
  return (
    <Box as="header" h="16" borderBottomWidth="2px" borderColor="gray.800">
      <Flex
        align="center"
        justify="space-between"
        h="100%"
        w="100%"
        maxW={1280}
        mx="auto"
        py="2"
        px={['4', '4', '6']}
      >
        <Icon as={DiSenchatouch} fontSize="48" color="red.500" />
        <Flex align="center">
          <Text fontSize="sm" mr="2">
            Rafael Pignataro
          </Text>
          <Avatar size="sm" name="Rafael Pignataro" />
        </Flex>
      </Flex>
    </Box>
  );
};
export default AppHeader;
