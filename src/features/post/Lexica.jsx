import {
  $getRoot,
  $getSelection,
  $isRangeSelection,
  COMMAND_PRIORITY_LOW,
  FORMAT_TEXT_COMMAND,
  createCommand,
} from "lexical";
import { useEffect, useState } from "react";
// import { LexicalList } from "@lexical/list/LexicalList";
// import { LexicalLink } from "@lexical/link/LexicalLink";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { $setBlocksType } from "@lexical/selection";
import { $createHeadingNode, HeadingNode } from "@lexical/rich-text";
import {
  $createListItemNode,
  $createListNode,
  INSERT_ORDERED_LIST_COMMAND,
  INSERT_UNORDERED_LIST_COMMAND,
  ListItemNode,
  ListNode,
  insertList,
} from "@lexical/list";
// import ToollbarPlugin from "./FormatLIst";
// import {
//   $createListNode,
//   INSERT_CHECK_LIST_COMMAND,
//   INSERT_ORDERED_LIST_COMMAND,
//   INSERT_UNORDERED_LIST_COMMAND,
//   ListItemNode,
//   ListNode,
//   insertList,
// } from "@lexical/list";

const theme = {
  ltr: "ltr",
  rtl: "rtl",
  paragraph: "editor-paragraph",
  quote: "editor-quote",
  heading: {
    h1: "text-2xl font-extralbold",
    h2: "text-xl font-bold",
    h3: "text-xl font-medium",
    h4: "text-lg font-semibold",
    h5: "font-bold",
    h6: "font-medium",
  },
  list: {
    nested: {
      listitem: "text-4xl",
    },

    ol: "list-decimal bg-yellow-300 font-bold",
    ul: "list-disc",
    listitem: "font-black",
    listitemChecked: "",
    listitemUnchecked: "",
  },
  hashtag: "editor-hashtag",
  image: "editor-image",
  link: "editor-link",
  text: {
    bold: "editor-textBold",
    code: "editor-textCode",
    italic: "editor-textItalic",
    strikethrough: "editor-textStrikethrough",
    subscript: "editor-textSubscript",
    superscript: "editor-textSuperscript",
    underline: "editor-textUnderline",
    underlineStrikethrough: "editor-textUnderlineStrikethrough",
  },
  code: "editor-code",
  codeHighlight: {
    atrule: "editor-tokenAttr",
    attr: "editor-tokenAttr",
    boolean: "editor-tokenProperty",
    builtin: "editor-tokenSelector",
    cdata: "editor-tokenComment",
    char: "editor-tokenSelector",
    class: "editor-tokenFunction",
    "class-name": "editor-tokenFunction",
    comment: "editor-tokenComment",
    constant: "editor-tokenProperty",
    deleted: "editor-tokenProperty",
    doctype: "editor-tokenComment",
    entity: "editor-tokenOperator",
    function: "editor-tokenFunction",
    important: "editor-tokenVariable",
    inserted: "editor-tokenSelector",
    keyword: "editor-tokenAttr",
    namespace: "editor-tokenVariable",
    number: "editor-tokenProperty",
    operator: "editor-tokenOperator",
    prolog: "editor-tokenComment",
    property: "editor-tokenProperty",
    punctuation: "editor-tokenPunctuation",
    regex: "editor-tokenVariable",
    selector: "editor-tokenSelector",
    string: "editor-tokenSelector",
    symbol: "editor-tokenProperty",
    tag: "editor-tokenProperty",
    url: "editor-tokenOperator",
    variable: "editor-tokenVariable",
  },
};

function MyOnchangePlugin({ onChange }) {
  const [editor] = useLexicalComposerContext();
  //   console.log(editor.getEditorState());
  useEffect(() => {
    return editor.registerUpdateListener(({ editorState }) => {
      onChange(editorState);
    });
  }, [onChange, editor]);
  return null;
}

