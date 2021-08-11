import React from 'react';
import { Avatar, Flex, Text } from '@chakra-ui/react';
import { signIn, signOut, useSession } from 'next-auth/client';

import AppLayout from '../../../layouts/AppLayout/AppLayout';
import Button from '../../../shared/Button';

interface LoginScreenProps {}

export const LoginScreen = ({}: LoginScreenProps) => {
  return (
    <AppLayout title="Login">
      <Flex align="center" w="100%" mt="10">
        <Button text="Logar" onClick={() => signIn()} />
      </Flex>
    </AppLayout>
  );
};
