"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";
import { useTheme } from "@/contexts/ThemeContext";
import { useEffect, useState } from "react";

const themes = [
  { label: "Grifinória", value: "gryffindor" },
  { label: "Sonserina", value: "slytherin" },
  { label: "Corvinal", value: "ravenclaw" },
  { label: "Lufa-Lufa", value: "hufflepuff" },
] as const;

export function ThemeSelector() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-element">Tema:</span>
      <Select value={theme} onValueChange={setTheme}>
        <SelectTrigger className="w-[180px]">
          <SelectValue>
            {themes.find((t) => t.value === theme)?.label}
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          {themes.map((theme) => (
            <SelectItem key={theme.value} value={theme.value}>
              {theme.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
