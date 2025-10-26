import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: {
    template: "%s | Tiny Tank App",
    default: "App",
  },
  description: "これは書籍のサンプルサイトです",
  openGraph: {
    siteName: "NextJs Tiny Tank",
    title: {
      template: "%s | Next Book App(OGP)",
      default: "Next Book App(OGP)",
    },
    description: "これは書籍のサンプルサイト(OGP)",
    type: "article",
    images: [
      {
        url: "https://.../ogp.png",
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="ja">
      <body>
        <header>
          <h1>Next Book App</h1>
        </header>
        {children}
        <footer>copyright Next Book App 2025</footer>
      </body>
    </html>
  )
}
