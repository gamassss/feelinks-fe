import Sidebar from "@/components/fragments/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <section className="flex items-start justify-between container">
        <Sidebar />

        <main className="w-full h-full">{children}</main>
      </section>
    </>
  );
}
