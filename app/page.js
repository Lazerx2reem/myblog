import fs from "fs";
import path from "path";
import Link from "next/link";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export default function Home() {
  const filenames = fs.readdirSync(postsDirectory);
  const posts = filenames.map((name) => {
    const fullPath = path.join(postsDirectory, name);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);

    return {
      slug: name.replace(/\.md$/, ""),
      ...data,
    };
  });

  // Sort posts by date descending
  posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold mb-8 text-center">My Blog</h1>
      {posts.map((post) => (
        <div
          key={post.slug}
          className="p-6 border rounded-lg shadow hover:shadow-lg transition duration-300 bg-white dark:bg-gray-800"
        >
          <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-3">{post.date}</p>
          <p className="mb-3 text-gray-700 dark:text-gray-300">{post.description}</p>
          <Link
            href={`/posts/${post.slug}`}
            className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
          >
            Read More →
          </Link>
        </div>
      ))}
    </div>
  );
}
