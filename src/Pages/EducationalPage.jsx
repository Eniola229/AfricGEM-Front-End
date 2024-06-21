import { HiOutlineBookmarkSquare } from "react-icons/hi2";
import MiniHeader from "../ui/MiniHeader";
import { PiStack } from "react-icons/pi";
import { Outlet, useLocation } from "react-router-dom";

function EducationalPage() {
  const urlLocation = useLocation();
  const isPost = urlLocation?.pathname.includes("/educational/blog/post");

  return (
    <div className=" space-y-4">
      {!isPost && (
        <MiniHeader
          titles={[
            { title: "blog", icon: <PiStack /> },
            { title: "Study tools", icon: <HiOutlineBookmarkSquare /> },
          ]}
        >
          <div>bookmark/saved</div>
        </MiniHeader>
      )}
      <Outlet />
    </div>
  );
}

export default EducationalPage;
