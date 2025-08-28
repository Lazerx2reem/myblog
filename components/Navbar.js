"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-4 sticky top-0 z-50 shadow-lg">
      <div className="max-w-4xl mx-auto w-full flex items-center">
        <Link href="/" className="font-bold text-xl">
          Arsh Gupta Blog
        </Link>
      </div>
    </nav>
  );
}
