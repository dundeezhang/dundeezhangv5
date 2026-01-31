import { Activity } from "@/components/home/activity";
import { BadgeContainer } from "@/components/home/badge-container";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dundee Zhang - Software Developer",
  description:
    "Dundee Zhang is a computer science student at the University of Waterloo and software engineer. View projects, articles, and more.",
};

export default function Home() {
  return (
    <main className="max-w-xl mx-auto mt-4 mb-8 home-page-content">
      <Activity />
      <BadgeContainer />
    </main>
  );
}
