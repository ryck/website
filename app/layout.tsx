import "./global.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Navbar } from "./components/nav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "./components/footer";
import { baseUrl } from "./sitemap";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Next.js Portfolio Starter",
    template: "%s | Next.js Portfolio Starter",
  },
  description: "This is my portfolio.",
  openGraph: {
    title: "My Portfolio",
    description: "This is my portfolio.",
    url: baseUrl,
    siteName: "My Portfolio",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["latin"] });

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={cx(
        "text-black bg-white dark:text-white dark:bg-black",
        inter.className
      )}
    >
      <body className="antialiased max-w-4xl mx-4 mt-8 lg:mx-auto">
        <ThemeProvider>
          <main
            id="skip"
            className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0 text-lg"
          >
            <Navbar />
            {children}
            <Footer />
            <Analytics />
            <SpeedInsights />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
