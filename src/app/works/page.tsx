import { WorksClient } from "@/components/works/works-client";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Works - Dundee Zhang",
  description:
    "Browse projects and works by Dundee Zhang, including web applications, open source contributions, and software experiments.",
};

export default function Works() {
  return (
    <main className="max-w-xl mx-auto mt-4 mb-8 px-4">
      <WorksClient />
    </main>
  );
}
