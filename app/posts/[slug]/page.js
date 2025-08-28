import ReactMarkdown from "react-markdown";
import posts from "../../../data/posts";
import Link from "next/link";
import fs from "fs";
import path from "path";

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function PostPage({ params }) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), "posts", `${slug}.md`);
  let content = "";

  try {
    content = fs.readFileSync(filePath, "utf8");
  } catch {
    content = "# Post not found";
  }

  return (
    <div>
      <Link href="/" className="text-blue-600 hover:underline mb-6 inline-block">
        ← Back to Home
      </Link>
      <div className="prose lg:prose-xl bg-white p-6 rounded-lg shadow">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
}
