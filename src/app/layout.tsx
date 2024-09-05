import Navbar from "@/components/navbar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { data } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import DarkIcon from "./favicon-dark.ico";
import LightIcon from "./favicon-light.ico";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(data.url),
  title: {
    default: data.name,
    template: `%s | ${data.name}`,
  },
  description: data.description,
  openGraph: {
    title: `${data.name}`,
    description: data.description,
    url: data.url,
    siteName: `${data.name}`,
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
  twitter: {
    title: `${data.name}`,
    card: "summary_large_image",
  },
  icons: {
    icon: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        url: LightIcon.src,
        media: '(prefers-color-scheme: light)',
      },
      {
        rel: 'icon',
        type: 'image/x-icon',
        url: DarkIcon.src,
        media: '(prefers-color-scheme: dark)'
      },
    ],
  },
  verification: {
    google: "",
    yandex: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "mx-auto max-w-[692px] mb-8 overflow-x-hidden px-6 py-12 font-sans antialiased md:overflow-x-visible md:py-16",
          fontSans.variable
        )}
      >
        <TooltipProvider delayDuration={0}>
          {children}
          <Navbar />
        </TooltipProvider>
      </body>
    </html>
  );
}
