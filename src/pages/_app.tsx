import '../shared/styles/global.css';
import 'tailwindcss/tailwind.css';

import { ThemeProvider } from 'next-themes';
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
