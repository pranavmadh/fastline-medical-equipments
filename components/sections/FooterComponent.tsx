import Link from "next/link";
import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-green-600 text-white py-4 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
        {/* Left - Brand */}
        <div className="font-semibold tracking-wide mb-2 md:mb-0 text-center">
          © 2025 Fastline Medical Equipments. All rights reserved.
        </div>

        {/* Center - Links */}
        <div className="flex flex-wrap gap-4 justify-center mb-2 md:mb-0">
          <Link href="#about" className="hover:underline">
            About
          </Link>
          <Link href="#categories" className="hover:underline">
            Categories
          </Link>
          <Link href="#contact" className="hover:underline">
            Contact
          </Link>
        </div>

        {/* Right - Contact */}
        <div className="flex items-center gap-4 text-white/90">
          <div className="flex items-center gap-1">
            <Phone className="h-4 w-4" />
            <Link href={"tel:971522922874"} className="hidden sm:inline">
              +971 522 922 874{" "}
            </Link>
            <Link href={"tel:+971561625886"} className="hidden sm:inline">
              +971 561 625 886{" "}
            </Link>
          </div>
          <div className="flex items-center gap-1">
            <Mail className="h-4 w-4" />
            <span className="hidden sm:inline">
              {" "}
              fastlinemedicalequipment@gmail.com
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
