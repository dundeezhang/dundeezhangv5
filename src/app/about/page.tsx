import { Activity } from "@/components/activity";

export default function About() {
  return (
    <main className="max-w-xl mx-auto mt-4 mb-8 home-page-content">
      <div className="px-4">
        <div className="space-y-4">
          <p className="transition-all duration-300 hover:translate-x-2">
            I&apos;m a computer science student at the University of Waterloo.
            Usually, you can find me working in the Computer Science Club office
            (MC 3036), locking in at Dana Porter Library, or chilling in the
            Math CnD.
          </p>
          <p className="transition-all duration-300 hover:translate-x-2">
            When I&apos;m not working, I workout, climb, or code. Occasionally I
            crack open books I find interesting.
          </p>
          <p className="transition-all duration-300 hover:translate-x-2">
            I&apos;m located in Toronto/Waterloo during my student terms, so if
            you are in the area, feel free to reach out to chat!
          </p>
          <p className="transition-all duration-300 hover:translate-x-2">
            Otherwise, here is what I&apos;ve been up nowadays:
          </p>
        </div>
      </div>
      <Activity />
    </main>
  );
}
