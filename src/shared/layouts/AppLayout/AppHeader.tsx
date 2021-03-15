import React from 'react';

interface AppHeaderProps {}

const AppHeader: React.FC<AppHeaderProps> = ({}) => {
  return (
    <header className="bg-gray-50 dark:bg-gray-900 border-b-2 border-gray-200 dark:border-gray-800 py-2 px-4 md:px-6 h-18 ">
      <div className="flex items-center max-w-6xl mx-auto">
        <h2 className="text-2xl">
          Chatix
          <span className="text-sm font-semibold text-gray-400 dark:text-gray-700">
            v3
          </span>
        </h2>
      </div>
    </header>
  );
};
export default AppHeader;
