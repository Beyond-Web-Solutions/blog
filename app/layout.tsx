import "./global.css";
import type { Metadata } from "next";
import { Navbar } from "./components/nav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { baseUrl } from "./sitemap";
import { Poppins } from "next/font/google";
import Footer from "./components/footer";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Beyond Web Solutions",
    template: "%s | Beyond Web Solutions",
  },
  description:
    "Blogs over de ontwikkeling van webapplicaties met praktische inzichten en tips voor kwalitatieve softwareoplossingen.",
  openGraph: {
    title: "Beyond Web Solutions",
    description:
      "Blogs over de ontwikkeling van webapplicaties met praktische inzichten en tips voor kwalitatieve softwareoplossingen.",
    url: baseUrl,
    siteName: "Beyond Web Solutions",
    locale: "nl_NL",
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

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="nl"
      className={cx(
        "bg-white text-black dark:bg-black dark:text-white",
        poppins.className,
      )}
    >
      <body className="mx-4 mt-8 max-w-xl antialiased lg:mx-auto">
        <main className="mt-6 flex min-w-0 flex-auto flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
