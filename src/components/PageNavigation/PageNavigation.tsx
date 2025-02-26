"use client";

import { Link } from "next-view-transitions";
import { usePathname, useSearchParams } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { Button } from "../ui/Button";

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
    <nav className="flex flex-wrap gap-4">
      {items.map((item) => {
        const isActive = pathname === item.href;
        const hrefWithParams = createUrlWithCurrentParams(item.href);

        return (
          <Link key={item.href} href={hrefWithParams}>
            <Button variant={isActive ? "primary" : "ghost"}>
              {item.name}
            </Button>
          </Link>
        );
      })}
    </nav>
  );
}
