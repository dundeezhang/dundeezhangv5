import Paragraph from "@/ui/paragraph";
import Link from "next/link";

export function Ending() {
  return (
    <div className="px-4 space-y-4">
      <Paragraph>
        Send inquiries directly to my email:{" "}
        <Link href="mailto:contact@dundeezha.ng">contact@dundeezha.ng</Link>.
      </Paragraph>
      <Paragraph>My socials are found at the top of this site.</Paragraph>
    </div>
  );
}
