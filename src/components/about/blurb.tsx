import Paragraph from "@/ui/paragraph";

export function Blurb() {
  return (
    <div className="px-4">
      <div className="space-y-4">
        <Paragraph>
          I&apos;m a full stack developer studying Computer Science at the
          University of Waterloo.
        </Paragraph>
        <Paragraph>
          Currently, I&apos;m in San Francisco. So if you are in the area, feel
          free to reach out to chat!
        </Paragraph>
        <Paragraph>Otherwise, here are my experiences laid out.</Paragraph>
      </div>
    </div>
  );
}
