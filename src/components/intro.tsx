"use client";

import { SocialCons } from "./social-cons";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { usePathname } from "next/navigation";

export function Intro() {
  const pathname = usePathname();
  return (
    <div className="max-w-xl mx-auto mt-10 px-4">
      <div className="flex flex-col py-2 gap-4 border-b-2 sm:flex-row sm:justify-between sm:items-center sm:gap-0">
        <div>
          <h1 className="text-2xl transition-all duration-300 hover:rotate-[-2deg] hover:scale-108">
            <Link href="/">
              <span className="glow">Dundee Zhang</span>
            </Link>
          </h1>
          <TypeAnimation
            sequence={[
              "Software Engineer, Waterloo",
              2000,
              "Software Engineer, Toronto",
              2000,
              "Software Engineer, San Francisco",
              2000,
            ]}
            wrapper="span"
            speed={50}
            style={{}}
            repeat={Infinity}
            className="italic"
          />
        </div>
        <div className="social-icons sm:ml-auto">
          <SocialCons />
        </div>
      </div>
      <div className="navbar mt-1 font-bold">
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className={pathname === "/" ? "active" : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={pathname === "/about" ? "active" : ""}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/works"
              className={pathname === "/works" ? "active" : ""}
            >
              Works
            </Link>
          </li>
          <li>
            <a href="https://blog.dhz.app">Blog</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
