import { useParams } from "react-router-dom";
import AdvertList from "../ADS/AdvertList";
import { useQuery } from "@tanstack/react-query";
import { getPost } from "../../services/apiPost";
import BlogPosts from "./BlogPosts";
import Posts from "./Posts";

function BlogPost() {
  const params = useParams();
  const id = Number(params.id);
  const { data: post = {}, isLoading } = useQuery({
    queryKey: ["blogpost", { id }],
    queryFn: () => getPost(id),
  });

  return (
    <section className="my-8">
      <div className="">
        <div className="w-full">
          <img
            className="object-cover object-center w-full h-80 xl:h-[28rem]"
            src="https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt=""
          />

          <h1 className=" mt-4  text-2xl font-semibold leading-tight text-gray-800 dark:text-white">
            What do you want to know about UI
          </h1>
        </div>
      </div>
      <Posts post={post} />
    </section>
  );
}

export default BlogPost;
