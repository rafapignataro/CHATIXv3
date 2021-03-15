import NextLink from 'next/link';
import React from 'react';

interface AppFooterItemProps {
  href: string;
  title: string;
  isActive: boolean;
}

const AppFooterItem: React.FC<AppFooterItemProps> = ({
  children,
  title,
  isActive,
  href,
}) => {
  return (
    <NextLink href={href}>
      <a
        className={`flex flex-col items-center justify-center mx-3 cursor-pointer px-2 py-1 rounded ${
          isActive ? 'font-semibold text-purple-600' : 'hover:bg-gray-800'
        }`}
      >
        {children}
        <p className="text-xs md:text-sm mt-1">{title}</p>
      </a>
    </NextLink>
  );
};
export default AppFooterItem;