function MyHeadingPlugin() {
  const tags = ["h1", "h2", "h3", "h4"];
  const [editor] = useLexicalComposerContext();
  const onClick = function (tag = "h1") {
    editor.update(() => {
      const select = $getSelection();
      if ($isRangeSelection(select)) {
        $setBlocksType(select, () => $createHeadingNode(tag));
      }
    });
  };
  return tags.map((tag) => (
    <button
      type="button"
      className="bg-green-500 hover:bg-green-600 text-green-50 font-semibold py-2 px-4 rounded mr-2 fo"
      onClick={() => onClick(tag)}
      key={tag}
    >
      {tag}
    </button>
  ));
}

function MyListPlugin() {
  const ListTags = ["ol", "ul"];
  const [editor] = useLexicalComposerContext();
  console.log(editor._commands);
  const onClick = function (tag) {
    editor.registerCommand(
      INSERT_ORDERED_LIST_COMMAND,

      () => {
        const selection = $getSelection();
        if ($isRangeSelection(selection)) {
          $setBlocksType(selection, () => $createListNode("number", 1));
        }
        return true;
      },
      COMMAND_PRIORITY_LOW
    );
    if (tag === "ol") {
      editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND, undefined);
      console.log("OL", editor._commands);
    } else {
      editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, undefined);
      console.log("UL", editor._commands);
    }
  };
  return ListTags.map((tag) => (
    <button
      type="button"
      className="bg-green-500 hover:bg-green-600 text-green-50 font-semibold py-2 px-4 rounded mr-2 fo"
      onClick={() => onClick(tag)}
      key={tag}
    >
      {tag}
    </button>
  ));
}
function FormatText() {
  const textFormat = ["italic", "bold"];
  const [editor] = useLexicalComposerContext();
  const onClick = function (tag) {
    editor.dispatchCommand(FORMAT_TEXT_COMMAND, tag);
  };
  return textFormat.map((tag) => (
    <button
      type="button"
      className="bg-green-500  hover:bg-green-600 text-green-50 font-semibold py-2 px-4 rounded mr-2 fo"
      onClick={() => onClick(tag)}
      key={tag}
    >
      {tag}
    </button>
  ));
}
function ToolbarPlugin() {
  return (
    <div className=" my-8">
      <MyHeadingPlugin />
      <MyListPlugin />
      <FormatText />
    </div>
  );
}
// Lexical React plugins are React components, which makes them
// highly composable. Furthermore, you can lazy load plugins if
// desired, so you don't pay the cost for plugins until you
// actually use them.
function MyCustomAutoFocusPlugin() {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    // Focus the editor when the effect fires!
    editor.focus();
  }, [editor]);

  return null;
}

// function LexicalListg() {}

// Catch any errors that occur during Lexical updates and log them
// or throw them as needed. If you don't throw them, Lexical will
// try to recover gracefully without losing user data.
function onError(error) {
  console.error(error);
}

function Editor() {
  const initialConfig = {
    namespace: "MyEditor",
    theme,
    onError,
    nodes: [HeadingNode, ListNode, ListItemNode],
  };

  const [editorState, setEditorState] = useState();
  const editer = editorState && JSON.parse(editorState);
  const editorText = editer?.root?.children[0]?.children;
  function onChange(editorState) {
    const editorStateJson = editorState.toJSON();
    setEditorState(JSON.stringify(editorStateJson));
    editorState.read(() => {
      // Read the contents of the EditorState here.
      const root = $getRoot();
      const selection = $getSelection();
    });
  }

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <ToolbarPlugin />
      <RichTextPlugin
        contentEditable={
          <ContentEditable
            className="py-4 px-2 h-full border-green-600 border-2"
            rows={10}
          />
        }
        placeholder={
          <div className="absolute top-[5.5rem] left-2 text-slate-400">
            Enter some text...
          </div>
        }
        ErrorBoundary={LexicalErrorBoundary}
      />
      <MyOnchangePlugin onChange={onChange} />
      <HistoryPlugin />
      <MyCustomAutoFocusPlugin />
    </LexicalComposer>
  );
}

export default Editor;
