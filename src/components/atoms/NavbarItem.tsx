import Link from "next/link";
import React from "react";
export type NavbarItemProps = {
  href: string;
  label: string;
};

const NavbarItem = React.memo(function NavbarItem({ href, label }: NavbarItemProps) {
  return (
    <Link href={href} className="hover:underline text-slate-300" passHref>
      {label}
    </Link>
  );
});

export default NavbarItem;
