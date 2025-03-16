
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="rounded-full w-10 h-10 hover:bg-stories-light-gray/10 dark:hover:bg-stories-dark/50 transition-all duration-300"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Moon className="h-5 w-5 text-stories-dark transition-all" />
      ) : (
        <Sun className="h-5 w-5 text-stories-cream transition-all" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
