import { createContext, useContext, useEffect, useState } from "react";

type Theme = "gryffindor" | "slytherin" | "ravenclaw" | "hufflepuff";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("gryffindor");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Carrega o tema do localStorage apenas no cliente
    const savedTheme = localStorage.getItem("theme") as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      // Salva o tema no localStorage apenas quando montado no cliente
      localStorage.setItem("theme", theme);
      const htmlElement = document.documentElement;
      htmlElement.classList.remove(
        "gryffindor",
        "slytherin",
        "ravenclaw",
        "hufflepuff"
      );
      htmlElement.classList.add(theme);
    }
  }, [theme, mounted]);

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
