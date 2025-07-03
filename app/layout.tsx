import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/app/globals.css";

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
