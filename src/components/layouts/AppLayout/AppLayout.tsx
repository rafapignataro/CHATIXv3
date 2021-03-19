import React from 'react';

import AppFooter from './AppFooter';
import AppHeader from './AppHeader';
import AppMain from './AppMain';

interface AppLayoutProps {
  title: string;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children, title }) => {
  return (
    <div className="h-screen flex flex-col ">
      <AppHeader />
      <AppMain title={title}>{children}</AppMain>
      <AppFooter />
    </div>
  );
};
export default AppLayout;
