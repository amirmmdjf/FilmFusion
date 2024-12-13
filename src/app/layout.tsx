import type { Metadata } from "next";
import "./globals.css";
import svgIcon from '../../public/next.svg'
import Navbar from "./components/navbar/Navbar";

export const metadata: Metadata = {
  title: "Page Web App",
  description: 'A Progressive Web App built with Next.js'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
