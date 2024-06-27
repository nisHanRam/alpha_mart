import Link from "next/link";
import { navItems } from "@/lib/constants";
import { LinkedinIcon, InstagramIcon, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

const MobileMenu = ({}) => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu size={30} strokeWidth={1} />
      </SheetTrigger>
      <SheetContent side="top" className="h-[100vh] p-0">
        <SheetHeader className="h-[12vh] border-b border-[#212225] grid items-center px-6">
          <SheetTitle className="text-left font-normal text-2xl">
            AlphaMart
          </SheetTitle>
        </SheetHeader>
        <div className="p-12 flex flex-col justify-center h-[88vh]">
          <ul className="w-full">
            {navItems.map((item) => (
              <>
                <li key={item.name} className="text-center">
                  <Link href={item.href} className="text-2xl font-light">
                    {item.name}
                  </Link>
                </li>
                <Separator className="my-6" />
              </>
            ))}
          </ul>
          <div className="flex justify-center items-center gap-12 my-6">
            <Link href="#" className="opacity-50 hover:opacity-100">
              <InstagramIcon size={30} strokeWidth={1} />
            </Link>
            <Link href="#" className="opacity-50 hover:opacity-100">
              <LinkedinIcon size={30} strokeWidth={1} />
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
