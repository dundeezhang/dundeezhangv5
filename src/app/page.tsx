import { Badges } from "@/components/badges";
import Link from "next/link";
import { Activity } from "@/components/activity";

export default function Home() {
  return (
    <main className="max-w-xl mx-auto mt-4 mb-8home-page-content">
      <Activity />
      <div className="max-w-xl mx-auto my-4 px-4 home-page-content">
        <p className="transition-all duration-300 hover:translate-x-2">
          Here are a few{" "}
          <Link href="https://en.wikipedia.org/wiki/Web_badge" target="_blank">
            88x31px
          </Link>{" "}
          badges from me and some friends:
        </p>
        <div className="my-4" />
        <Badges />
        <div className="my-4" />
      </div>
    </main>
  );
}
