"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-accent/50 transition-colors hover:cursor-pointer relative"
      aria-label="Toggle theme"
    >
      <Sun
        className={`h-5 w-5 transition-all ${
          mounted && theme === "dark"
            ? "rotate-90 scale-0"
            : "rotate-0 scale-100"
        }`}
      />
      <Moon
        className={`absolute h-5 w-5 transition-all ${
          mounted && theme === "dark"
            ? "rotate-0 scale-100"
            : "-rotate-90 scale-0"
        }`}
      />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
