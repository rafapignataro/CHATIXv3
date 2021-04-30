import {
  Link as ChakraLink,
  Icon as ChakraIcon,
  Text,
  Flex,
  Box,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

interface AppFooterItemProps {
  href: string;
  title: string;
  Icon: React.ElementType;
}

const AppFooterItem = ({ title, href, Icon }: AppFooterItemProps) => {
  const router = useRouter();

  const isActive = router.pathname === href;

  return (
    <NextLink href={href} passHref>
      <Flex as="a" p="2">
        <ChakraIcon
          as={Icon}
          fontSize="28"
          color={isActive ? 'red.500' : 'gray.600'}
          _hover={{
            color: 'red.500',
          }}
        />
      </Flex>
    </NextLink>
  );
};
export default AppFooterItem;
