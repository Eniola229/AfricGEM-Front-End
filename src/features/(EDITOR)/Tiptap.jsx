import { EditorProvider } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import EditorToobar from "./EditorToobar";
import { Color } from "@tiptap/extension-color";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import Dropcursor from "@tiptap/extension-dropcursor";
// define your extension array
const extensions = [
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  TextStyle.configure({ types: [ListItem.name] }),
  StarterKit.configure({
    bulletList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
  }),
  Link.configure({
    HTMLAttributes: {
      class:
        "underline font-medium text-yellow-500 decoration-wavy decoration-yellow-500",
    },
    validate: (href) => /^https?:\/\//.test(href),
  }),
  Image.configure({
    HTMLAttributes: {
      class: "h-48 object-center object-cover w-full ",
    },
  }),
  Dropcursor,
];

const content = "this is my post body";

const Tiptap = ({ register, setPostInfo }) => {
  return (
    <>
      <EditorProvider
        extensions={extensions}
        content={content}
        editorProps={{
          attributes: {
            class:
              "lg:w-full   my-4 lg:h-[18rem]  overflow-auto  leading-5 transition duration-150 ease-in-out sm:text-sm px-4 sm:leading-5 resize-none focus:outline-none  placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg  dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-green-300 placeholder:text-xl",
          },
        }}
        slotBefore={
          <EditorToobar register={register} setPostInfo={setPostInfo} />
        }
        autofocus={true}
      />
    </>
  );
};

export default Tiptap;
