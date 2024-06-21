import { Link } from "react-router-dom";
function BlogPosts({ isEven, blogPost }) {
  console.log(blogPost);
  const { id, title, date, intro, author, read_time: readTime, img } = blogPost;
  const postTitle = title.toLowerCase().split(" ").join("");

  return (
    <div className=" bg-slate-50 rounded-md border relative">
      <Link
        class={`flex hover:bg-slate-300/50 transition ${
          isEven ? "flex-row-reverse" : ""
        }  my-auto `}
        to={`post/${id}?title=${postTitle}`}
      >
        <img
          class="object-cover w-fu h-44 rounded-lg w-64 my-auto mx-2"
          // src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          src={img}
          alt={title}
        />
        <div class="flex flex-col justify-between py-6 lg:mx-6 w-full gap-2">
          <h3
            href="#q"
            class="text-xl font-semibold capitalize text-slate-800  dark:text-white"
          >
            {title}{" "}
          </h3>
          <p className="text-base  text-slate-400  tracking-wide leading-7">
            {intro.split(" ").slice(0, 12).join(" ")}....
          </p>
          <div className="flex  gap-6 mt-6 justify-between items-center">
            <div className=" divide-x-2 divide-slate-500  flex gap-2 items-center italic text-sm">
              <p className="font-medium capitalize">{date}</p>
              <p className="text-base text-slate-400 font-medium px-2">
                {readTime.split(" ").at(0)} min read
              </p>
            </div>
            <span class="text-sm text-gray-500 dark:text-gray-300 ">
              by {author}
            </span>
            {/* <div className="flex items-center gap-5"></div> */}
          </div>
        </div>
      </Link>
    </div>
  );
}

export default BlogPosts;
