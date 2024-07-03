import { HelpCircle, Settings, ShoppingBag, User } from "lucide-react";

export const navItems = [
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
];

export const userNavItems = [
  { title: "Account", href: "#", icon: User },
  { title: "Orders", href: "#", icon: ShoppingBag },
  { title: "Help", href: "#", icon: HelpCircle },
  { title: "Settings", href: "#", icon: Settings },
];
