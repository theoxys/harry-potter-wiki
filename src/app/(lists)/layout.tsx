import { PageNavigation } from "@/components/PageNavigation/PageNavigation";
import { FilterSidebar } from "@/components/FilterSidebar/FilterSidebar";
import { Menu } from "lucide-react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerBody,
} from "@/components/ui/Drawer";
import { Button } from "@/components/ui/Button";

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
    <div className="grid md:grid-cols-[256px_1fr] grid-cols-[1fr] w-full min-h-screen h-full bg-background text-neutral">
      <div className="sticky top-0 h-screen border-r border-neutral/10 bg-surface md:block hidden">
        <FilterSidebar />
      </div>

      <div className="overflow-y-auto w-[1080px] max-w-[1080px] mx-auto">
        <div className="flex flex-col gap-4 p-6">
          <div className="md:hidden">
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="ghost">
                  <Menu className="size-6" />
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Filters</DrawerTitle>
                </DrawerHeader>
                <DrawerBody>
                  <FilterSidebar />
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </div>

          <PageNavigation items={navigationItems} />
          {children}
        </div>
      </div>
    </div>
  );
}
