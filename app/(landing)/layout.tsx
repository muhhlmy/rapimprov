import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../globals.css";
import HeaderSection from "./components/layouts/header";

const monserrat = Montserrat({
  variable: "--font-montserrat",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Rapimprov",
  description: "Web Pendaftaran Rapimprov",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${monserrat.variable} antialiased`}>
        <HeaderSection />
        {children}
      </body>
    </html>
  );
}
