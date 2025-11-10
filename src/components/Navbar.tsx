"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import ThemeToggleButton from "./ThemeToggleButton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="flex items-center text-white text-lg font-bold"
        >
          <Image
            src="/peter.jpg"
            alt="Peter Hoggarth"
            width={40}
            height={40}
            className="rounded-full mr-4"
          />
          Peter Hoggarth
        </Link>
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/" className="text-gray-300 hover:text-white">
            Home
          </Link>
          <Link href="/projects" className="text-gray-300 hover:text-white">
            Projects
          </Link>
          <Link href="/experience" className="text-gray-300 hover:text-white">
            Work Experience
          </Link>
          <Link href="/skills" className="text-gray-300 hover:text-white">
            Skills
          </Link>
          <Link href="/contact" className="text-gray-300 hover:text-white">
            Contact
          </Link>
          <ThemeToggleButton />
        </div>
        <div className="md:hidden flex items-center">
          <ThemeToggleButton />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 hover:text-white focus:outline-none ml-4"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-90 flex flex-col items-center justify-center space-y-8">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-gray-300 hover:text-white focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          <Link
            href="/"
            className="text-gray-300 hover:text-white text-2xl"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/projects"
            className="text-gray-300 hover:text-white text-2xl"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="/experience"
            className="text-gray-300 hover:text-white text-2xl"
            onClick={() => setIsOpen(false)}
          >
            Work Experience
          </Link>
          <Link
            href="/skills"
            className="text-gray-300 hover:text-white text-2xl"
            onClick={() => setIsOpen(false)}
          >
            Skills
          </Link>
          <Link
            href="/contact"
            className="text-gray-300 hover:text-white text-2xl"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
