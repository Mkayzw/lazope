import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ['400', '500', '700', '900'],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Lazope Construction | Quality Building Services",
  description: "Lazope Construction provides premium construction services for residential and commercial projects with a commitment to excellence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body
        className={`${roboto.variable} antialiased bg-white font-roboto`}
      >
        {children}
      </body>
    </html>
  );
}
