import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/organisms/Navbar";
import Logo from "@/components/atoms/Logo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Feelinks v2",
  description: "A typical diary app, but with emotion analyzer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-950`}>
        <Navbar>
          <Logo />
        </Navbar>
        {children}
      </body>
    </html>
  );
}
