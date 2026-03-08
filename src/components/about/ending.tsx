import Paragraph from "@/ui/paragraph";
import Link from "next/link";

export function Ending() {
  return (
    <div className="px-4 space-y-4">
      <Paragraph>
        Send inquiries directly to my email:{" "}
        <Link href="mailto:dh2zhang@uwaterloo.ca">dh2zhang@uwaterloo.ca</Link>.
      </Paragraph>
      <Paragraph>My socials are found at the top of this site.</Paragraph>
    </div>
  );
}
