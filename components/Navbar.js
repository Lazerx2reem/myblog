"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Load theme from localStorage
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <nav className="bg-gradient-to-r from-purple-500 to-pink-500 dark:from-gray-900 dark:to-gray-700 text-white px-6 py-4 sticky top-0 z-50 shadow-lg">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <Link href="/" className="font-bold text-xl">
          My Colorful Blog
        </Link>
        <button
          onClick={toggleDarkMode}
          className="bg-white dark:bg-gray-800 text-purple-600 dark:text-gray-200 px-4 py-2 rounded-lg font-semibold hover:scale-105 transition-transform"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </nav>
  );
}
