import Link from "next/link";
import React from "react";
export type NavbarItemProps = {
  href: string;
  label: string;
};

const NavbarItem = React.memo(function NavbarItem({ href, label }: NavbarItemProps) {
  return (
    <Link href={href} className="text-slate-400 hover:text-slate-200 hover:underline" passHref>
      {label}
    </Link>
  );
});

export default NavbarItem;
