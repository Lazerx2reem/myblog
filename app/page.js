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

  // Sort by date descending
  posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="space-y-8">
      <h1 className="text-5xl font-extrabold mb-10 text-center text-purple-700 dark:text-purple-400">
        Arsh Gupta Blog
      </h1>
      <p>My name is Arsh Gupta, I am a junior studying Computer Science. Im super excited to take AI-285 this semester! I love hiking, swimming and spending time in nature. You'll see me a lot at the arboretum! Im here to learn as much as I can and I cant wait to learn more in this class!</p>
      {posts.map((post, index) => (
        <div
          key={post.slug}
          className={`p-6 rounded-xl shadow-lg transform transition-transform hover:scale-105 bg-gradient-to-r from-pink-100 to-purple-100 dark:from-gray-800 dark:to-gray-700`}
        >
          <h2 className="text-2xl font-bold mb-2 text-purple-800 dark:text-pink-200">
            {post.title}
          </h2>
          <p className="text-gray-500 dark:text-gray-300 mb-3">{post.date}</p>
          <p className="mb-3 text-gray-700 dark:text-gray-200">{post.description}</p>
          <Link
            href={`/posts/${post.slug}`}
            className="text-white bg-purple-600 dark:bg-pink-500 px-4 py-2 rounded-lg font-semibold hover:bg-purple-700 dark:hover:bg-pink-600 transition-colors"
          >
            Read More →
          </Link>
        </div>
      ))}
    </div>
  );
}
