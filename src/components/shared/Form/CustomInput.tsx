import React from 'react';
import {
  Input as ChakraInput,
  FormLabel,
  FormControl,
  InputProps,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react';
import { FieldError } from 'react-hook-form';

interface CustomInputProps extends InputProps {
  name: string;
  label?: string;
  error?: FieldError;
  isRequired?: boolean;
  helperText?: string;
}

export const CustomInput = ({
  name,
  label,
  error = null,
  isRequired = false,
  helperText = null,
  ...rest
}: CustomInputProps) => {
  return (
    <FormControl isRequired={isRequired} isInvalid={!!error}>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraInput
        name={name}
        id={name}
        borderWidth="3px"
        borderColor="transparent"
        focusBorderColor="gray.600"
        bg="gray.800"
        _hover={{
          borderColor: 'gray.700',
        }}
        size="lg"
        {...rest}
      />
      {!!helperText && (
        <FormHelperText color="gray.500">{helperText}</FormHelperText>
      )}
      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};
