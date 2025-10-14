import { Intro } from "@/components/intro";

export default function About() {
  return (
    <div className="">
      <Intro />
      <main className="max-w-xl mx-auto my-4 px-4">
        <div className="py-4">
          <h2 className="text-xl font-semibold mb-4">About Me</h2>
          <div className="space-y-4">
            <p>
              I am a computer science student at the University of Waterloo with
              a passion for building meaningful software that solves real
              problems.
            </p>
            <p>
              When I am not coding, you can find me exploring new technologies,
              contributing to open source projects, or learning about the latest
              developments in the tech world.
            </p>
            <p>
              I am always interested in connecting with like-minded individuals
              and exploring new opportunities. Feel free to reach out!
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
