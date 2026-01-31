import type { Metadata } from "next";
import { Anonymous_Pro } from "next/font/google";
import "@/styles/globals.css";
import "@/styles/general.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Background from "@/ui/background";
import { Intro } from "@/ui/intro";
import { Footer } from "@/ui/footer";

const anonymousPro = Anonymous_Pro({
  variable: "--font-anonymous-pro",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap", // Ensures text is visible while font loads
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === "production"
      ? "https://dundeezhang.com"
      : "http://localhost:3000",
  ),
  title: "Dundee Zhang",
  description:
    "Dundee Zhang's portfolio. View my projects and other works! Love from Toronto.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Dundee Zhang",
    description:
      "Dundee Zhang's portfolio. View my projects and other works! Love from Toronto.",
    images: [
      {
        url: "/card-preview.jpeg",
        width: 1200,
        height: 630,
        alt: "Dundee Zhang Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dundee Zhang",
    description:
      "Dundee Zhang's portfolio. View my projects and other works! Love from Toronto.",
    images: ["/card-preview.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${anonymousPro.variable} antialiased`}>
        <ThemeProvider>
          <Background />
          <Intro />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
