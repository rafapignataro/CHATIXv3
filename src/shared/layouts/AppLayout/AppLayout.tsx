import React from 'react';

import AppFooter from './AppFooter';
import AppHeader from './AppHeader';
import AppMain from './AppMain';

interface AppLayoutProps {}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className="h-screen flex flex-col ">
      <AppHeader />
      <AppMain>{children}</AppMain>
      <AppFooter />
    </div>
  );
};
export default AppLayout;
