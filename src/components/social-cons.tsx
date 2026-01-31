import { Twitter, Mail, Linkedin, Github, FileText } from "lucide-react";
import { SOCIAL_ICON_SIZE } from "@/constants/icons";

export function SocialCons() {
  return (
    <>
      {/* when hovering the icons, they tilt */}
      <ul className="flex space-x-1 sm:space-x-1 gap-4 sm:gap-0 pb-4 sm:pb-0">
        <li className="p-0 sm:p-2">
          <a
            href="https://x.com/dundeezhang"
            aria-label="Twitter profile"
            className="twitter-icon flex items-center justify-center transition-all duration-300 hover:rotate-[15deg] hover:text-[#1DA1F2]"
          >
            <Twitter size={SOCIAL_ICON_SIZE} />
          </a>
        </li>
        <li className="p-0 sm:p-2">
          <a
            href="https://github.com/dundeezhang"
            aria-label="GitHub profile"
            className="flex items-center justify-center transition-all duration-300 hover:rotate-[15deg] hover:text-[#6366f1]"
          >
            <Github size={SOCIAL_ICON_SIZE} />
          </a>
        </li>
        <li className="p-0 sm:p-2">
          <a
            href="https://linkedin.com/in/dundeezhang"
            aria-label="LinkedIn profile"
            className="flex items-center justify-center transition-all duration-300 hover:rotate-[15deg] hover:text-[#0077B5]"
          >
            <Linkedin size={SOCIAL_ICON_SIZE} />
          </a>
        </li>
        <li className="p-0 sm:p-2">
          <a
            href="mailto:contact@dundeezha.ng"
            aria-label="Email address"
            className="flex items-center justify-center transition-all duration-300 hover:rotate-[15deg] hover:text-[#FF4D00]"
          >
            <Mail size={SOCIAL_ICON_SIZE} />
          </a>
        </li>
        <a
          href="/resume.pdf"
          className="transition-all duration-300 hidden sm:block"
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--pink)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "")}
        >
          <li
            className="border-2 py-1 px-2 rounded ml-2"
            style={{
              borderColor: "rgb(239, 45, 120)",
            }}
          >
            <div className="flex items-center space-x-1">
              <FileText size={SOCIAL_ICON_SIZE} />
              <span className="text-sm">Resume</span>
            </div>
          </li>
        </a>
      </ul>
    </>
  );
}
