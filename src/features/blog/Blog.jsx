import { isEven } from "../../utils/helpers";
import { usePost } from "../post/usePost";
import BlogPosts from "./BlogPosts";

function Blog() {
  const { isLoading, posts } = usePost();
  return (
    <div className="space-y-8 divide-y-2 ">
      {posts.map((blogPost, i) => (
        <BlogPosts key={blogPost.id} blogPost={blogPost} isEven={isEven(i)} />
      ))}
    </div>
  );
}

export default Blog;
