import type { Metadata } from "next";
import {
  Roboto,
  Open_Sans,
  Montserrat,
  PT_Sans,
  Merriweather,
  Roboto_Mono
} from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin", "cyrillic"],
  weight: ["400"],
  variable: "--font-roboto",
  display: "swap"
});

const openSans = Open_Sans({
  subsets: ["latin", "cyrillic"],
  variable: "--font-open-sans",
  display: "swap"
});

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  variable: "--font-montserrat",
  display: "swap"
});

const ptSans = PT_Sans({
  subsets: ["latin", "cyrillic"],
  weight: ["400"],
  variable: "--font-pt-sans",
  display: "swap"
});

const merriweather = Merriweather({
  subsets: ["latin", "cyrillic"],
  weight: ["400"],
  variable: "--font-merriweather",
  display: "swap"
});

const robotoMono = Roboto_Mono({
  subsets: ["latin", "cyrillic"],
  variable: "--font-roboto-mono",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Text Font Chooser only for Microsoft Word",
  description:
    "Font preview tool — Word-safe fonts plus Unicode styles for Telegram, Discord, WhatsApp.",
  applicationName: "Banana Font",
  authors: [{ name: "banana.team", url: "https://github.com/1565gfd" }],
  generator: "Banana Font",
  keywords: ["font", "Microsoft Word", "Telegram", "Unicode", "preview", "banana.team"],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Banana Font — Text Font Chooser",
    description:
      "Word-safe fonts plus Unicode styles for Telegram, Discord, WhatsApp.",
    siteName: "Banana Font",
    type: "website"
  },
  other: {
    copyright: "© banana.team"
  }
};

const themeBootstrap = `(function(){try{var s=localStorage.getItem("bananafont:theme");if(s==="light"||s==="dark"){document.documentElement.dataset.theme=s;return;}var p=window.matchMedia&&window.matchMedia("(prefers-color-scheme: light)").matches;document.documentElement.dataset.theme=p?"light":"dark";}catch(e){document.documentElement.dataset.theme="dark";}})();`;

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const fontVars = [
    roboto.variable,
    openSans.variable,
    montserrat.variable,
    ptSans.variable,
    merriweather.variable,
    robotoMono.variable
  ].join(" ");

  return (
    <html lang="en" data-theme="dark">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootstrap }} />
      </head>
      <body className={fontVars}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
