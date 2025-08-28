import { useParams, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

function BlogPost() {
  const { slug } = useParams(); // matches URL like /post/post1
  const [content, setContent] = useState("");

  useEffect(() => {
    import(`../posts/${slug}.md`) // load markdown file
      .then(res => fetch(res.default))
      .then(res => res.text())
      .then(text => setContent(text))
      .catch(() => setContent("# Post not found"));
  }, [slug]);

  return (
    <div className="p-6">
      <ReactMarkdown>{content}</ReactMarkdown>
      <Link to="/" className="text-blue-500 mt-6 block">← Back to Home</Link>
    </div>
  );
}

export default BlogPost;
