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
    <div className="mb-4 last:mb-0">
      <Link href={`/articles/${slug}`} className="font-bold">
        {title}
      </Link>
      <div
        className="text-sm"
        style={{ color: "var(--list-text-color)", opacity: 0.7 }}
      >
        {date} • {subject} • {wordCount} words
      </div>
    </div>
  );
}
