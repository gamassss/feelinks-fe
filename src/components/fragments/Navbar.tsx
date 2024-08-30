import { Button } from "../ui/button";
import NavbarItem from "../atoms/NavbarItem";

const navbarItems: ReadonlyArray<{ href: string; label: string }> = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#faq", label: "FAQ" },
];

interface NavbarProps {
  children?: React.ReactNode;
}

const Navbar: React.FC<NavbarProps> = ({ children }) => {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-black/70 py-4 px-32 backdrop-blur-sm text-white">
      <div className="mx-auto flex items-center justify-between">
        <div className="flex items-center gap-x-8 text-sm font-semibold">
          {children}
          <ul className="flex gap-x-4">
            {navbarItems.map(({ href, label }) => (
              <li key={label}>
                <NavbarItem href={href} label={label} />
              </li>
            ))}
          </ul>
        </div>
        <Button variant="secondary" aria-label="Login to your account">
          Login
        </Button>
      </div>
    </nav>
  );
}

export default Navbar;
