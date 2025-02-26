import { createContext, useContext, useEffect, useState } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";

type Theme = "gryffindor" | "slytherin" | "ravenclaw" | "hufflepuff";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useLocalStorage<Theme>("theme", "gryffindor");

  useEffect(() => {
    const htmlElement = document.documentElement;
    htmlElement.classList.add(theme);

    return () => {
      htmlElement.classList.remove(theme);
    };
  }, [theme]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
