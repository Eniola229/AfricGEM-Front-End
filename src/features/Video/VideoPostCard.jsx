import { HiPause, HiPlay } from "react-icons/hi";
import { HiOutlineBookmark, HiOutlineHeart } from "react-icons/hi2";
import { LiaCommentsSolid } from "react-icons/lia";
import { SlShare } from "react-icons/sl";

function VideoPostCard() {
  return (
    <div className="h-full w-full  flex items-center justify-center">
      <div className="border max-w-screen-md bg-slate-50 mt-6 rounded-2xl p-4">
        <div className="flex items-center	justify-between">
          <div className="gap-3.5	flex items-center ">
            <img
              src="https://images.unsplash.com/photo-1617077644557-64be144aa306?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
              className="object-cover bg-yellow-500 rounded-full w-10 h-10"
              alt=""
            />
            <div className="flex flex-col">
              <b className="mb-2 capitalize">sofia müller</b>
              <time dateTime="06-08-21" className="text-gray-400 text-xs">
                06 August at 09.15 PM
              </time>
            </div>
          </div>
          <div className="bg-gray-100	rounded-full h-3.5 flex	items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="34px"
              fill="#92929D"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
            </svg>
          </div>
        </div>
        <div className="mt-5 flex gap-2	 justify-center border-b pb-4 flex-wrap	 relative">
          <video
            src="https://images.unsplash.com/photo-1610147323479-a7fb11ffd5dd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80"
            className="bg-gray-500 rounded-2xl w-1/3 object-cover h-96 flex-auto"
            alt="phot"
          />
          <div className="absolute  top-44">
            <button className="p-4 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none mx-4 text-4xl">
              <HiPlay />
            </button>
            <button className="p-4 hidden rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none mx-4 text-4xl">
              <HiPause />
            </button>
          </div>
        </div>
        <div className="whitespace-pre-wrap mt-7">
          Hello guys 🤣🤣🤣😀 ? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Eligendi doloremque aliquid blanditiis voluptate,
          dolorem obcaecati harum autem voluptatum accusantium magni!
        </div>
        <div className=" h-16 border-b  flex items-center justify-around	">
          <div className="flex items-center	gap-3	 cursor-pointer">
            <LiaCommentsSolid className="h-6 w-6" />

            <div className="text-sm	">10 Comments</div>
          </div>
          <div className="flex items-center	gap-3 cursor-pointer">
            <HiOutlineHeart className="h-6 w-6 text-red-500" />
            <div className="text-sm">5 Likes</div>
          </div>
          <div className="flex items-center	gap-3 cursor-pointer">
            <SlShare className="w-6 h-6" />
            <div className="text-sm">Share</div>
          </div>
          <div className="flex items-center	gap-3  cursor-pointer">
            <HiOutlineBookmark className="h-6 w-6" />
            <div className="text-sm">Saved</div>
          </div>
        </div>
        <div className="flexx items-center justify-between mt-4 hidden">
          <img
            src="https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            alt="avatar"
            className="bg-yellow-500 rounded-full w-10 h-10 object-cover border"
          />
          <div className="flex items-center	justify-between	 bg-gray-50 h-11 w-11/12 border rounded-2xl	 overflow-hidden px-4 ">
            <input
              type="text"
              className="h-full w-full bg-gray-50 outline-none "
              placeholder="Write your comment..."
              name="comment"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoPostCard;
