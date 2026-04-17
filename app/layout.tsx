import "./globals.css";
import type { Metadata } from "next";
import {
  Cherry_Bomb_One,
  League_Spartan,
  Luxurious_Script,
} from "next/font/google";

const cherryBombOne = Cherry_Bomb_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-cherry-bomb-one",
});

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  variable: "--font-league-spartan",
});

const luxuriousScript = Luxurious_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-luxurious-script",
});

export const metadata: Metadata = {
  title: "Natalia Santiago | Web Design & Development",
  description:
    "Custom responsive websites designed and developed by Natalia Santiago.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cherryBombOne.variable} ${leagueSpartan.variable} ${luxuriousScript.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}