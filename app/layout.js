import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "My Blog",
  description: "A Next.js blog built with Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800">
        <Navbar />
        <main className="max-w-3xl mx-auto py-10 px-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
