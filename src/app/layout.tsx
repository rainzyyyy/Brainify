import type { Metadata } from "next";
import "../app/styles/globals.css";

export const metadata: Metadata = {
  title: "Brainify",
  description: "A gamification learning platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="../assets/favicons/brainify.png" type="image/x-icon" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
