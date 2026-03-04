import localFont from "next/font/local";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import "./global.css";

import Header from "@/components/Header";
 
const alpino = localFont({
  src: '../../public/fonts/Alpino-Variable.woff2',
  display: 'swap',
  weight: '100 900',
  variable: '--font-alpino',
})
 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" className={alpino.variable}>
      <body className="min-h-screen overflow-x-hidden bg-[#388E3C]">
        < Header />
        <main>{children}</main>
      </body>
    </html>
  );
}