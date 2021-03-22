import React from 'react';

import { AuthLayout } from '../../layouts/Auth';
import Button from '../../shared/Button';
import Input from '../../shared/Input';

interface LoginScreenProps {}

export const LoginScreen: React.FC<LoginScreenProps> = ({}) => {
  return (
    <AuthLayout>
      <Input placeholder="Username" />
      <Input placeholder="Password" type="password" />
      <Button text="LOGIN" />
    </AuthLayout>
  );
};
