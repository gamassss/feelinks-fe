import Sidebar from "@/components/fragments/Sidebar";
import Head from "next/head";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <section className="flex items-start justify-between">
        <Sidebar />

        <main className="w-full h-full">{children}</main>
      </section>
    </>
  );
}
