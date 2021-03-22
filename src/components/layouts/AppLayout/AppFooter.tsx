import React from 'react';
import { FaCog, FaComments, FaUserAlt } from 'react-icons/fa';

import AppFooterItem from './AppFooterItem';

interface AppFooterProps {}

const AppFooter: React.FC<AppFooterProps> = ({}) => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t-2 border-gray-200 dark:border-gray-800 py-2">
      <div className="flex items-center justify-center">
        <AppFooterItem href="/profile" title="Profile" Icon={FaUserAlt} />
        <AppFooterItem href="/rooms" title="Rooms" Icon={FaComments} />
        <AppFooterItem href="/config" title="Config" Icon={FaCog} />
      </div>
    </footer>
  );
};
export default AppFooter;
