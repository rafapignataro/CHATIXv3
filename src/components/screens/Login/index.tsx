import NextLink from 'next/link';
import React from 'react';

import { AuthLayout } from '../../layouts/Auth';
import Input from '../../shared/Input';

interface LoginScreenProps {}

export const LoginScreen: React.FC<LoginScreenProps> = ({}) => {
  return (
    <AuthLayout>
      <h1 className="text-4xl mb-5">
        Chatix
        <span className="text-sm font-semibold text-gray-400 dark:text-gray-700">
          v3
        </span>
      </h1>
      <Input placeholder="Username" />
      <Input placeholder="Password" type="password" />
      <button className="bg-purple-600 hover:bg-purple-500 mt-2 py-2 px-3 rounded text-white hover:bg-purple-500 focus:outline-none h-12 w-full">
        LOGIN
      </button>
      <div className="flex justify-between align-items w-full mt-3 px-2">
        <NextLink href="/forgot-password">
          <a className="text-xs">Forgot your password?</a>
        </NextLink>
        <NextLink href="/register">
          <a className="text-xs">Create an account</a>
        </NextLink>
      </div>
    </AuthLayout>
  );
};
