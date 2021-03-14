import 'tailwindcss/tailwind.css';

import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <div className="h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-50 relative">
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
