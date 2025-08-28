import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Inter, Merriweather } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-merriweather",
});

export const metadata = {
  title: "Arsh Gupta Blog",
  description: "A vibrant Next.js + Tailwind blog",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${merriweather.variable}`}>
      <body className="flex flex-col min-h-screen bg-gradient-to-b from-yellow-50 to-yellow-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-100 transition-colors duration-300 font-sans">
        <Navbar />
        <main className="flex-grow max-w-4xl mx-auto py-10 px-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
