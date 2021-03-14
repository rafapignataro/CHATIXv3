import React from 'react';

interface AppFooterNavProps {}

const AppFooterNav: React.FC<AppFooterNavProps> = ({}) => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t-2 border-gray-200 dark:border-gray-800 py-4 px-6 shadow-xl">
      <div className="flex items-center justify-center">
        <p>Rooms</p>
        <p>Profile</p>
        <p>Config</p>
      </div>
    </footer>
  );
};
export default AppFooterNav;
