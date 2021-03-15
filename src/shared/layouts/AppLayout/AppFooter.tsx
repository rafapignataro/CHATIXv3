import React from 'react';
import { HiChatAlt2, HiCog, HiUser } from 'react-icons/hi';

import AppFooterItem from './AppFooterItem';

interface AppFooterProps {}

const AppFooter: React.FC<AppFooterProps> = ({}) => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t-2 border-gray-200 dark:border-gray-800 py-2">
      <div className="flex items-center justify-center">
        <AppFooterItem href="/profile" title="Profile">
          <HiUser className="h-full w-6" />
        </AppFooterItem>
        <AppFooterItem href="/rooms" title="Rooms">
          <HiChatAlt2 className="h-full w-6" />
        </AppFooterItem>
        <AppFooterItem href="/config" title="Config">
          <HiCog className="h-full w-6" />
        </AppFooterItem>
      </div>
    </footer>
  );
};
export default AppFooter;
