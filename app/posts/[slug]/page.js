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

export default function PostPage({ params }) {
  const { slug } = params;

  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { content, data } = matter(fileContents);

  return (
    <div>
      <Link href="/" className="text-blue-600 dark:text-blue-400 hover:underline mb-6 inline-block">
        ← Back to Home
      </Link>
      <div className="prose lg:prose-xl bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <h1>{data.title}</h1>
        <p className="text-gray-500 dark:text-gray-400 mb-4">{data.date}</p>
        <p className="mb-4">{data.description}</p>
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
}
