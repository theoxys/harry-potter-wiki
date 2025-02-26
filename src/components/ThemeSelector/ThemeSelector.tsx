"use client";

import { useTheme } from "@/contexts/ThemeContext";
import { useEffect, useState } from "react";
import { Gryffindor } from "../HouseIcons/Gryffindor";
import { Hufflepuff } from "../HouseIcons/Hufflepuff";
import { Slytherin } from "../HouseIcons/Slytherin";
import { Ravenclaw } from "../HouseIcons/Ravenclaw";
import { cx } from "@/utils/tailwind";

const themes = [
  { label: "Gryffindor", value: "gryffindor", icon: Gryffindor },
  { label: "Slytherin", value: "slytherin", icon: Slytherin },
  { label: "Ravenclaw", value: "ravenclaw", icon: Ravenclaw },
  { label: "Hufflepuff", value: "hufflepuff", icon: Hufflepuff },
] as const;

export function ThemeSelector() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <></>;
  }

  return (
    <div className="flex items-center gap-4">
      <div className="flex flex-wrap gap-2">
        {themes.map((themeOption) => (
          <button
            key={themeOption.value}
            onClick={() => setTheme(themeOption.value)}
            className={cx(
              "px-4 py-2 rounded-md text-sm transition-colors cursor-pointer",
              theme === themeOption.value
                ? "bg-primary text-white font-medium"
                : "bg-background hover:bg-muted border border-neutral/20 opacity-50"
            )}
          >
            <div className="flex flex-col items-center gap-4 p-4">
              <themeOption.icon className={cx("h-28")} />
              <span className="font-semibold">{themeOption.label}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
