import { Twitter, Mail, Linkedin, Github, FileText } from "lucide-react";
import { SOCIAL_ICON_SIZE } from "@/constants/icons";

export function SocialCons() {
  return (
    <>
      {/* when hovering the icons, they tilt */}
      <ul className="flex space-x-1">
        <li className="p-2">
          <a href="https://x.com/dundeezhang">
            <Twitter size={SOCIAL_ICON_SIZE} />
          </a>
        </li>
        <li className="p-2">
          <a href="https://github.com/dundeezhang">
            <Github size={SOCIAL_ICON_SIZE} />
          </a>
        </li>
        <li className="p-2">
          <a href="https://linkedin.com/in/dundeezhang">
            <Linkedin size={SOCIAL_ICON_SIZE} />
          </a>
        </li>
        <li className="p-2">
          <a href="mailto:contact@dundeezha.ng">
            <Mail size={SOCIAL_ICON_SIZE} />
          </a>
        </li>
        <li className="border-2 py-1 px-2 rounded ml-2">
          <a href="/resume.pdf" className="">
            <div className="flex items-center space-x-1">
              <FileText size={SOCIAL_ICON_SIZE} />
              <span className="text-sm">Resume</span>
            </div>
          </a>
        </li>
      </ul>
    </>
  );
}
