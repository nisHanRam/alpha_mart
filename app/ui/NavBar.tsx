"use client";
import Link from "next/link";
import { LinkedinIcon, InstagramIcon } from "lucide-react";
import MobileMenu from "./MobileMenu";
import { navItems } from "@/lib/constants";
import FadeDown from "../animations/FadeDown";
import FadeIn from "../animations/FadeIn";

const NavBar = () => {
  return (
    <nav className="bg-background flex justify-between items-center h-[12vh] border-b border-[#212225] px-8 sm:px-12">
      <Link href="/" className="text-2xl md:text-3xl lg:text-4xl">
        AlphaMart
      </Link>
      <ul className="hidden md:flex items-center justify-center md:gap-2 lg:gap-12">
        {navItems.map((item, index) => (
          <li key={item.name}>
            <FadeDown index={index}>
              <Link
                href={item.href}
                className="opacity-50 hover:opacity-100 hover:bg-muted py-2 px-4 rounded-md"
              >
                {item.name}
              </Link>
            </FadeDown>
          </li>
        ))}
      </ul>
      <div className="hidden md:flex items-center md:gap-2 lg:gap-6">
        <FadeIn>
          <Link href="#">
            <InstagramIcon size={30} strokeWidth={1} />
          </Link>
        </FadeIn>
        <FadeIn>
          <Link href="#">
            <LinkedinIcon size={30} strokeWidth={1} />
          </Link>
        </FadeIn>
      </div>
      <div className="md:hidden opacity-50 hover:opacity-100">
        <MobileMenu />
      </div>
    </nav>
  );
};

export default NavBar;
