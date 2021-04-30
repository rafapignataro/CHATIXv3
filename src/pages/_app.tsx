import '../styles/globals.css';
import 'tailwindcss/tailwind.css';

import { ThemeProvider } from 'next-themes';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <div className="h-screen relative">
        <Component {...pageProps} />
      </div>
    </ChakraProvider>
  );
}

export default MyApp;
