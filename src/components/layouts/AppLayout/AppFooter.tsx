import { Box, Flex, HStack } from '@chakra-ui/react';
import React from 'react';
import { FiHome, FiUser, FiSettings } from 'react-icons/fi';

import AppFooterItem from './AppFooterItem';

interface AppFooterProps {}

const AppFooter = ({}: AppFooterProps) => {
  return (
    <Box as="footer" borderTopWidth="2px" borderColor="gray.800" py="2">
      <HStack spacing="12" justify="center">
        <AppFooterItem href="/profile" title="Profile" Icon={FiUser} />
        <AppFooterItem href="/rooms" title="Rooms" Icon={FiHome} />
        <AppFooterItem href="/config" title="Config" Icon={FiSettings} />
      </HStack>
    </Box>
  );
};
export default AppFooter;
