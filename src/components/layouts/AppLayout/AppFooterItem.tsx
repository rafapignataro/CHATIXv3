import {
  Link as ChakraLink,
  Icon as ChakraIcon,
  Text,
  Flex,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { IconContext } from 'react-icons/lib';

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
      <ChakraLink decoration="none" style={{ textDecoration: 'none' }}>
        <Flex
          direction="column"
          align="center"
          justify="space-between"
          mx="4"
          px="8"
          py="2"
          borderRadius="md"
          textDecoration="none"
          _hover={{
            bg: 'gray.700',
          }}
        >
          <ChakraIcon
            as={Icon}
            mb="1"
            fontSize="28"
            color={isActive ? 'gray.50' : 'gray.300'}
          />
          {/* <Text fontSize="sm" color={isActive ? 'gray.50' : 'gray.300'}>
            {title}
          </Text> */}
        </Flex>
      </ChakraLink>
    </NextLink>
  );
};
export default AppFooterItem;
