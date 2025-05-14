import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AAMU IEEE",
  description:
    "IEEE Student Branch at Alabama A&M University: Empowering future engineers through workshops, competitions, and professional networking opportunities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
