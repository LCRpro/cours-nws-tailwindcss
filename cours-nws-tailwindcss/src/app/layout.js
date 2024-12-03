import localFont from "next/font/local";
import "./globals.css";
import Link from 'next/link';
import Navbar from '../components/Navbar';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "COURS NWS TAILWINDCSS",
  description: "COURS NWS TAILWINDCSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <Navbar />

        {children}
      </body>
    </html>
  );
}
