import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex items-start justify-between">
      <Sidebar />

      <main className="w-full h-full">{children}</main>

    </section>
  );
}
