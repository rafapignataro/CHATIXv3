import React from 'react';

interface AppMainProps {
  title: string;
}

const AppMain: React.FC<AppMainProps> = ({ children, title }) => {
  return (
    <main className="flex flex-col items-center flex-1 overflow-auto px-4 md:px-6 py-1 w-full">
      <div className="flex justify-start w-full py-2  mx-auto max-w-6xl">
        <h2 className="font-bold text-3xl md:text-4xl">{title}</h2>
      </div>
      {children}
    </main>
  );
};
export default AppMain;
