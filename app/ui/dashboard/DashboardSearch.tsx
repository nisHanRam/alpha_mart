import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, ChevronUp, Search } from "lucide-react";

const DashboardSearch = ({
  open,
  setOpen,
  screenSize,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
  screenSize: string;
}) => {
  return (
    <div
      className={`${
        screenSize === "lg" ? "hidden md:flex" : "md:hidden flex"
      } border border-muted rounded overflow-hidden`}
    >
      <DropdownMenu onOpenChange={() => setOpen(!open)}>
        <DropdownMenuTrigger className="bg-muted py-1 px-2 flex items-center gap-1">
          <span
            className={`text-sm hidden ${
              screenSize === "lg" ? "lg:block" : "sm:block"
            }`}
          >
            All Categories
          </span>
          <span>
            {!open ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
          </span>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-background w-56" align="start">
          <DropdownMenuItem>Templates</DropdownMenuItem>
          <DropdownMenuItem>Graphics</DropdownMenuItem>
          <DropdownMenuItem>Logos</DropdownMenuItem>
          <DropdownMenuItem>Chrome Extensions</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <div className="flex-grow min-w-0 flex">
        <input
          type="text"
          className="flex-grow min-w-0 px-2 text-sm"
          placeholder="Search"
        />
        <button className="p-2 bg-indigo-500 flex-shrink-0">
          <Search size={16} />
        </button>
      </div>
    </div>
  );
};

export default DashboardSearch;
