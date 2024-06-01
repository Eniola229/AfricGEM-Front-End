import { useParams } from "react-router-dom";
import AdvertList from "../ADS/AdvertList";
import { useQuery } from "@tanstack/react-query";
import { getPost } from "../../services/apiPost";
import BlogPosts from "./BlogPosts";
import Posts from "./Posts";

function Post() {
  const params = useParams();
  const id = Number(params.id);
  const { data: post = {}, isLoading } = useQuery({
    queryKey: ["blogpost", { id }],
    queryFn: () => getPost(id),
  });

  return (
    <div>
      {" "}
      {/* <AdvertList /> */}
      <h3 className="head ">{post.title}</h3>
      <Posts post={post} />
    </div>
  );
}

export default Post;
