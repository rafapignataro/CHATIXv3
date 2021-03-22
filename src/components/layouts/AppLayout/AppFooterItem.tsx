import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { IconContext } from 'react-icons/lib';

interface AppFooterItemProps {
  href: string;
  title: string;
  Icon: React.ComponentType;
}

const AppFooterItem: React.FC<AppFooterItemProps> = ({ title, href, Icon }) => {
  const router = useRouter();

  const isActive = router.pathname === href;
  return (
    <NextLink href={href}>
      <a
        className={`flex flex-col items-center justify-center mx-3 cursor-pointer px-2 py-2 rounded ${
          isActive
            ? 'font-semibold text-purple-600'
            : 'hover:bg-gray-100 dark:hover:bg-gray-800'
        }`}
      >
        <IconContext.Provider value={{ className: `h-full w-5` }}>
          <Icon />
        </IconContext.Provider>
        <p className="text-xs md:text-sm mt-1">{title}</p>
      </a>
    </NextLink>
  );
};
export default AppFooterItem;
