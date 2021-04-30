import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import { FaCog, FaComments, FaUserAlt } from 'react-icons/fa';

import AppFooterItem from './AppFooterItem';

interface AppFooterProps {}

const AppFooter = ({}: AppFooterProps) => {
  return (
    <Box as="footer" borderTopWidth="2px" borderColor="gray.800" py="2">
      <Flex align="center" justify="center">
        <AppFooterItem href="/profile" title="Profile" Icon={FaUserAlt} />
        <AppFooterItem href="/rooms" title="Rooms" Icon={FaComments} />
        <AppFooterItem href="/config" title="Config" Icon={FaCog} />
      </Flex>
    </Box>
  );
};
export default AppFooter;
