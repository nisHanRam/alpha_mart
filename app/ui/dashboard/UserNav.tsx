import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { userNavItems } from "@/lib/constants";
import { DoorClosed } from "lucide-react";
import Link from "next/link";

const UserNav = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>NC</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-background" align="end" forceMount>
        <DropdownMenuItem>
          <div>
            <p>Batman</p>
            <p>batman@dc.com</p>
          </div>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        {userNavItems.map((item) => (
          <DropdownMenuItem key={item.title}>
            <Link
              href={item.href}
              className="w-full flex items-center justify-between"
            >
              {item.title}
              <span>
                <item.icon />
              </span>
            </Link>
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href="#" className="w-full flex items-center justify-between">
            Logout
            <span>
              <DoorClosed />
            </span>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserNav;
