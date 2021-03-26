import React, { ReactNode } from 'react';

interface AuthLayoutProps {
  children: ReactNode;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1 flex flex-col justify-center items-center mx-auto w-full max-w-sm px-4">
        {children}
      </div>
    </div>
  );
};
