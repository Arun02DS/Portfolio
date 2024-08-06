// pages/_app.tsx
import RootLayout from '../src/app/layout.tsx';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <Component {...pageProps} /> 
    </RootLayout>
  );
}

export default MyApp;

