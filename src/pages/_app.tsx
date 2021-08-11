import '../styles/globals.css';

import { ThemeProvider } from 'next-themes';
import { ChakraProvider, Flex } from '@chakra-ui/react';
import { theme } from '../styles/theme';
import { Provider as NextAuthProvider } from 'next-auth/client';

function MyApp({ Component, pageProps }) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <ChakraProvider theme={theme}>
        <Flex direction="column" height="100vh">
          <Component {...pageProps} />
        </Flex>
      </ChakraProvider>
    </NextAuthProvider>
  );
}

export default MyApp;
