import React from 'react';

interface AppMainProps {}

const AppMain: React.FC<AppMainProps> = ({ children }) => {
  return (
    <main className="flex flex-col flex-1 overflow-auto px-4 md:px-6 py-3">
      {children}
    </main>
  );
};
export default AppMain;
