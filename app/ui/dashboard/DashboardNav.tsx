"use client";
import { useState } from "react";
import Link from "next/link";
import UserNav from "./UserNav";
import DashboardSearch from "./DashboardSearch";
import FadeDown from "@/app/animations/FadeDown";

const DashboardNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="border-b border-[#212225] lg:h-[12vh] space-y-4 p-4 lg:py-0 px-8 sm:px-12 lg:flex lg:flex-col lg:justify-center lg:items-stretch">
      <div className="flex justify-between items-center">
        <Link href="/" className="text-2xl md:text-3xl lg:text-4xl">
          AlphaMart
        </Link>
        <FadeDown>
          <DashboardSearch open={open} setOpen={setOpen} screenSize="lg" />
        </FadeDown>
        <div className="flex items-center gap-4">
          <FadeDown>
            <Link href="#" className="hover:bg-muted py-2 px-4 rounded-md">
              Pricing
            </Link>
          </FadeDown>
          <FadeDown>
            <UserNav />
          </FadeDown>
        </div>
      </div>
      <DashboardSearch open={open} setOpen={setOpen} screenSize="sm" />
    </nav>
  );
};

export default DashboardNav;
