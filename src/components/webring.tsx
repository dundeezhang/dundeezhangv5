import Image from "next/image";

import { useTheme } from "@/hooks/use-theme";

import uwcsWrBlack from "@/images/icons/blackuwcswebring.svg";
import uwcsWrWhite from "@/images/icons/uwcscwebring.svg";

import { MoveLeft, MoveRight } from "lucide-react";
import { DEFAULT_ICON_SIZE } from "@/constants/icons";

export function Webring() {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  return (
    <div
      className=" ml-2"
      style={{
        borderColor: "rgb(239, 45, 120)",
      }}
    >
      <div className="flex items-center justify-center gap-2">
        <a
          className="cs-webring-links"
          href="https://cs.uwatering.com/#https://dundeezhang.com?nav=prev"
        >
          <MoveLeft size={DEFAULT_ICON_SIZE} />
        </a>
        <a
          href="https://cs.uwatering.com/#https://dundeezhang.com"
          target="_blank"
        >
          <Image
            src={isDarkMode ? uwcsWrWhite : uwcsWrBlack}
            alt="UWaterloo CS Web Ring"
            className="h-5 w-5 transition-all duration-300 hover:rotate-[375deg]"
          />
        </a>
        <a
          className="cs-webring-links"
          href="https://cs.uwatering.com/#https://dundeezhang.com?nav=next"
        >
          <MoveRight size={DEFAULT_ICON_SIZE} />
        </a>
      </div>
    </div>
  );
}
