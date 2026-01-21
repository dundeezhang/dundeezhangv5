import { ArticleContainer } from "@/components/articles/article-container";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Articles - Dundee Zhang",
  description:
    "Read technical articles and blog posts by Dundee Zhang covering web development, React, Next.js, computer science, and reflections on university life.",
};

export default function Articles() {
  return (
    <main className="max-w-xl mx-auto mt-4 mb-8 px-4">
      <ArticleContainer />
    </main>
  );
}
