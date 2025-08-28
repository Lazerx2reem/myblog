// components/Navbar.js
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4">
      <div className="max-w-3xl mx-auto flex justify-between">
        <Link href="/" className="font-bold text-lg">My Blog</Link>
        <div className="space-x-4">
          <Link href="/">Home</Link>
        </div>
      </div>
    </nav>
  );
}
