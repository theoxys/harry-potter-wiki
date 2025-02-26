"use client";

import { ThemeSelector } from "@/components/ThemeSelector/ThemeSelector";

export default function PreferredHouses() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-lg">
        Select your preferred houses and see the magic happen!
      </h1>
      <ThemeSelector />
    </div>
  );
}
