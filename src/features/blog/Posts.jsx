import { HiMiniArrowRightOnRectangle } from "react-icons/hi2";
import UserAvatar from "../user/UserAvatar";

function Posts({ post }) {
  console.log(post);
  const {
    title,
    date,
    read_time: readTime,
    body,
    img,
    subimgs,
    author,
    tags,
    cover_topics: listTopics,
    intro,
    extras_paragraph: paragraph,
  } = post;
  return (
    <div className="py-3 space-y-2">
      <div>
        {author && (
          <div className="flex flex-col">
            <div className="flex">
              <UserAvatar />
              <div>
                <h3>{author}</h3>
                <span className="flex gap-2 items-end">
                  publish on
                  <p>{date}</p>
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className={`grid  justify-between gap-4`}>
        <div className={`h-72  flex gap-2`}>
          <img
            // src="https://images.unsplash.com/photo-1707697781368-d4f7a152510e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8"
            src={img}
            alt={title}
            className="w-full bg-slate-300 h-full object-cover object-center"
          />
          {/* {subimgs.length === 0 && (
            <img
              src="https://images.unsplash.com/photo-1707697781368-d4f7a152510e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8"
              alt="lol"
              className="w-full h-full object-cover object-center bg-slate-300"
            />
          )} */}
        </div>
        <div className="w-full flex flex-col justify-between  mr-4">
          <div>
            <h3 className="text-xl text-slate-500 font-semibold capitalize mb-3">
              {title}
            </h3>
            {intro && (
              <p className="text-base font-medium text-slate-400 first-letter:text-4xl tracking-wide leading-7">
                intro Lorem, ipsum dolor. {intro}
              </p>
            )}
            {body && (
              <p className="text-base font-medium text-slate-400 hiddens first-letter:ml-12 tracking-wide leading-7">
                {body}
              </p>
            )}
            {listTopics && (
              <ul className="flex flex-col gap-3 text-slate-600 marker:">
                {listTopics?.map((list, i) => (
                  <li key={i} className="font-bold  flex gap-4 items-center">
                    <span>👉</span>
                    {list.topic}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        {paragraph && (
          <p className="text-base font-medium text-slate-400 hiddens first-letter:ml-12 tracking-wide leading-7">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
            labore quo qui modi nostrum ipsum quia deserunt. Incidunt, nesciunt
            deleniti? {paragraph}
          </p>
        )}
        <div className="flex items-end justify-end gap-6 mt-6">
          <div className=" divide-x-2 divide-slate-500  flex gap-2 items-center italic">
            <p className="font-medium capitalize">feb 14</p>
            <p className="text-base text-slate-400 font-medium px-2">
              {readTime?.split(" ")[0]} min read
            </p>
          </div>
          <button className="mr-4 text-xl text-green-600">
            <HiMiniArrowRightOnRectangle />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Posts;
