import { extendTheme } from '@chakra-ui/react';

// #7C3AED

export const theme = extendTheme({
  colors: {
    'red.500': '#C42847',
    'red.400': '#D53454',
    // 'gray.900': '#070707',
    // 'gray.800': '#141414',
    // 'gray.700': '#1F1F1F',
    // 'gray.600': '#292929',
    // 'gray.400': '#5C5C5C',
    // 'gray.300': '#707070',
    // 'gray.200': '#E0E0E0',
    // 'gray.50': '#F5F5F5',
  },
  fonts: {
    heading: 'Montserrat',
    body: 'Montserrat',
  },
  styles: {
    global: {
      'html, body': {
        minHeight: '100vh',
        minHeight: '-webkit-fill-available',
      },
      body: {
        bg: 'gray.900',
        color: 'gray.50',
      },
    },
  },
});
