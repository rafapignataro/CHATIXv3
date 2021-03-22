import React, { ReactNode } from 'react';

interface AuthLayoutProps {
  children: ReactNode;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="h-screen flex flex-col">
      <div>Header</div>
      <div className="flex-1 flex flex-col justify-center items-center mx-auto w-full max-w-sm">
        {children}
      </div>
      <div>Footer</div>
    </div>
  );
};
