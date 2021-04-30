import { Flex, Heading } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

interface AppMainProps {
  title: string;
  children: ReactNode;
}

const AppMain = ({ children, title }: AppMainProps) => {
  return (
    <Flex
      as="main"
      direction="column"
      align="center"
      w="100%"
      maxWidth={1280}
      mx="auto"
      flex="1"
      overflow="auto"
      px={['4', '4', '6']}
    >
      <Flex py="2" w="100%">
        <Heading>{title}</Heading>
      </Flex>
      {children}
    </Flex>
  );
};
export default AppMain;
