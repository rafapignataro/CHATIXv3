import NextLink from 'next/link';
import React from 'react';

import { AuthLayout } from '../../layouts/Auth';
import Input from '../../shared/Input';

interface RegisterScreenProps {}

export const RegisterScreen: React.FC<RegisterScreenProps> = ({}) => {
  return (
    <AuthLayout>
      <h1 className="text-4xl mb-5">
        Chatix
        <span className="text-sm font-semibold text-gray-400 dark:text-gray-700">
          v3
        </span>
      </h1>
      <Input placeholder="Username" />
      <Input placeholder="E-mail" />
      <Input placeholder="Password" type="password" />
      <Input placeholder="Repeat your password" type="password" />
      <button className="bg-purple-600 hover:bg-purple-500 mt-4 py-2 px-3 rounded text-white hover:bg-purple-500 focus:outline-none h-12 w-full">
        REGISTER
      </button>
      <div className="flex justify-center align-items w-full mt-3 px-2">
        <NextLink href="/login">
          <a className="text-xs">Already have an account? Login!</a>
        </NextLink>
      </div>
    </AuthLayout>
  );
};
