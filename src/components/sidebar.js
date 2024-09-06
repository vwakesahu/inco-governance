import { Home, Globe, Bell, User, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const links = [
    { href: "/", icon: Home },
    { href: "/explore", icon: Globe },
    // { href: "/notifications", icon: Bell },
    { href: "/profile", icon: User },
    { href: "/settings", icon: Settings },
  ];

  return (
    <div className="flex flex-col h-screen w-20 border-r bg-background">
      <div className="p-4 flex items-center justify-center">
        <img src="/logo/inco-s-blue.svg" alt="Logo" className="w-full" />
      </div>
      <div className="flex-grow mt-7">
        <ul className="px-4">
          {links.map(({ href, icon: Icon }) => (
            <li key={href}>
              <Link
                href={href}
                className={`flex items-center justify-center py-3 px-3.5 rounded-lg ${
                  pathname === href ? "bg-[#3673F5]" : ""
                }`}
              >
                <Icon className={pathname === href ? "text-white" : ""} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
