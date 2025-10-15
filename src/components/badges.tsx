import Image from "next/image";
import badgesData from "@/data/badges.json";

export const Badges: React.FC = () => {
  return (
    <div
      className="badge-container"
      style={{
        display: "flex",
        gap: "8px",
        flexWrap: "wrap",
      }}
    >
      {badgesData.map((badge, index) => (
        <a
          href={badge.linkUrl}
          key={index}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            justifyContent: "center",
            textDecoration: "none",
          }}
        >
          <Image
            src={badge.imageUrl}
            alt={badge.altText}
            width="88"
            height="31"
          />
        </a>
      ))}
    </div>
  );
};
