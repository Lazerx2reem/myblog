import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "My Colorful Blog",
  description: "A vibrant Next.js + Tailwind blog",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-gradient-to-b from-yellow-50 to-yellow-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-100 transition-colors duration-300">
        <Navbar />
        <main className="flex-grow max-w-4xl mx-auto py-10 px-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
