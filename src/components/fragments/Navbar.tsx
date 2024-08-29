import Link from "next/link";
import { Button } from "../ui/button";

export default function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-inherit bg-opacity-50 p-4 backdrop-blur-sm text-white">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-x-12 text-sm font-semibold">
          <div className="text-lg font-bold">Feelinks Ai</div>
          <div className="flex gap-x-4 text-slate-400">
            <Link href="/features" className="hover:underline">
              Features
            </Link>
            <Link href="/how" className="hover:underline">
              How It Works
            </Link>
            <Link href="/faq" className="hover:underline">
              FAQ
            </Link>
          </div>
        </div>
        <div>
          <Button variant={"secondary"}>Login</Button>
        </div>
      </div>
    </nav>
  );
}
