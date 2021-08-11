import React, { forwardRef, ForwardRefRenderFunction } from 'react';

import {
  Input as ChakraInput,
  FormLabel,
  FormControl,
  InputProps,
  FormErrorMessage,
  FormHelperText,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { FieldError } from 'react-hook-form';

interface CustomInputProps extends InputProps {
  name: string;
  label?: string;
  error?: FieldError;
  isRequired?: boolean;
  helperText?: string;
  Icon?: React.ElementType;
}

const Input: ForwardRefRenderFunction<HTMLInputElement, CustomInputProps> = (
  {
    label,
    name,
    error = null,
    isRequired = false,
    helperText = null,
    Icon = null,
    ...rest
  },
  ref
) => {
  return (
    <FormControl isRequired={isRequired} isInvalid={!!error}>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <InputGroup>
        {!!Icon && (
          <InputLeftElement
            pointerEvents="none"
            children={<Icon color="gray.800" />}
          />
        )}
        <ChakraInput
          ref={ref}
          name={name}
          id={name}
          borderWidth="3px"
          borderColor="transparent"
          focusBorderColor="gray.600"
          bg="gray.800"
          _hover={{
            borderColor: 'gray.700',
          }}
          {...rest}
        />
      </InputGroup>

      {!!helperText && (
        <FormHelperText color="gray.500">{helperText}</FormHelperText>
      )}
      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

export const CustomInput = forwardRef(Input);
