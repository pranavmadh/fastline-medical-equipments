import type { Metadata } from "next";
import { Manrope, Poppins, Roboto, Geist } from "next/font/google";
import "@/app/globals.css";
import Header from "@/components/sections/Header";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const geist = Geist({
  subsets: ["latin"],
});

const manRope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400"],
});
export const metadata: Metadata = {
  title: "Fast Line Medical Equipments Trading",
  description: "Medical Supplies & Equipment Online in UAE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className}  bg-neutral-200 antialiased  pt-0 `}
      >
        {children}
      </body>
    </html>
  );
}
