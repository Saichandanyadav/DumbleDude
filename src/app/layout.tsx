import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DumbleDude Fitness | Be Legendary",
  description: "The ultimate gym experience for high-performance athletes.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#09090b]">
        {children}
      </body>
    </html>
  );
}