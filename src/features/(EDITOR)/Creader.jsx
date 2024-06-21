import Tiptap from "./Tiptap";
import EditorFormHeader from "./EditorFormHeader";
import Button from "../../ui/Button";
import { useForm } from "react-hook-form";
import { useState } from "react";
function Creader() {
  const [postInfo, setPostInfo] = useState({
    postbodyJson: null,
    postBodytext: "",
    link: "",
    post_img_path: "",
  });
  const { register, formState, handleSubmit } = useForm();
  const { errors } = formState;
  function onSubmit(data) {
    const { hashtags, post_title } = data;
    const newBlogPost = {
      post_title,
      ...postInfo,
      hashtags: hashtags.trim(" ").split("#"),
    };
    console.log(newBlogPost);
  }
  return (
    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      <div className="w-[50rem] ml-20 bg-white rounded-lg border border-gray-200">
        <EditorFormHeader sync={register} error={errors} />
        <Tiptap register={register} setPostInfo={setPostInfo} />
      </div>
      <Button type="small" className="ml-auto">
        publish
      </Button>
    </form>
  );
}

export default Creader;
