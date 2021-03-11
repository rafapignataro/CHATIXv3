import NextLink from 'next/link';
import React from 'react';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <header className="container-fluid p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold flex-1">Next Auth</h1>
        <nav className="flex items-center">
          <NextLink href="/register">
            <a className="py-1 px-3 font-semibold">Register</a>
          </NextLink>
          <NextLink href="/login">
            <a className="py-1 px-3 font-semibold">Sign in</a>
          </NextLink>
        </nav>
      </div>
    </header>
  );
};
export default Header;
