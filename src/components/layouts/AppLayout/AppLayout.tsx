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
    <>
      <AppHeader />
      <AppMain title={title}>{children}</AppMain>
      <AppFooter />
    </>
  );
};
export default AppLayout;
