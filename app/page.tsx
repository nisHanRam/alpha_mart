"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Reveal from "./animations/Reveal";

export default function Home() {
  return (
    <header className="h-auto lg:h-[88vh] p-8 sm:p-12 md:py-4">
      <div className="space-y-8 lg:space-y-0">
        <div>
          <Reveal>
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] font-black bg-gradient-to-t from-indigo-500 to-sky-100 bg-clip-text text-transparent leading-tight sm:leading-tight md:leading-tight lg:leading-tight">
              Shop Smart,
            </h1>
          </Reveal>
          <Reveal>
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] font-black bg-gradient-to-t from-indigo-500 to-sky-100 bg-clip-text text-transparent leading-tight sm:leading-tight md:leading-tight lg:leading-tight">
              Build Fast.
            </h1>
          </Reveal>
        </div>
        <div className="font-light space-y-6 sm:w-2/3 lg:w-1/2">
          <Reveal>
            <p className="opacity-50 sm:text-lg lg:text-2xl">
              Join vibrant community of digital artists, creators, and
              developers. Buy and sell top-quality digital products, including
              templates, graphics, logos, and more.
            </p>
          </Reveal>
          <Reveal
            whileHover={{
              scale: 1.1,
              rotate: "-1.1deg",
            }}
          >
            <button className="py-3 px-6 text-[17px] font-medium bg-[#d1ff62] text-black rounded-md">
              Browse all products
            </button>
          </Reveal>
        </div>
      </div>
    </header>
  );
}
