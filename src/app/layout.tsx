import "./globals.css";
import Head from 'next/head'

export const metadata = {
  title: "Portfolio Website",
  description: "Application to my portfolio",
};

export default function RootLayout({
  children }) {
  return (
    <html lang="en">
      <Head>
      
\
      </Head>
      <body>{children}</body>
    </html>
  );
}
