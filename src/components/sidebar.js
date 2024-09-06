import React from "react";
import {
  Home,
  Globe,
  Bell,
  User,
  Settings,
  FileText,
  Users,
  MessageSquare,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Sidebar({ linkSet = "default" }) {
  const pathname = usePathname();

  const defaultLinks = [
    { href: "/", icon: Home, label: "Home" },
    { href: "/explore", icon: Globe, label: "Explore" },
    { href: "/profile", icon: User, label: "Profile" },
    // { href: "/settings", icon: Settings, label: "Settings" },
  ];

  const space = [
    { href: "/overview", icon: Globe, label: "Overview" },
    // { href: "/proposals", icon: FileText, label: "Proposals" },
    { href: "/leaderboard", icon: Users, label: "Leaderboard" },
    // { href: "/discussions", icon: MessageSquare, label: "Discussions" },
  ];

  const links = linkSet === "space" ? space : defaultLinks;

  const isActive = (href) => {
    if (linkSet === "space") {
      // Check if the current path includes the href
      return pathname.includes(href);
    }
    return pathname === href;
  };

  return (
    <TooltipProvider>
      <div className="flex flex-col h-screen w-20 border-r bg-background">
        <Link href={"/"} className="p-4 flex items-center justify-center">
          <img src="/logo/inco-s-blue.svg" alt="Logo" className="w-full" />
        </Link>
        <div className="flex-grow mt-7">
          <ul className="px-4">
            {links.map(({ href, icon: Icon, label }) => (
              <li key={href} className="mb-4">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={linkSet === "space" ? `/spaces/1${href}` : href}
                      className={`flex items-center justify-center py-3 px-3.5 rounded-lg ${
                        isActive(href) ? "bg-[#3673F5]" : ""
                      }`}
                    >
                      <Icon className={isActive(href) ? "text-white" : ""} />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="right" className="bg-blue-500">
                    <p className="text-sm">{label}</p>
                  </TooltipContent>
                </Tooltip>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </TooltipProvider>
  );
}
