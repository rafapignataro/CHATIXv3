import React from 'react';
import {
  IconButton as ChakraIconButton,
  IconButtonProps as ChakraIconButtonProps,
} from '@chakra-ui/react';

interface IconButtonProps extends ChakraIconButtonProps {}

export const IconButton = ({ ...props }: IconButtonProps) => {
  return (
    <ChakraIconButton
      color="gray.700"
      variant="ghost"
      _hover={{
        color: 'red.500',
      }}
      {...props}
    />
  );
};
