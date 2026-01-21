"use client";

import Link from "next/link";

interface ArticleCardProps {
  title: string;
  date: string;
  subject: string;
  wordCount: number;
  slug: string;
}

export function ArticleCard({
  title,
  date,
  subject,
  wordCount,
  slug,
}: ArticleCardProps) {
  return (
    <div className="mb-4 last:mb-0 transition-all duration-300 hover:translate-x-[8px] group">
      <Link href={`/articles/${slug}`} className="block article-page">
        <div className="font-bold transition-colors duration-300 group-hover:text-[#EF2D78]">{title}</div>
        <div
          className="text-sm"
          style={{ color: "var(--list-text-color)", opacity: 1 }}
        >
          {date} • {subject} • {wordCount} words
        </div>
      </Link>
    </div>
  );
}
