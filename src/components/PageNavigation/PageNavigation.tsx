"use client";

import { Link } from "next-view-transitions";
import { usePathname, useSearchParams } from "next/navigation";
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
  const searchParams = useSearchParams();

  const createUrlWithCurrentParams = (href: string) => {
    const params = new URLSearchParams(searchParams);
    return `${href}?${params.toString()}`;
  };

  return (
    <nav className="flex gap-4">
      {items.map((item) => {
        const isActive = pathname === item.href;
        const hrefWithParams = createUrlWithCurrentParams(item.href);

        return (
          <Link
            key={item.href}
            href={hrefWithParams}
            className={twMerge(
              "px-4 py-2 rounded-md transition-colors",
              isActive
                ? "bg-primary text-neutral font-medium"
                : "hover:bg-primary/10"
            )}
          >
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
}
