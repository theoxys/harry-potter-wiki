export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

import { ThemeSelector } from "@/components/ThemeSelector/ThemeSelector";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-lg">
        Select your preferred houses and see the magic happen!
      </h1>
      <ThemeSelector />
    </div>
  );
}
