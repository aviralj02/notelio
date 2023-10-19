import NextAuthProvider from "@/provider/NextAuthProvider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Notelio",
  description: "Notelio is a comprehensive note taking application. Make your notes with ease.",
  keywords: ['Note Taker', 'Next.js', 'Firebase', 'NextAuth'],
  openGraph: {
    title: 'Notelio',
    description: 'Notelio is a comprehensive note taking application. Make your notes with ease.',
    url: 'https://notelio.vercel.app',
    siteName: "Notelio",
    locale: "en-US",
    type: "website"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>{children}</NextAuthProvider>
        <Analytics />
      </body>
    </html>
  );
}
