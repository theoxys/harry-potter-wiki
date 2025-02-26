import { FilterSidebar } from "@/components/FilterSidebar/FilterSidebar";
import { PageNavigation } from "@/components/PageNavigation/PageNavigation";

const navigationItems = [
  { name: "Staff", href: "/staff" },
  { name: "Students", href: "/students" },
  { name: "All", href: "/all" },
  { name: "Preferred Houses", href: "/preferred-houses" },
];

export default function ListLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-[256px_1fr] w-full min-h-screen h-full bg-background text-neutral">
      <div className="sticky top-0 h-screen border-r border-neutral/10">
        <FilterSidebar />
      </div>

      <div className="overflow-y-auto">
        <div className="flex flex-col gap-4 p-6">
          <PageNavigation items={navigationItems} />
          {children}
        </div>
      </div>
    </div>
  );
}
