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
      {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />
      <link rel="icon" type="image/jpg" href="./Images/favicon.ico" /> */}

      </Head>
      <body>{children}</body>
    </html>
  );
}
