"use client"

import { CalendarIcon, DashboardIcon, GearIcon, TokensIcon } from "@radix-ui/react-icons";
import SidebarItem from "../atoms/SidebarItem";

export default function Sidebar() {
  return (
    <div className="sticky left-0 top-0 flex flex-col w-[280px] border-r min-h-screen px-4 py-10 text-sm text-slate-700 font-semibold gap-y-2">
      <SidebarItem href="/history" icon={<CalendarIcon />} label="History" />
      <SidebarItem href="/dashboard" icon={<DashboardIcon />} label="Dashboard" />
      <SidebarItem href="/settings" icon={<GearIcon />} label="Settings" />
    </div>
  );
}
