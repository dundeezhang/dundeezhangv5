"use client";

import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

export function ThemeToggle() {
  const { theme, toggleTheme, isLoaded } = useTheme();

  if (!isLoaded) {
    return (
      <button className="p-2 rounded-lg border border-gray-300 bg-gray-100">
        <div className="w-4 h-4" />
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg border border-gray-300 hover:border-gray-400 transition-colors bg-white dark:bg-gray-800 dark:border-gray-600 dark:hover:border-gray-500"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? (
        <Moon size={16} className="text-gray-600 dark:text-gray-300" />
      ) : (
        <Sun size={16} className="text-gray-600 dark:text-gray-300" />
      )}
    </button>
  );
}
