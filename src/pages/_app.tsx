import '../styles/global.css';

import { ThemeProvider } from 'next-themes';
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }) {
  const switchTheme = () => {
    if (isMounted) {
      setTheme(theme === 'light' ? 'dark' : 'light');
    }
  };

  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
