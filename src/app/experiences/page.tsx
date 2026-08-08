import { ExperienceBlurb } from "@/components/experiences/blurb";
import { ExperienceList } from "@/components/experiences/experiences";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experiences - Dundee Zhang",
  description:
    "Dundee Zhang's software engineering and leadership experience.",
};

export default function Experience() {
  return (
    <main className="max-w-xl mx-auto mt-4 mb-8 home-page-content">
      <ExperienceBlurb />
      <ExperienceList />
    </main>
  );
}
