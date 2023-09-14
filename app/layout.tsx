import NextAuthProvider from "@/provider/NextAuthProvider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Notelio",
  description: "Notelio is a comprehensive note taking application. Make your notes with ease.",
  keywords: ['Note Taker', 'Next.js', 'Firebase', 'NextAuth']
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
      </body>
    </html>
  );
}
