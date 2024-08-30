import Sidebar from "@/components/fragments/Sidebar";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Feelinks v2",
  description: "A typical diary app, but with emotion analyzer",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <section className="flex items-start justify-between container">
          <Sidebar />
          <main className="w-full h-full">{children}</main>
        </section>
      </body>
    </html>
  );
}
