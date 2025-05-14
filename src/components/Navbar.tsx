"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Icons for hamburger menu
import Link from "next/link";
import Image from "next/image";
//  import Image from "next/image";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-maroon-700 p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Container for centering logo and menu */}
        <div className="flex justify-between items-center w-full">
          {/* Space to the left of the logo */}
          <div className="ml-4">
            {/* Logo Image */}
            <Image
              src="images/logo2.png"
              alt="IEEE AAMU"
              className="h-10"
              width={40}
              height={40}
            />
          </div>

          {/* Hamburger Menu Button (Visible on Mobile) */}
          <button
            className="block lg:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center justify-center space-x-10 text-white font-medium text-lg w-full whitespace-nowrap">
          <li>
            <Link href="#home" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link href="#about" className="nav-link">
              About
            </Link>
          </li>
          <li>
            <Link href="#events" className="nav-link">
              Events
            </Link>
          </li>
          <li>
            <Link href="#team" className="nav-link">
              Our Team
            </Link>
          </li>
          <li>
            <Link href="#contact" className="nav-link">
              Contact Us
            </Link>
          </li>
          <li>
            <button
              onClick={() =>
                window.open(
                  "https://forms.gle/2ugQ3cy8NG3M9rUg8",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
              className="border border-white text-white px-4 py-1 rounded-lg transition duration-300 hover:bg-white hover:text-maroon-700"
              aria-label="Join IEEE - Opens in a new tab"
            >
              Join IEEE
            </button>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-maroon-800 p-4">
          <ul className="flex flex-col space-y-4 text-white text-center">
            <li>
              <Link
                href="#home"
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#events"
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                Events
              </Link>
            </li>
            <li>
              <Link
                href="#team"
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                Our Team
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </li>
            <li>
              <button className="border border-white text-white px-4 py-2 rounded-lg transition duration-300 hover:bg-white hover:text-maroon-700">
                Join IEEE
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
