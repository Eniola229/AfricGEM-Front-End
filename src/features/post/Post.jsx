import PostCard from "./PostCard";
import { usePost } from "./usePost";

function Post() {
  const { posts, isLoading } = usePost();
  return (
    <div>
      {posts.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
    </div>
  );
}

export default Post;
