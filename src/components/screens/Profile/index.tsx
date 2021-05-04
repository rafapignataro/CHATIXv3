import { Avatar, Flex, Text } from '@chakra-ui/react';
import React from 'react';

import AppLayout from '../../layouts/AppLayout/AppLayout';

interface ProfileScreenProps {}

export const ProfileScreen: React.FC<ProfileScreenProps> = ({}) => {
  return (
    <AppLayout title="Profile">
      <Flex align="center" w="100%" mt="10">
        <Avatar name="Rafael Pignataro" size="2xl" />
        <Flex direction="column" ml="4">
          <Text fontSize="2xl">Rafael Pignataro</Text>
          <Text fontSize="md" mb="4">
            rafapignataro@gmail.com
          </Text>
          <Text fontSize="lg" display="flex">
            Started using{' '}
            <Text fontWeight="bold" mx="1">
              Chatix
            </Text>{' '}
            at{' '}
            <Text fontWeight="bold" mx="1">
              April 25, 2021
            </Text>
          </Text>
        </Flex>
      </Flex>
    </AppLayout>
  );
};
