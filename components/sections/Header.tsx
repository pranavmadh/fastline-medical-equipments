"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo_png.png";
import NavLink from "../ui/NavLink";
import SearchIcon from "@/public/SearchIcon";
import ExternalLink from "@/public/ExternalLink";
import { Menu, X } from "lucide-react";

const NavLinks = [
  { href: "/#home", name: "Home" },
  { href: "/#aboutus", name: "About Us" },
  { href: "/products", name: "Products" },
  { href: "/#categories", name: "Categories" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full fixed z-50 top-0 left-0 bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between rounded-xl">
        <div className="flex items-center space-x-3">
          <Link href={"/"} className="text-2xl font-bold text-green-600">
            Fastline
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 ">
          {NavLinks.map((nav) => (
            <NavLink href={nav.href} name={nav.name} key={nav.name} />
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Right Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="tel:9710547383114"
            className="bg-neutral-100 px-6 py-3 rounded-full flex items-center gap-2"
          >
            Contact Us <ExternalLink />
          </Link>
          <div className="flex bg-neutral-100 p-3 rounded-full">
            <SearchIcon />
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 pb-6 shadow-md space-y-4">
          {NavLinks.map((nav) => (
            <NavLink href={nav.href} name={nav.name} key={nav.name} />
          ))}
          <Link
            href="tel:9710547383114"
            className="block bg-neutral-100 px-6 py-3 rounded-full text-center"
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}
