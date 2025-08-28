"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);

  return (
    <nav className="bg-blue-600 dark:bg-gray-900 text-white px-6 py-4">
      <div className="max-w-3xl mx-auto flex justify-between items-center">
        <Link href="/" className="font-bold text-lg">My Blog</Link>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-white dark:bg-gray-800 text-blue-600 dark:text-gray-200 px-3 py-1 rounded"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </nav>
  );
}
