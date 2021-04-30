import '../styles/globals.css';
import 'tailwindcss/tailwind.css';

import { ThemeProvider } from 'next-themes';
import { ChakraProvider, Flex } from '@chakra-ui/react';
import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Flex direction="column" height="100vh">
        <Component {...pageProps} />
      </Flex>
    </ChakraProvider>
  );
}

export default MyApp;
