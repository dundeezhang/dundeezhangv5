import Paragraph from "@/ui/paragraph";
import Link from "next/link";

export function ExperienceBlurb() {
  return (
    <div className="px-4">
      <div className="space-y-4">
        <Paragraph>
          I&apos;m a software engineer studying Computer Science at the
          University of Waterloo. Feel free to reach out via{" "}
          <Link href="mailto:dh2zhang@uwaterloo.ca">email</Link> or{" "}
          <Link href="https://x.com/dundeez" target="_blank">
            X
          </Link>{" "}
          for a chat.
        </Paragraph>
      </div>
    </div>
  );
}
