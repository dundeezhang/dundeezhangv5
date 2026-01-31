import { Blurb } from "@/components/about/blurb";
import { Experiences } from "@/components/about/experiences";
import { Ending } from "@/components/about/ending";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Dundee Zhang",
  description:
    "Dundee Zhang is a computer science student at the University of Waterloo and software engineer.",
};

export default function About() {
  return (
    <main className="max-w-xl mx-auto mt-4 mb-8 home-page-content">
      <Blurb />
      <Experiences />
      <Ending />
    </main>
  );
}
