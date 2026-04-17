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
  description: "Custom responsive websites designed and developed by Natalia Santiago.",
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