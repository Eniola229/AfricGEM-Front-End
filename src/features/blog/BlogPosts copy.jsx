import { HiMiniArrowRightOnRectangle } from "react-icons/hi2";
import { Link } from "react-router-dom";
// 20rem_1fr
function BlogPosts({ isEven, blogPost }) {
  const {
    id,
    title,
    date,
    intro,
    author,
    read_time: readTime,
    body,
    img,
    subimgs,
    cover_topics: listTopics,
  } = blogPost;
  // const colums = isEven
  //   ? "grid-cols-[1fr_20rem]"
  //   : isEven === undefined
  //   ? ""
  //   : "grid-cols-[20rem_1fr]";
  const postTitle = title.toLowerCase().split(" ").join("");
  const paragraph1 = body.split("").slice(0, 600);
  const paragraph2 = body.slice(paragraph1.length, -1);
  return (
    <div className="pb-3 bg-slate-50 rounded-md border">
      <div className={`grid  justify-between gap-4`}>
        <div className={`h-72  flex gap-2  ${isEven ? "order-" : ""}`}>
          <img
            // src="https://images.unsplash.com/photo-1707697781368-d4f7a152510e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8"
            src={img}
            alt={title}
            className="w-full bg-slate-300 h-full object-cover object-center rounded-t-md"
          />
          {subimgs.length === 0 && (
            <img
              src="https://images.unsplash.com/photo-1707697781368-d4f7a152510e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8"
              alt="lol"
              className="w-full h-full object-cover object-center bg-slate-300"
            />
          )}
        </div>
        <div className="w-full flex flex-col justify-between  mr-4 px-3">
          <div>
            <h3 className="text-xl text-slate-500 font-semibold capitalize mb-3">
              {title}
            </h3>
            <p className="text-base  text-slate-400 first-letter:text-4xl tracking-wide leading-7">
              {paragraph1}
              <Link
                to={`post/${id}?title=${postTitle}`}
                className="underline text-yellow-500"
              >
                continue reading...{" "}
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-base font-medium text-slate-400 hiddens first-letter:ml-12 tracking-wide leading-7">
          {paragraph2}
        </p>
        <div className="flex items-end justify-end gap-6 mt-6">
          <div className=" divide-x-2 divide-slate-500  flex gap-2 items-center italic">
            <p className="font-medium capitalize">feb 14</p>
            <p className="text-base text-slate-400 font-medium px-2">
              {readTime.split(" ").at(0)} min read
            </p>
          </div>
          <button className="mr-4 text-xl text-green-600">
            <HiMiniArrowRightOnRectangle />
          </button>
        </div>
      </div>
      <Link
        class={`flex hover:bg-slate-300/50 transition ${
          isEven ? "flex-row-reverse" : ""
        } `}
        to={`post/${id}?title=${postTitle}`}
      >
        <img
          class="object-cover w-fu h-44 rounded-lg w-64"
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
          <div className="flex  gap-6 mt-6 justify-between">
            <div className=" divide-x-2 divide-slate-500  flex gap-2 items-center italic text-sm">
              <p className="font-medium capitalize">feb 14</p>
              <p className="text-base text-slate-400 font-medium px-2">
                {readTime.split(" ").at(0)} min read
              </p>
            </div>
            <div className="flex items-center gap-5">
              <span class="text-sm text-gray-500 dark:text-gray-300 ">
                by {author}
              </span>
              <button className="mr-4 text-xl text-green-600">
                <HiMiniArrowRightOnRectangle />
              </button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default BlogPosts;
