import { SocialCons } from "./social-cons";
import Link from "next/link";

export function Intro() {
  return (
    <div className="max-w-xl mx-auto mt-10 px-4">
      <div className="flex flex-col py-2 gap-4 border-b-2 sm:flex-row sm:justify-between sm:items-center sm:gap-0">
        <div>
          <h1 className="text-2xl">
            <span className="glow">Dundee Zhang</span>
          </h1>
          <p className="">Software Engineer, Waterloo</p>
        </div>
        <div className="social-icons sm:ml-auto">
          <SocialCons />
        </div>
      </div>
      <div className="navbar mt-1">
        <ul className="flex space-x-6">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/works">Works</Link>
          </li>
          <li>
            <a href="https://blog.dhz.app">Blog</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
