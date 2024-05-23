import "./global.css";
import { Inter } from "next/font/google";
import { Navbar } from "./components/nav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "./components/footer";
import { baseUrl } from "./sitemap";
import { ThemeProvider } from "./components/theme-provider";

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    template: "%s | Ricardo Gonzalez",
    default: "Ricardo Gonzalez",
  },
  description: "A website by Ricardo Gonzalez.",
  openGraph: {
    title: "Ricardo Gonzalez",
    url: `${baseUrl}`,
    siteName: "Ricardo Gonzalez's website",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${baseUrl}/og?title=${encodeURIComponent(
          "Ricardo Gonzalez's site"
        )}`,
        width: 1200,
        height: 630,
        alt: "Ricardo Gonzalez's site",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  twitter: {
    title: "Ricardo Gonzalez",
    card: "summary_large_image",
    creator: "@ryck",
  },
  icons: {
    shortcut: `${baseUrl}/favicons/favicon.ico`,
    icon: `${baseUrl}/favicons/favicon.ico`,
  },
  alternates: {
    types: {
      "application/rss+xml": `${baseUrl}/rss`,
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
      <body className="antialiased max-w-5xl mx-4 mt-8 lg:mx-auto">
        <ThemeProvider attribute="class" defaultTheme="system">
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
