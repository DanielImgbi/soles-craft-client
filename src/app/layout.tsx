import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Nav from "@/components/nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "solesCraft",
  description: "Soles Craft specializes in creating high-quality, stylish, and comfortable shoes for both men and women.",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://soles-craft-client.vercel.app",
    siteName: "SolesCraft",
    title: "SolesCraft",
    description: "Soles Craft specializes in creating high-quality, stylish, and comfortable shoes for both men and women.",
    images: [
      {
        url: "https://soles-craft-client.vercel.app/open-graph.png",
        width: 800,
        height: 600,
        alt: "Og Image Alt",
        type: "image/png",
      },
      {
        url: "https://soles-craft-client.vercel.app/open-graph.png",
        width: 900,
        height: 800,
        alt: "Og Image Alt Second",
        type: "image/png",
      },
      { url: "https://soles-craft-client.vercel.app/open-graph.png" },
      { url: "https://soles-craft-client.vercel.app/open-graph.png" },
    ],
  },
  twitter: {
    card: "summary_large_image",
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-[#f1f0f0] text-gray-500  w-screen overflow-x-hidden`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
