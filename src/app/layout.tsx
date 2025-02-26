import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ViewTransitions } from "next-view-transitions";
import Providers from "./providers";
import { PageNavigation } from "@/components/PageNavigation/PageNavigation";
import { FilterSidebar } from "@/components/FilterSidebar/FilterSidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Harry Potter Characters Wiki",
  description: "A wiki about the characters of the Harry Potter series",
};

const navigationItems = [
  { name: "Choose Your House", href: "/" },
  { name: "All Characters", href: "/all" },
  { name: "Staff", href: "/staff" },
  { name: "Students", href: "/students" },
  { name: "Favorites", href: "/favorites" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-neutral`}
        >
          <Providers>
            <div className="grid md:grid-cols-[256px_1fr] grid-cols-[1fr] w-full min-h-screen h-full bg-background text-neutral">
              <div className="sticky top-0 h-screen border-r border-neutral/10 bg-surface md:block hidden">
                <FilterSidebar />
              </div>

              <div className="overflow-y-auto">
                <div className="flex flex-col gap-4 p-6">
                  <PageNavigation items={navigationItems} />
                  {children}
                </div>
              </div>
            </div>
          </Providers>
        </body>
      </html>
    </ViewTransitions>
  );
}
