import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "./ThemeProvider";
import "./globals.css";
import { Inter } from "next/font/google";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Syncade",
  /**
   * Provides a brief description of the Syncade application, which is an intelligent note-taking app powered by AI.
   */
  description: "Intelligent note-taking app, powered by AI.",
  openGraph: {
    title: "Syncade",
    description: "Intelligent note-taking app, powered by AI.",
    images: [
      {
        url: "https://www.yoursite.com/og-image.jpg",
        width: 1920,
        height: 1080,
      },
    ],
    url: "https://www.syncade.io",
    type: "website",
    siteName: "Syncade",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@yourtwitterhandle",
    title: "Syncade",
    description: "Intelligent note-taking app, powered by AI.",
    images: ["https://www.yoursite.com/twitter-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: "https://www.syncade.io",
    languages: {
      "en-US": "https://syncade.iom",
      es: "https://www.syncade.io/es",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ThemeProvider attribute="class">{children}</ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
