import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import Header from '@/components/ui/Header/Header';
import '@mantine/core/styles.css';
import { theme } from '@/theme';
import Footer from '@/components/ui/Footer/Footer';
import ContextProvider from '@/context/ContextProvider';

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="ru">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.png" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <ContextProvider>
          <MantineProvider theme={theme}>
            <Header />
            {children}
            <Footer />
          </MantineProvider>
        </ContextProvider>
      </body>
    </html>
  );
}
