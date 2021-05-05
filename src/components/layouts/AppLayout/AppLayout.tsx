import { Flex } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import { CreateRoomModalProvider } from '../../screens/Chat/contexts/CreateRoomModalContext';
import { CreateRoomModal } from '../../shared/modals/CreateRoomModal';

import AppFooter from './AppFooter';
import AppHeader from './AppHeader';
import AppMain from './AppMain';

interface AppLayoutProps {
  title: string;
  children: ReactNode;
}

const AppLayout = ({ children, title }: AppLayoutProps) => {
  return (
    <CreateRoomModalProvider>
      <CreateRoomModal />
      <AppHeader />
      <AppMain title={title}>{children}</AppMain>
      <AppFooter />
    </CreateRoomModalProvider>
  );
};
export default AppLayout;
