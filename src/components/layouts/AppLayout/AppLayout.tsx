import { Flex } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

import AppFooter from './AppFooter';
import AppHeader from './AppHeader';
import AppMain from './AppMain';

interface AppLayoutProps {
  title: string;
  children: ReactNode;
}

const AppLayout = ({ children, title }: AppLayoutProps) => {
  return (
    <Flex h="100vh" direction="column">
      <AppHeader />
      <AppMain title={title}>{children}</AppMain>
      <AppFooter />
    </Flex>
  );
};
export default AppLayout;
