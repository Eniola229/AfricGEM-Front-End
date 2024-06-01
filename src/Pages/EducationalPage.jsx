import { HiOutlineBookmarkSquare } from "react-icons/hi2";
import Blog from "../features/blog/Blog";
import MiniHeader from "../ui/MiniHeader";
import { PiStack } from "react-icons/pi";

function EducationalPage() {
  return (
    <div className=" space-y-4">
      <MiniHeader
        titles={[
          { title: "blog", icon: <PiStack /> },
          { title: "Study tools", icon: <HiOutlineBookmarkSquare /> },
        ]}
      >
        <div>bookmark/saved</div>
      </MiniHeader>
      <Blog />
    </div>
  );
}

export default EducationalPage;
