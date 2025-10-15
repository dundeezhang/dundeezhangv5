"use client";

import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

import { DEFAULT_ICON_SIZE } from "@/constants/icons";

export function ThemeToggle() {
  const { theme, toggleTheme, isLoaded } = useTheme();

  if (!isLoaded) {
    return (
      <button className="p-2">
        <div className="w-4 h-4" />
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="transition-all duration-300 hover:rotate-[375deg]"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      onMouseEnter={(e) => {
        const icon = e.currentTarget.querySelector("svg");
        if (icon) icon.style.color = "var(--pink)";
      }}
      onMouseLeave={(e) => {
        const icon = e.currentTarget.querySelector("svg");
        if (icon) icon.style.color = "var(--foreground)";
      }}
    >
      {theme === "light" ? (
        <Moon
          size={DEFAULT_ICON_SIZE}
          style={{ color: "var(--foreground)", transition: "color 300ms ease" }}
        />
      ) : (
        <Sun
          size={DEFAULT_ICON_SIZE}
          style={{ color: "var(--foreground)", transition: "color 300ms ease" }}
        />
      )}
    </button>
  );
}
