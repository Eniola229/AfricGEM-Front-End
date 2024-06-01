import { isEven } from "../../utils/helpers";
import AdvertList from "../ADS/AdvertList";
import { usePost } from "../post/usePost";
import BlogPosts from "./BlogPosts";

function Blog() {
  const { isLoading, posts } = usePost();
  return (
    <div className="row-span-full -order-1 ">
      <div className="space-y-8 divide-y-2 ">
        {posts.slice(0, 3).map((blogPost, i) => (
          <BlogPosts key={blogPost.id} blogPost={blogPost} isEven={isEven(i)} />
        ))}
        <div>{/* <AdvertList /> */}</div>
        {posts.slice(3, 6).map((blogPost, i) => (
          <BlogPosts key={blogPost.id} blogPost={blogPost} isEven={isEven(i)} />
        ))}
        <div>
          <AdvertList />
        </div>
        {posts.slice(6, 9).map((blogPost, i) => (
          <BlogPosts key={blogPost.id} blogPost={blogPost} isEven={isEven(i)} />
        ))}
      </div>
    </div>
  );
}

export default Blog;
