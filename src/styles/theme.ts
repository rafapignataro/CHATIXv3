import { extendTheme } from '@chakra-ui/react';

// #7C3AED

export const theme = extendTheme({
  colors: {
    'gray.900': '#0A0A0A',
    'gray.800': '#141414',
    'gray.700': '#1F1F1F',
    'gray.600': '#292929',
    'gray.300': '#858585',
    'gray.200': '#E0E0E0',
    'gray.50': '#F5F5F5',
  },
  fonts: {
    heading: 'Montserrat',
    body: 'Montserrat',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.900',
        color: 'gray.50',
      },
    },
  },
});
