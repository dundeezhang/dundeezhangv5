"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { DEFAULT_ICON_SIZE } from "@/constants/icons";
import Image from "next/image";

interface ArticleReaderProps {
  content: string;
  article: {
    title: string;
    date: string;
    subject: string;
    wordCount: number;
  };
}

export function ArticleReader({ content, article }: ArticleReaderProps) {
  return (
    <div>
      {/* Back button */}
      <Link
        href="/articles"
        className="inline-flex items-center gap-2 mb-4 transition-all duration-300 hover:translate-x-[-8px] hover:text-[#EF2D78]"
        style={{ color: "var(--foreground)", opacity: 0.8 }}
      >
        <ArrowLeft size={DEFAULT_ICON_SIZE} />
        <span>Back to articles</span>
      </Link>

      {/* Article content */}
      <article
        className="prose prose-lg max-w-none"
        style={{
          color: "var(--foreground)",
        }}
      >
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw, rehypeSanitize]}
          components={{
            h1: ({ children }) => (
              <h1
                className="text-3xl font-bold mb-4"
                style={{ color: "var(--foreground)" }}
              >
                {children}
              </h1>
            ),
            h2: ({ children }) => (
              <h2
                className="text-2xl font-bold mb-3 mt-6"
                style={{ color: "var(--foreground)" }}
              >
                {children}
              </h2>
            ),
            h3: ({ children }) => (
              <h3
                className="text-xl font-semibold mb-2 mt-4"
                style={{ color: "var(--foreground)" }}
              >
                {children}
              </h3>
            ),
            p: ({ children }) => (
              <p
                className="mb-4 leading-relaxed"
                style={{ color: "var(--list-text-color)" }}
              >
                {children}
              </p>
            ),
            a: ({ href, children }) => (
              <a
                href={href}
                className="text-[#EF2D78] hover:underline transition-all duration-300"
                target={
                  href && typeof href === "string" && href.startsWith("http")
                    ? "_blank"
                    : undefined
                }
                rel={
                  href && typeof href === "string" && href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
              >
                {children}
              </a>
            ),
            code: ({ className, children }) => {
              const isInline = !className;
              if (isInline) {
                return (
                  <code
                    className="px-1.5 py-0.5 rounded text-sm"
                    style={{
                      backgroundColor: "var(--grid-color)",
                      color: "var(--foreground)",
                    }}
                  >
                    {children}
                  </code>
                );
              }
              return (
                <code
                  className={`${className} block p-4 rounded my-4 overflow-x-auto text-sm`}
                  style={{
                    backgroundColor: "var(--grid-color)",
                    color: "var(--foreground)",
                  }}
                >
                  {children}
                </code>
              );
            },
            pre: ({ children }) => (
              <pre
                className="p-4 rounded my-4 overflow-x-auto text-sm"
                style={{
                  backgroundColor: "var(--grid-color)",
                }}
              >
                {children}
              </pre>
            ),
            ul: ({ children }) => (
              <ul
                className="list-disc list-inside mb-4 space-y-2"
                style={{ color: "var(--list-text-color)" }}
              >
                {children}
              </ul>
            ),
            ol: ({ children }) => (
              <ol
                className="list-decimal list-inside mb-4 space-y-2"
                style={{ color: "var(--list-text-color)" }}
              >
                {children}
              </ol>
            ),
            li: ({ children }) => (
              <li className="ml-4" style={{ color: "var(--list-text-color)" }}>
                {children}
              </li>
            ),
            blockquote: ({ children }) => (
              <blockquote
                className="border-l-4 pl-4 my-4 italic"
                style={{
                  borderColor: "#EF2D78",
                  color: "var(--list-text-color)",
                  opacity: 0.9,
                }}
              >
                {children}
              </blockquote>
            ),
            img: ({ src, alt }) => {
              if (!src || typeof src !== "string") return null;

              // Handle relative paths for local images
              const imageSrc = src.startsWith("../")
                ? src.replace("../../../public", "")
                : src;

              return (
                <Image
                  src={imageSrc}
                  alt={alt || "Article image"}
                  width={800}
                  height={600}
                  className="rounded-lg w-full h-auto my-6"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
              );
            },
            p: ({ children, ...props }) => {
              // Check if the paragraph only contains an image
              const hasOnlyImage =
                children &&
                typeof children === "object" &&
                "type" in children &&
                children.type === "img";

              if (hasOnlyImage) {
                return <>{children}</>;
              }

              return (
                <p
                  className="mb-4 leading-relaxed"
                  style={{ color: "var(--list-text-color)" }}
                  {...props}
                >
                  {children}
                </p>
              );
            },
            hr: () => (
              <hr
                className="my-8"
                style={{
                  borderColor: "var(--grid-color)",
                  opacity: 0.5,
                }}
              />
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </article>

      {/* Back to articles link at bottom */}
      <div className="mt-6">
        <Link
          href="/articles"
          className="inline-flex items-center gap-2 transition-all duration-300 hover:translate-x-[-8px] hover:text-[#EF2D78]"
          style={{ color: "var(--foreground)", opacity: 0.8 }}
        >
          <ArrowLeft size={DEFAULT_ICON_SIZE} />
          <span>Back to all articles</span>
        </Link>
      </div>
    </div>
  );
}
