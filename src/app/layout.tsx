// components/layout.tsx
import React from 'react';
import './globals.css';
import Head from 'next/head';

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <Head>
        <title>Portfolio Website</title>
        <meta name="description" content="Application to my portfolio" />
        {/* You can add other global head elements here */}
      </Head>
      <body>
        <header>
          {/* Your header content */}
        </header>
        <main>{children}</main>
        <footer>
          {/* Your footer content */}
        </footer>
      </body>
    </html>
  );
};

export default RootLayout;
