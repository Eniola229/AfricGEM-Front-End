import { PiImage } from "react-icons/pi";
import Button from "../../ui/Button";
import {
  HiListBullet,
  HiOutlineCodeBracket,
  HiOutlineCodeBracketSquare,
} from "react-icons/hi2";
import {
  MdFormatListNumbered,
  MdFormatQuote,
  MdOutlineFormatBold,
  MdOutlineFormatColorText,
  MdOutlineFormatItalic,
  MdOutlineFormatStrikethrough,
  MdOutlineLocalParking,
  MdOutlineRedo,
  MdOutlineUndo,
} from "react-icons/md";

import { useCurrentEditor } from "@tiptap/react";
import MinidropDown from "../../ui/MinidropDown";
import { useEffect, useState } from "react";
import { SetUrlLink } from "./SetLink";
import { SetImageLink } from "./SetImageURl";
import { SetImage } from "./SetImage";
import EditorData from "./EditorData";

function getHeadings(editor) {
  const headings = [
    {
      type: "h1",
      handler: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
    },
    {
      type: "h2",
      handler: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
    },
    {
      type: "h3",
      handler: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
    },
    {
      type: "h4",
      handler: () => editor.chain().focus().toggleHeading({ level: 4 }).run(),
    },
    {
      type: "h5",
      handler: () => editor.chain().focus().toggleHeading({ level: 5 }).run(),
    },
    {
      type: "h6",
      handler: () => editor.chain().focus().toggleHeading({ level: 6 }).run(),
    },
  ];
  return headings;
}

function getActions(editor) {
  const actions = [
    {
      type: "bold",
      handler: () => editor.chain().focus().toggleBold().run(),
      label: <MdOutlineFormatBold className="h-6 w-6" />,
    },
    {
      type: "italic",
      handler: () => editor.chain().focus().toggleItalic().run(),
      label: <MdOutlineFormatItalic className="h-6 w-6" />,
    },
    {
      type: "paragraph",
      handler: () => editor.chain().focus().setParagraph().run(),
      label: <MdOutlineLocalParking className="h-6 w-6" />,
    },
    {
      type: "textStyle",
      handler: () => editor.chain().focus().setColor("green").run(),
      label: <MdOutlineFormatColorText className="h-6 w-6" />,
      color: "green",
    },
    {
      type: "strike",
      handler: () => editor.chain().focus().toggleStrike().run(),
      label: <MdOutlineFormatStrikethrough className="h-6 w-6" />,
    },
    {
      type: "code",
      handler: () => editor.chain().focus().toggleCode().run(),
      label: <HiOutlineCodeBracket className="h-6 w-6" />,
    },
    {
      type: "codeBlock",
      handler: () => editor.chain().focus().toggleCodeBlock().run(),
      label: <HiOutlineCodeBracketSquare className="h-6 w-6" />,
    },
    {
      type: "blockquote",
      handler: () => editor.chain().focus().toggleBlockquote().run(),
      label: <MdFormatQuote className="h-6 w-6" />,
    },
    {
      type: "bulletList",
      handler: () => editor.chain().focus().toggleBulletList().run(),
      label: <HiListBullet className="h-6 w-6" />,
    },
    {
      type: "orderedList",
      handler: () => editor.chain().focus().toggleOrderedList().run(),
      label: <MdFormatListNumbered className="h-6 w-6" />,
    },
    {
      type: "undo",
      handler: () => editor.chain().focus().undo().run(),
      label: <MdOutlineUndo className="h-6 w-6" />,
    },
    {
      type: "redo",
      handler: () => editor.chain().focus().redo().run(),
      label: <MdOutlineRedo className="h-6 w-6" />,
    },
  ];
  return actions;
}
function EditorToobar({ register, setPostInfo }) {
  const { editor } = useCurrentEditor();
  const [files, setFiles] = useState("");
  // console.log(files);
  const headings = getHeadings(editor);
  const actions = getActions(editor);
  const setLink = SetUrlLink(editor);
  const addImageURL = SetImageLink(editor);
  const addImage = SetImage(editor, files?.name);
  useEffect(() => {
    setPostInfo((post) => {
      return {
        ...post,
        postbodyHtml: editor.getHTML(),
        postbodyJson: editor.getJSON(),
        postBodytext: editor.getText(),
      };
    });
  }, [editor, setPostInfo]);
  if (!editor) return null;
  return (
    <>
      <div className="flex items-center   bg-slate-100 w-full py-2 px-4 justify-between">
        <div className="flex items-center  gap-4">
          {actions.map((action) => (
            <Button
              handler={action.handler}
              className={
                editor.isActive(action.type, { color: action?.color })
                  ? " bg-slate-300 px-2 py-0.5 rounded-md"
                  : ""
              }
              key={action.type}
            >
              {/* <MdOutlineFormatBold className="h-6 w-6" /> */}
              {action.label}
            </Button>
          ))}
          <Button handler={addImageURL}>
            {" "}
            <PiImage className="h-6 w-6" />{" "}
          </Button>
          <div className="cursor-pointer h-6 w-6  self-center hidden">
            <label
              htmlFor="fileAttachment"
              className="block text-gray-700  font-bold  cursor-pointer"
            >
              <PiImage className="h-6 w-6" />{" "}
            </label>
            <input
              type="file"
              id="fileAttachment"
              name="fileAttachment"
              hidden
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              onChange={(e) => {
                setFiles(e.target.files[0]);
                addImage();
              }}
            />
          </div>
        </div>
        <div className="flex gap-10 items-center">
          <MinidropDown>
            <MinidropDown.ToggleButton menuID="heading-menu" title="heading" />
            <MinidropDown.MenuItem menuID="heading-menu">
              <div className=" hidden"></div>
              {headings.map((heading) => (
                <MinidropDown.MenuList key={heading.type}>
                  <Button
                    handler={heading.handler}
                    className={
                      editor.isActive("heading", {
                        level: Number(heading.type.split("")[1]),
                      })
                        ? " bg-slate-300 px-2 py-0.5 rounded-md"
                        : ""
                    }
                  >
                    {heading.type}
                  </Button>
                </MinidropDown.MenuList>
              ))}
            </MinidropDown.MenuItem>
          </MinidropDown>
          <MinidropDown>
            <MinidropDown.ToggleButton menuID="drop-more" />
            <MinidropDown.MenuItem menuID="drop-more">
              <div className=" hidden"></div>
              <MinidropDown.MenuList>
                <Button
                  handler={() =>
                    editor.chain().focus().setHorizontalRule().run()
                  }
                >
                  line
                </Button>
              </MinidropDown.MenuList>
              <MinidropDown.MenuList>
                <Button
                  handler={() => editor.chain().focus().setHardBreak().run()}
                >
                  break
                </Button>
              </MinidropDown.MenuList>
              <MinidropDown.MenuList>
                <Button handler={setLink}>Link</Button>
              </MinidropDown.MenuList>
            </MinidropDown.MenuItem>
          </MinidropDown>
        </div>
      </div>
      <EditorData register={register} editor={editor} />
    </>
  );
}

export default EditorToobar;
