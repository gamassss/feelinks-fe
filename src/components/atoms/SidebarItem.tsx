'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

interface SidebarItemProps {
  href: string;
  icon: ReactNode;
  label: string;
}

export default function SidebarItem({ href, icon, label }: SidebarItemProps) {
  const pathName = usePathname()
  const activeClass = 'bg-slate-100'
  return (
    <Link href={href} className={`flex items-center gap-x-2 pl-3 hover:bg-slate-100 py-2 rounded-lg ${pathName === href ? activeClass : ''}`}>
      {icon}
      <p>{label}</p>
    </Link>
  );
}