import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export async function generateStaticParams() {
  const filenames = fs.readdirSync(postsDirectory);
  return filenames.map((name) => ({
    slug: name.replace(/\.md$/, ""),
  }));
}

export default async function PostPage({ params }) {
  // ✅ await params before using it
  const { slug } = await params;

  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { content, data } = matter(fileContents);

  return (
    <div>
      <Link
        href="/"
        className="inline-block text-purple-600 dark:text-pink-400 hover:underline mb-6"
      >
        ← Back to Home
      </Link>
      <div className="prose lg:prose-xl bg-gradient-to-r from-yellow-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-xl shadow-lg">
        <h1 className="text-4xl font-bold text-purple-700 dark:text-pink-300">
          {data.title}
        </h1>
        <p className="text-gray-500 dark:text-gray-300 mb-4">{data.date}</p>
        <p className="mb-4">{data.description}</p>
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
}
