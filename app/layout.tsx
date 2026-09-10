import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FB Before/After Generator",
  description: "Generate Facebook before/after comparison post images",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50">{children}</body>
    </html>
  );
}
