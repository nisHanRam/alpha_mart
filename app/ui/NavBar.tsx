import Link from "next/link";
import { LinkedinIcon, InstagramIcon } from "lucide-react";
import MobileMenu from "./MobileMenu";
import { navItems } from "@/lib/constants";
// import { ThemeToggle } from "./ThemeToggle";

const NavBar = () => {
  return (
    <nav className="bg-background flex justify-between md:justify-around items-center h-[12vh] border-b border-[#212225] p-6">
      <div className="text-2xl md:text-3xl lg:text-4xl">
        <Link href="/">AlphaMart</Link>
      </div>
      <ul className="hidden md:flex items-center justify-center gap-12">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link href={item.href} className="opacity-50 hover:opacity-100">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <div className="hidden md:flex items-center gap-12">
        <div className="flex items-center gap-6">
          <Link href="#" className="opacity-50 hover:opacity-100">
            <InstagramIcon size={30} strokeWidth={1} />
          </Link>
          <Link href="#" className="opacity-50 hover:opacity-100">
            <LinkedinIcon size={30} strokeWidth={1} />
          </Link>
        </div>
        {/* <ThemeToggle /> */}
      </div>
      <div className="md:hidden opacity-50 hover:opacity-100">
        <MobileMenu />
      </div>
    </nav>
  );
};

export default NavBar;
