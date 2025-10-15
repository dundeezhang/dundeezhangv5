"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { Webring } from "@/components/webring";

export function Footer() {
  const currYear = new Date().getFullYear();
  return (
    <>
      <footer className="max-w-xl mx-auto my-4 px-4">
        <div className="border-t-2 pt-2 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <p>{currYear} All Rights Reserved.</p>
          </div>
          <Webring />
        </div>
      </footer>
    </>
  );
}
