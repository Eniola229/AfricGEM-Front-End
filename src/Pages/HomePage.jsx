import Post from "../features/post/Post";

import PostEditor from "../features/post/PostEditor";
import { useSearchParams } from "react-router-dom";
function HomePage() {
  const [params] = useSearchParams();
  const isOpen = !params.get("open") ? "false" : params.get("open");
  console.log(isOpen);
  return (
    <>
      {isOpen === "true" && <PostEditor />}
      <Post />
    </>
  );
}

export default HomePage;
