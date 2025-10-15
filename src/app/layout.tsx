import type { Metadata } from "next";
import { Geist, Geist_Mono, Anonymous_Pro } from "next/font/google";
import "@/styles/globals.css";
import "@/styles/general.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Background from "@/components/background";
import { Intro } from "@/components/intro";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const anonymousPro = Anonymous_Pro({
  variable: "--font-anonymous-pro",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Dundee Zhang",
  description:
    "Dundee Zhang's porfolio. View my projects and other works! Love from Toronto <3.",
  openGraph: {
    title: "Dundee Zhang",
    description:
      "Dundee Zhang's porfolio. View my projects and other works! Love from Toronto <3.",
    images: [
      {
        url: "/card-preview.jpeg.jpeg",
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
      "Dundee Zhang's porfolio. View my projects and other works! Love from Toronto <3.",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${anonymousPro.variable} antialiased`}
      >
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
