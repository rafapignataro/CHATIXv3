import React, {
  ButtonHTMLAttributes,
  HTMLProps,
  MouseEvent,
  MouseEventHandler,
} from 'react';
import { IconContext } from 'react-icons/lib';
import {
  Button as ChakraButton,
  ButtonGroup,
  Icon as ChakraIcon,
  useBreakpointValue,
  ButtonProps as ChakraButtonProps,
} from '@chakra-ui/react';

interface ButtonProps extends ChakraButtonProps {
  text?: string;
  Icon?: React.ComponentType;
  onClick?: () => void;
}

const Button = ({ children, text, Icon, onClick, ...props }: ButtonProps) => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  // if (isWideVersion)
  //   return (

  //   );

  return (
    <ChakraButton
      {...props}
      onClick={onClick}
      bg="gray.900"
      borderColor="gray.600"
      borderWidth="2px"
      rightIcon={<ChakraIcon as={Icon} />}
      _hover={{
        bg: 'gray.600',
      }}
    >
      {text}
    </ChakraButton>
  );
};
export default Button;
