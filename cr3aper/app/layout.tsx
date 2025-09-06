import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lun's Portfolio | Web Developer & Open Source Enthusiast",
  description: "Portfolio of Lun (creaper9487) - Web Front End Developer, Web3 enthusiast, and Open Source contributor specializing in React, Vue, and modern web technologies.",
  keywords: ["portfolio", "web developer", "react", "vue", "web3", "open source", "frontend"],
  authors: [{ name: "Lun (creaper9487)" }],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-gray-900 text-white">
        {children}
      </body>
    </html>
  );
}
