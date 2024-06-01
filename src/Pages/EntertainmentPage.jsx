import { HiMusicNote, HiVideoCamera } from "react-icons/hi";
import MiniHeader from "../ui/MiniHeader";

import { Outlet } from "react-router-dom";

function EntertainmentPage() {
  // all you need to do is to work on this page and the movie page both of them has the same render method

  return (
    <div>
      <MiniHeader
        titles={[
          { title: "Video", icon: <HiVideoCamera /> },
          { title: "music", icon: <HiMusicNote /> },
        ]}
      >
        <label
          htmlFor="movietype"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400  grow"
        >
          music
        </label>
        {/* <select
          id="movietype"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500   p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
        >
          <option value="action">Action</option>
          <option value="scifi">Scifi</option>
          <option value="funny">Funny</option>
          <option value="drama">Drama</option>
          <option value="love">Love</option>
        </select> */}
      </MiniHeader>
      <Outlet />
    </div>
  );
}

export default EntertainmentPage;
