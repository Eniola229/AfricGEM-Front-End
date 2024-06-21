import Creader from "./Creader";
import Tiptap from "./Tiptap";

function CreatPost() {
  return (
    <div className="flex justify-center bg-gray-100 gap-12 ">
      <Creader />
      <div className="w-1/3 mr-8">
        Writing a Great Post Title Think of your post title as a super short
        (but compelling!) description — like an overview of the actual post in
        one short sentence. Use keywords where appropriate to help ensure people
        can find your post by search.
      </div>
    </div>
  );
}

export default CreatPost;
