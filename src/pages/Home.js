import { Link } from "react-router-dom";
import posts from "../data/posts";

function Home() {
  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">My Blog</h1>
      {posts.map((post) => (
        <div key={post.slug} className="mb-6 border-b pb-4">
          <h2 className="text-2xl font-semibold">{post.title}</h2>
          <p className="text-gray-500">{post.date}</p>
          <Link 
            to={`/post/${post.slug}`} 
            className="text-blue-500 hover:underline"
          >
            Read More →
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Home;
