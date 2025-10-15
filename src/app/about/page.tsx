import { Blurb } from "@/components/about/blurb";
import { Experiences } from "@/components/about/experiences";
import { Ending } from "@/components/about/ending";

export default function About() {
  return (
    <main className="max-w-xl mx-auto mt-4 mb-8 home-page-content">
      <Blurb />
      <Experiences />
      <Ending />
    </main>
  );
}
