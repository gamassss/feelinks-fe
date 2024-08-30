import Link from "next/link";
import { Button } from "../ui/button";

export default function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-black/70 p-4 backdrop-blur-sm text-white">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-x-12 text-sm font-semibold">
          <Link href={"/"} className="text-lg font-bold cursor-pointer">Feelinks Ai</Link>
          <div className="flex gap-x-4 text-slate-400">
            <Link href={"#features"} className="hover:underline">
              Features
            </Link>
            <Link href={"#how-it-works"} className="hover:underline">
              How It Works
            </Link>
            <Link href={"#faq"} className="hover:underline">
              FAQ
            </Link>
          </div>
        </div>
        <Button variant={"secondary"}>Login</Button>
      </div>
    </nav>
  );
}
