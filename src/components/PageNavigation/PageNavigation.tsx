"use client";

import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

interface NavigationItem {
  name: string;
  href: string;
}

interface PageNavigationProps {
  items: NavigationItem[];
}

export function PageNavigation({ items }: PageNavigationProps) {
  const pathname = usePathname();

  return (
    <nav className="flex gap-4">
      {items.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={twMerge(
              "px-4 py-2 rounded-md transition-colors",
              isActive
                ? "bg-primary text-neutral-inverse"
                : "hover:bg-neutral-100"
            )}
          >
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
}
