import type { Metadata } from "next";
import "./globals.css";
import React from "react";


export const metadata: Metadata = {
  title: "Charm",
  description: "Korea agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <head>
          <meta name="theme-color" content="#000" />
          <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
          {/*<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet"/>*/}
      </head>

      <body data-themes="luxury">
      {children}
      </body>
      </html>
  );
}
